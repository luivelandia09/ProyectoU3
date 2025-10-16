import { useState } from "react";
import catalogoData from '../json/catalogo.json';

[
  {
    id: 2,
    nombre: "Ibuprofeno 400mg",
    precio: 10.0,
    desc: "Antiinflamatorio y analgésico.",
    img: "https://via.placeholder.com/200x200?text=Ibuprofeno",
    categoria: "Antiinflamatorios",
  },
  {
    id: 3,
    nombre: "Vitamina C 1g",
    precio: 2.9,
    desc: "Refuerza el sistema inmunológico.",
    img: "https://via.placeholder.com/200x200?text=Vitamina+C",
    categoria: "Vitaminas",
  },
  {
    id: 4,
    nombre: "Jarabe para la tos",
    precio: 6.8,
    desc: "Alivia la congestión y suaviza la garganta.",
    img: "https://via.placeholder.com/200x200?text=Jarabe",
    categoria: "Jarabes",
  },
  {
    id: 5,
    nombre: "Aspirina 100mg",
    precio: 3.0,
    desc: "Previene coágulos sanguíneos.",
    img: "https://via.placeholder.com/200x200?text=Aspirina",
    categoria: "Analgésicos",
  },
  {
    id: 6,
    nombre: "Omeprazol 20mg",
    precio: 5.5,
    desc: "Reduce la producción de ácido estomacal.",
    img: "https://via.placeholder.com/200x200?text=Omeprazol",
    categoria: "Gastrointestinales",
  },
  {
    id: 7,
    nombre: "Vitamina D3 2000UI",
    precio: 4.8,
    desc: "Fortalece huesos y sistema inmune.",
    img: "https://via.placeholder.com/200x200?text=Vitamina+D",
    categoria: "Vitaminas",
  },
  {
    id: 8,
    nombre: "Loratadina 10mg",
    precio: 3.2,
    desc: "Antihistamínico para alergias.",
    img: "https://via.placeholder.com/200x200?text=Loratadina",
    categoria: "Antihistamínicos",
  },
  {
    id: 9,
    nombre: "Amoxicilina 500mg",
    precio: S / 22.0,
    desc: "Antibiótico eficaz contra diversas infecciones bacterianas.",
    img: "https://via.placeholder.com/200x200?text=Amoxicilina",
    categoria: "Antibióticos",
  },
  {
    id: 10,
    nombre: "Azitromicina 200mg",
    precio: S / 32.0,
    desc: "Tratamiento para infecciones respiratorias y más.",
    img: "https://via.placeholder.com/200x200?text=Azitromicina",
    categoria: "Antibióticos",
  },
  {
    id: 11,
    nombre: "Dicoflenaco 100mg",
    precio: S / 15.0,
    desc: "Reduce inflamación y alivia dolores musculares.",
    img: "https://via.placeholder.com/200x200?text=Dicoflenaco",
    categoria: "Antiinflamatorio",
  },
  {
    id: 12,
    nombre: "Multivitminico 100mg",
    precio: S / 15.0,
    desc: "Más energía y bienestar para tu día a día.",
    img: "https://via.placeholder.com/200x200?text=Multivitaminico",
    categoria: "Vitaminas",
  },
];

export default function Catalogo() {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Obtener categorías únicas
  const categorias = [
    "Todas",
    ...new Set(productosData.map((p) => p.categoria)),
  ];

  // Filtrar productos
  const productosFiltrados = productosData.filter((p) => {
    const matchBusqueda =
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.desc.toLowerCase().includes(busqueda.toLowerCase());
    const matchCategoria =
      categoriaSeleccionada === "Todas" ||
      p.categoria === categoriaSeleccionada;
    return matchBusqueda && matchCategoria;
  });

  // Agregar al carrito
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

  // Eliminar del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  // Cambiar cantidad
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

  // Calcular total
  const total = carrito.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );
  const cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header con carrito */}
      <div className="bg-blue-700 text-white p-4 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🩺 Catálogo Farmaven</h1>
          <button
            onClick={() => setMostrarCarrito(!mostrarCarrito)}
            className="relative bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
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

      {/* Filtros y búsqueda */}
      <div className="container mx-auto p-6">
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Búsqueda */}
            <input
              type="text"
              placeholder="🔍 Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Filtro por categoría */}
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

        {/* Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productosFiltrados.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.nombre}
                  className="w-full h-48 object-cover"
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
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Stock: {p.stock}
                  </span>
                </div>
                <button
                  onClick={() => agregarAlCarrito(p)}
                  className="w-full mt-3 bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition active:scale-95"
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

      {/* Modal del carrito */}
      {mostrarCarrito && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-end p-4">
          <div className="bg-white w-full max-w-md h-full rounded-lg shadow-2xl overflow-hidden flex flex-col">
            {/* Header del carrito */}
            <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">🛒 Tu Carrito</h2>
              <button
                onClick={() => setMostrarCarrito(false)}
                className="text-2xl hover:bg-blue-800 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Contenido del carrito */}
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
                        className="w-20 h-20 object-cover rounded"
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
                            className="bg-gray-300 w-6 h-6 rounded hover:bg-gray-400"
                          >
                            -
                          </button>
                          <span className="font-semibold">{item.cantidad}</span>
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

            {/* Footer con total */}
            {carrito.length > 0 && (
              <div className="border-t p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-blue-700">
                    S/ {total.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-green-800 transition">
                  Proceder al pago
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
