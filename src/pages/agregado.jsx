import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import publicidad from "../json/publicidad.json";
import catalogoDataRaw from "../json/catalogo.json";

// Crear un mapa de productos por ID para búsquedas rápidas
// Asegurarse de que catalogoDataRaw sea un array antes de procesarlo
const catalogoProductos = (() => {
  try {
    const data = Array.isArray(catalogoDataRaw) ? catalogoDataRaw : [];
    return Object.fromEntries(data.map((p) => [p.id, p]));
  } catch (error) {
    console.error("Error al procesar catálogo:", error);
    return {};
  }
})();

// Sistema inteligente de recomendaciones basado en múltiples criterios
const obtenerRecomendaciones = (objetivo, usuario, velocidad) => {
  // Recomendaciones base según objetivo
  const baseObjetivo = {
    "Aumentar energía": [8, 9, 10],
    "Reforzar defensas": [9, 8, 4],
    "Manejar estrés y dolores": [1, 2, 11],
    "Mantener higiene": [7, 6, 9],
    "Hidratación rápida": [8, 9, 10],
  };

  // Productos adicionales según tipo de usuario
  const porUsuario = {
    Estudiante: {
      "Aumentar energía": [8, 9, 10],
      "Reforzar defensas": [9, 8, 7],
      "Manejar estrés y dolores": [1, 11, 8],
      "Mantener higiene": [7, 9, 8],
      "Hidratación rápida": [9, 10, 8],
    },
    "Adulto que trabaja": {
      "Aumentar energía": [8, 9, 12],
      "Reforzar defensas": [9, 8, 10],
      "Manejar estrés y dolores": [2, 3, 12],
      "Mantener higiene": [7, 9, 10],
      "Hidratación rápida": [9, 8, 12],
    },
    "Adulto mayor": {
      "Aumentar energía": [8, 10, 9],
      "Reforzar defensas": [9, 10, 8],
      "Manejar estrés y dolores": [1, 11, 12],
      "Mantener higiene": [9, 10, 7],
      "Hidratación rápida": [9, 10, 8],
    },
    Deportista: {
      "Aumentar energía": [8, 9, 10],
      "Reforzar defensas": [9, 8, 10],
      "Manejar estrés y dolores": [2, 3, 8],
      "Mantener higiene": [8, 9, 10],
      "Hidratación rápida": [9, 10, 8],
    },
    "Niño/a": {
      "Aumentar energía": [9, 10, 8],
      "Reforzar defensas": [9, 10, 7],
      "Manejar estrés y dolores": [1, 6, 9],
      "Mantener higiene": [7, 9, 6],
      "Hidratación rápida": [9, 10, 6],
    },
  };

  // Ajustes según velocidad de resultados
  const porVelocidad = {
    Inmediato: {
      "Aumentar energía": [9, 8],
      "Reforzar defensas": [9, 4],
      "Manejar estrés y dolores": [2, 1],
      "Mantener higiene": [7],
      "Hidratación rápida": [9],
    },
    Rápido: {
      "Aumentar energía": [8, 9],
      "Reforzar defensas": [9, 5],
      "Manejar estrés y dolores": [2, 3],
      "Mantener higiene": [7, 6],
      "Hidratación rápida": [9, 8],
    },
    Progresivo: {
      "Aumentar energía": [8, 10],
      "Reforzar defensas": [8, 10],
      "Manejar estrés y dolores": [11, 12],
      "Mantener higiene": [8, 9],
      "Hidratación rápida": [8, 10],
    },
    "No importa": {
      "Aumentar energía": [8, 9, 10],
      "Reforzar defensas": [8, 9, 10],
      "Manejar estrés y dolores": [1, 2, 11],
      "Mantener higiene": [7, 8, 9],
      "Hidratación rápida": [8, 9, 10],
    },
  };

  // Combinar todas las recomendaciones
  const baseIds = baseObjetivo[objetivo] || [8, 9, 10];
  const usuarioIds = porUsuario[usuario]?.[objetivo] || baseIds;
  const velocidadIds = porVelocidad[velocidad]?.[objetivo] || [];

  // Crear un conjunto único de IDs priorizando las recomendaciones más específicas
  const todosIds = [...velocidadIds, ...usuarioIds, ...baseIds];
  const idsUnicos = [...new Set(todosIds)];

  // Retornar los primeros 3-4 productos únicos
  return idsUnicos.slice(0, 4);
};

export default function Recomendador() {
  const [objetivo, setObjetivo] = useState("Aumentar energía");
  const [usuario, setUsuario] = useState("Estudiante");
  const [velocidad, setVelocidad] = useState("Inmediato");
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const resultadoRef = useRef(null);
  const navigate = useNavigate();

  const generarRecomendacion = () => {
    setMostrarResultados(true);
    setTimeout(() => {
      if (resultadoRef.current) {
        resultadoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const irACatalogo = () => {
    navigate("/catalogo");
  };

  const productosRecomendados = obtenerRecomendaciones(
    objetivo,
    usuario,
    velocidad
  );

  // Filtrar solo los productos que existen en el catálogo
  const productosValidos = productosRecomendados.filter(
    (id) => catalogoProductos[id]
  );

  return (
    <section className="min-h-screen p-6 bg-blue-50 text-blue-900">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-6">
          <h1
            className="text-5xl text-center mb-3 tracking-wide drop-shadow-sm"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              color: "#003b73",
            }}
          >
            ✨ Recomendado para ti ✨
          </h1>
          <p
            className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto font-light italic"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Respuestas que suman valor, te ahorran tiempo y te acompañan en cada
            paso.
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div>
            <label className="block font-semibold text-sm mb-2">
              1. ¿Cuál es tu objetivo principal de bienestar?
            </label>
            <select
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              className="w-full rounded-lg border border-blue-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option>Aumentar energía</option>
              <option>Reforzar defensas</option>
              <option>Manejar estrés y dolores</option>
              <option>Mantener higiene</option>
              <option>Hidratación rápida</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-sm mb-2">
              2. ¿Quién usará los productos?
            </label>
            <select
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full rounded-lg border border-blue-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option>Estudiante</option>
              <option>Adulto que trabaja</option>
              <option>Adulto mayor</option>
              <option>Deportista</option>
              <option>Niño/a</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-sm mb-2">
              3. ¿Qué tan rápido necesitas resultados?
            </label>
            <select
              value={velocidad}
              onChange={(e) => setVelocidad(e.target.value)}
              className="w-full rounded-lg border border-blue-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option>Inmediato</option>
              <option>Rápido</option>
              <option>Progresivo</option>
              <option>No importa</option>
            </select>
          </div>

          <button
            onClick={generarRecomendacion}
            className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg hover:from-blue-700 hover:to-blue-600 transition"
          >
            Ver productos recomendados
          </button>
        </div>

        {mostrarResultados && (
          <div ref={resultadoRef} className="mt-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-extrabold text-center text-blue-700 mb-4">
                🌟 Productos recomendados para ti
              </h3>

              {productosValidos.length > 0 ? (
                <div className="space-y-4">
                  {productosValidos.map((productoId) => {
                    const producto = catalogoProductos[productoId];

                    return (
                      <div
                        key={productoId}
                        className="bg-blue-50 p-4 rounded-lg border border-blue-100"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-blue-900 text-lg">
                              {producto.name}
                            </h4>
                            <p className="text-sm text-blue-700 mt-1">
                              {producto.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-bold text-blue-600">
                            S/ 
                            {typeof producto.price === "number"
                              ? producto.price.toFixed(2)
                              : producto.price}
                          </p>
                          <button
                            onClick={irACatalogo}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-md hover:shadow-lg active:scale-95"
                          >
                            Comprar
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-blue-600 mb-4">
                    No se encontraron productos para esta combinación.
                  </p>
                  <button
                    onClick={irACatalogo}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
                  >
                    Ver catálogo completo
                  </button>
                </div>
              )}

              <div className="mt-6 border-t pt-4 bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-700 mb-2">
                  <span className="font-semibold">Perfil seleccionado:</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                  <div className="bg-white p-2 rounded">
                    <span className="text-blue-500">Objetivo:</span>{" "}
                    <span className="font-semibold text-blue-900">
                      {objetivo}
                    </span>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <span className="text-blue-500">Usuario:</span>{" "}
                    <span className="font-semibold text-blue-900">
                      {usuario}
                    </span>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <span className="text-blue-500">Velocidad:</span>{" "}
                    <span className="font-semibold text-blue-900">
                      {velocidad}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Publicidad */}
        {Array.isArray(publicidad) &&
          publicidad
            .filter((item) => item.activo)
            .map((item) => (
              <div key={item.id} className="mt-16 flex justify-center">
                <a
                  href={item.enlace || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.imagen}
                    alt={item.alt}
                    className="max-w-[90%] rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                  />
                </a>
              </div>
            ))}

        {/* Footer completo */}
        <footer className="text-white pt-10 bg-blue-700 mt-16 rounded-t-2xl">
          <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-around gap-10 text-center">
            <div className="flex flex-col md:flex-row gap-10 w-full md:w-1/2">
              <div>
                <img
                  src={new URL("../img/logo.png", import.meta.url).href}
                  alt="Logo FARMAVEN"
                  className="w-60 mx-auto md:mx-0"
                />
                <p className="text-sm mt-4 max-w-xs mx-auto md:text-left">
                  FARMAVEN nació con la misión de ofrecer medicamentos y
                  productos de salud accesibles para todos, con un servicio
                  humano y cercano.
                </p>
              </div>

              <div className="md:text-left">
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
                    <Link to="/libro" className="hover:underline text-blue-200">
                      Libro de reclamaciones
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full md:w-1/2">
              <div className="md:text-left">
                <h5 className="font-bold mb-2">Contáctanos</h5>
                <ul className="text-sm space-y-1">
                  <li>📧 contacto@farmaven.com</li>
                  <li>📞 +51 987 654 321</li>
                  <li>Central: (01) 612-5000</li>
                </ul>
              </div>

              <div className="md:text-left">
                <h5 className="font-bold mb-2">Suscríbete</h5>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("¡Gracias por suscribirte!");
                    e.target.reset();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Tu correo"
                    className="border rounded px-2 py-1 bg-gray-800 text-white"
                  />
                  <button className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>

          <hr className="my-6 border-white/20" />
          <p className="text-sm pb-4 text-center">
            ©️ 2025 FARMAVEN - Todos los derechos reservados
          </p>
        </footer>
      </div>
    </section>
  );
}
