import { useState } from "react";
import { Link } from "react-router-dom";  // ← AGREGADO, NADA MÁS
import catalogoDataRaw from "../json/catalogo.json";
import "../index.css";

// Placeholder público para imágenes faltantes
const PLACEHOLDER = "https://via.placeholder.com/300x300?text=Sin+imagen";

// Procesar imágenes
const catalogoData = catalogoDataRaw.map((producto) => ({
  ...producto,
  img: new URL(`../img/${producto.img}`, import.meta.url).href,
}));

export default function Catalogo() {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const categorias = ["Todas", ...new Set(catalogoData.map((p) => p.categoria))];

  const productosFiltrados = catalogoData.filter((p) => {
    const matchBusqueda =
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const matchCategoria =
      categoriaSeleccionada === "Todas" ||
      p.categoria === categoriaSeleccionada;
    return matchBusqueda && matchCategoria;
  });

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
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id);
    } else {
      setCarrito(
        carrito.map((item) =>
          item.id === id ? { ...item, cantidad: nuevaCantidad } : item
        )
      );
    }
  };

  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );
  const cantidadTotal = carrito.reduce(
    (sum, item) => sum + item.cantidad,
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-primary text-black p-4 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🩺 Catálogo Farmaven</h1>
          <button
            onClick={() => setMostrarCarrito(!mostrarCarrito)}
            className="relative bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            🛒 Carrito:
            {cantidadTotal > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {cantidadTotal}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="🔍 Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {productosFiltrados.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-102 overflow-hidden"
            >
              <div className="relative bg-gray-50 flex items-center justify-center h-32">
                <img
                  src={p.img}
                  alt={p.nombre}
                  onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
                  className="max-h-24 max-w-[80%] object-contain p-2"
                />
                <span className="absolute top-2 right-2 bg-blue-700 text-white text-xs px-2 py-1 rounded-full">
                  {p.categoria}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {p.nombre}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{p.descripcion}</p>

                <div className="space-y-2 mb-3">
                  <p className="text-sm text-gray-600">
                    <strong>Dosificación:</strong> {p.dosificacion}
                  </p>
                  <p className="text-sm text-red-600">
                    <strong>Advertencias:</strong> {p.advertencias}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-700">
                    S/ {p.precio.toFixed(2)}
                  </span>
                  <span className="text-sm bg-primary text-black-800 px-2 py-1 rounded">
                    Stock: {p.stock}
                  </span>
                </div>

                <button
                  onClick={() => agregarAlCarrito(p)}
                  className="w-full mt-3 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition active:scale-95"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {productosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">No se encontraron productos</p>
          </div>
        )}
      </div>

      {mostrarCarrito && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-end p-4">
          <div className="bg-white w-full max-w-md h-full rounded-lg shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-primary-700 text-white p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">🛒 Tu Carrito</h2>
              <button
                onClick={() => setMostrarCarrito(false)}
                className="text-2xl hover:bg-blue-800 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {carrito.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {carrito.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 bg-gray-50 p-3 rounded-lg"
                    >
                      <img
                        src={item.img}
                        alt={item.nombre}
                        onError={(e) => (e.currentTarget.src = PLACEHOLDER)}
                        className="w-12 h-12 object-contain rounded bg-white p-1"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{item.nombre}</h3>
                        <p className="text-blue-700 font-bold">
                          S/ {item.precio.toFixed(2)}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              cambiarCantidad(item.id, item.cantidad - 1)
                            }
                            className="bg-gray-500 w-6 h-6 rounded hover:bg-gray-800"
                          >
                            -
                          </button>
                          <span className="font-semibold">
                            {item.cantidad}
                          </span>
                          <button
                            onClick={() =>
                              cambiarCantidad(item.id, item.cantidad + 1)
                            }
                            className="bg-gray-300 w-6 h-6 rounded hover:bg-gray-400"
                          >
                            +
                          </button>

                          <button
                            onClick={() => eliminarDelCarrito(item.id)}
                            className="ml-auto text-red-500 hover:text-red-700"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    </div>  
                  ))}
                </div>
              )}
            </div>

            {carrito.length > 0 && (
              <div className="border-t p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-blue-700">
                    S/ {total.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-primary-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition">
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
                de salud accesibles para todos, con un servicio humano y cercano.
              </p>
            </div>

            <div className="w-auto md:text-left">
              <h5 className="font-bold mb-2 text-white">FARMAVEN</h5>
              <ul className="text-sm space-y-1">
                <li>
                  <Link to="/catalogo" className="hover:underline text-blue-200">
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
              <h5 className="font-bold mb-2 text-white">Contáctanos</h5>
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
              <h5 className="font-bold mb-2 text-white">Suscríbete</h5>
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
          ©️ 2025 FARMAVEN - Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}