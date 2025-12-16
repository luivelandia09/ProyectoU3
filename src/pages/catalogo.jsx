import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";
import catalogoData from "../json/catalogo.json";

const PLACEHOLDER = "https://via.placeholder.com/300x300?text=Sin+imagen";

export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // 🔥 LEER PRODUCTOS DESDE FIRESTORE (DASHBOARD)
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (snap) => {
      const firestoreProducts = snap.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          // 🔥 NORMALIZAMOS
          description: data.description || data.descripcion || "",
          imageURL: data.imageURL || data.imageUrl || "",
        };
      });

      setProductos([...catalogoData, ...firestoreProducts]);
    });

    return () => unsub();
  }, []);

  const categorias = ["Todas", ...new Set(productos.map((p) => p.category))];

  const productosFiltrados = productos.filter((p) => {
    const texto = `${p.name ?? ""} ${p.description ?? ""}`.toLowerCase();
    const matchBusqueda = texto.includes(busqueda.toLowerCase());

    const matchCategoria =
      categoriaSeleccionada === "Todas" || p.category === categoriaSeleccionada;

    return matchBusqueda && matchCategoria;
  });

  // 🛒 CARRITO
  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const cambiarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) eliminarDelCarrito(id);
    else {
      setCarrito(
        carrito.map((item) =>
          item.id === id ? { ...item, cantidad: nuevaCantidad } : item
        )
      );
    }
  };

  const total = carrito.reduce(
    (sum, item) => sum + Number(item.price) * item.cantidad,
    0
  );

  const cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* NAVBAR */}
      <div className="bg-primary text-black p-4 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🩺 Catálogo Farmaven</h1>
          <button
            onClick={() => setMostrarCarrito(!mostrarCarrito)}
            className="relative bg-primary text-white px-4 py-2 rounded-lg font-semibold"
          >
            🛒 Carrito
            {cantidadTotal > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {cantidadTotal}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* BUSCADOR / FILTROS */}
      <div className="container mx-auto p-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              placeholder="🔍 Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg"
            />

            <select
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold"
            >
              {categorias.map((cat) => (
                <option key={cat} value={cat} className="text-black">
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* CATÁLOGO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {productosFiltrados.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative bg-gray-50 flex items-center justify-center h-32">
                <img
                  src={p.imageURL || p.imageUrl || PLACEHOLDER}
                  alt={p.name}
                  onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
                  className="max-h-24 object-contain"
                />
                <span className="absolute top-2 right-2 bg-blue-700 text-white text-xs px-2 py-1 rounded-full">
                  {p.category}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="text-sm text-gray-600">
                  {p.description || "Sin descripción disponible"}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-2xl font-bold text-blue-700">
                    S/ {Number(p.price).toFixed(2)}
                    <p
                      className={`mt-1 text-sm font-semibold ${
                        p.stock > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {p.stock > 0 ? `Stock: ${p.stock} unidades` : "Sin stock"}
                    </p>
                  </span>
                </div>

                <button
                  onClick={() => agregarAlCarrito(p)}
                  className="w-full mt-3 bg-primary text-white py-2 rounded-lg font-semibold"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {productosFiltrados.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            No se encontraron productos
          </p>
        )}
      </div>

      {/* CARRITO */}
      {mostrarCarrito && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end p-4">
          <div className="bg-white w-full max-w-md h-full rounded-lg flex flex-col">
            <div className="bg-blue-800 text-white p-4 flex justify-between">
              <h2 className="text-xl font-bold">🛒 Tu Carrito</h2>
              <button onClick={() => setMostrarCarrito(false)}>×</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {carrito.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-gray-50 p-3 rounded"
                >
                  <img
                    src={item.imageUrl || PLACEHOLDER}
                    className="w-12 h-12 object-contain bg-white p-1"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-blue-700 font-bold">
                      S/ {Number(item.price).toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          cambiarCantidad(item.id, item.cantidad - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.cantidad}</span>
                      <button
                        onClick={() =>
                          cambiarCantidad(item.id, item.cantidad + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        onClick={() => eliminarDelCarrito(item.id)}
                        className="ml-auto text-red-500"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {carrito.length > 0 && (
              <div className="border-t p-4">
                <div className="flex justify-between mb-4">
                  <span>Total:</span>
                  <span className="text-xl font-bold text-blue-700">
                    S/ {total.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">
                  Proceder al pago
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-white pt-10 bg-blue-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-around gap-10 text-center">
          <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-start w-full md:w-1/2">
            <div className="w-auto">
              <img
                src={new URL("../img/logo.png", import.meta.url).href}
                alt="Logo FARMAVEN"
                className="w-60 h-auto mx-auto md:mx-0"
              />

              <p className="text-sm mt-4 text-white max-w-xs mx-auto md:mx-0 md:text-left">
                FARMAVEN nació con la misión de ofrecer medicamentos y productos
                de salud accesibles para todos, con un servicio humano y
                cercano.
              </p>
            </div>

            <div className="w-auto md:text-left">
              <h5 className="font-bold mb-2">FARMAVEN</h5>
              <ul className="text-sm space-y-1">
                <li>
                  <Link
                    to="/catalogo"
                    className="hover:underline text-blue-200"
                  >
                    Catálogo del mes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonios"
                    className="hover:underline text-blue-200"
                  >
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/libroderecla"
                    className="hover:underline text-blue-200"
                  >
                    Libro de reclamaciones
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-start w-full md:w-1/2">
            <div className="w-auto md:text-left">
              <h5 className="font-bold mb-2">Contáctanos</h5>
              <ul className="text-sm space-y-1">
                <li className="text-white">
                  📧{" "}
                  <Link
                    to="mailto:contacto@farmaven.com"
                    className="hover:underline text-blue-200"
                  >
                    contacto@farmaven.com
                  </Link>
                </li>
                <li className="text-white">
                  📞{" "}
                  <Link
                    to="tel:+51987654321"
                    className="hover:underline text-blue-200"
                  >
                    +51 987 654 321
                  </Link>
                </li>
                <li className="text-white">
                  Central Telefónica: (01) 612-5000
                </li>
              </ul>
            </div>

            <div className="w-auto md:text-left">
              <h5 className="font-bold mb-2">Suscríbete</h5>
              <p className="text-sm mb-3 text-white">
                Recibe notificaciones de sorteos y promociones exclusivas 🎁
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("¡Gracias por suscribirte!");
                  e.target.reset();
                }}
                className="flex flex-col sm:flex-row items-center md:items-start gap-2"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo"
                  required
                  className="border rounded px-2 py-1 bg-gray-800 text-white placeholder-gray-400 w-full sm:w-auto"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded w-full sm:w-auto"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white/20" />

        <p className="text-sm pb-4 text-center text-white">
          © 2025 FARMAVEN - Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}
