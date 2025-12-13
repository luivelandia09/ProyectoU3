import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import publicidad from "../json/publicidad.json";

// Mapeo de recomendaciones usando IDs reales del catálogo
const recomendacionesPorObjetivo = {
  "Aumentar energía": [8, 9, 10], // Multivitamínico, Vitamina C, Vitamina D
  "Reforzar defensas": [9, 8, 7], // Vitamina C, Multivitamínico, Loratadina
  "Manejar estrés y dolores": [1, 2, 11], // Paracetamol, Ibuprofeno, Aspirina
  "Mantener higiene": [7, 6, 9], // Loratadina, Jarabe para la Tos, Vitamina C
  "Hidratación rápida": [8, 9, 10], // Multivitamínico, Vitamina C, Vitamina D
};

// Datos de productos del catálogo
const catalogoProductos = {
  1: {
    nombre: "Paracetamol",
    descripcion:
      "Analgésico y antipirético eficaz para dolores leves a moderados y fiebre.",
    precio: 12.0,
  },
  2: {
    nombre: "Ibuprofeno",
    descripcion:
      "Antiinflamatorio no esteroideo (AINE) para dolor, inflamación y fiebre.",
    precio: 15.0,
  },
  3: {
    nombre: "Diclofenaco",
    descripcion:
      "Potente antiinflamatorio para dolores musculares y articulares.",
    precio: 18.0,
  },
  4: {
    nombre: "Azitromicina",
    descripcion: "Antibiótico de amplio espectro para infecciones bacterianas.",
    precio: 25.0,
  },
  5: {
    nombre: "Amoxicilina",
    descripcion:
      "Antibiótico penicilínico para diversas infecciones bacterianas.",
    precio: 22.0,
  },
  6: {
    nombre: "Jarabe para la Tos",
    descripcion:
      "Jarabe expectorante y antitusivo para aliviar la tos seca y productiva.",
    precio: 28.0,
  },
  7: {
    nombre: "Loratadina",
    descripcion:
      "Antihistamínico para aliviar síntomas de alergias como congestión nasal y estornudos.",
    precio: 15.5,
  },
  8: {
    nombre: "Multivitamínico",
    descripcion:
      "Suplemento completo con vitaminas y minerales esenciales para el bienestar general.",
    precio: 35.0,
  },
  9: {
    nombre: "Vitamina C",
    descripcion:
      "Suplemento de vitamina C para fortalecer el sistema inmunológico.",
    precio: 25.0,
  },
  10: {
    nombre: "Vitamina D",
    descripcion:
      "Suplemento de vitamina D para la salud ósea y el sistema inmunológico.",
    precio: 28.5,
  },
  11: {
    nombre: "Aspirina",
    descripcion:
      "Analgésico, antipirético y antiinflamatorio. También usado como antiagregante plaquetario.",
    precio: 14.5,
  },
  12: {
    nombre: "Omeprazol",
    descripcion:
      "Inhibidor de la bomba de protones para reducir la producción de ácido estomacal.",
    precio: 24.0,
  },
};

export default function Recomendador() {
  const [objetivo, setObjetivo] = useState("Aumentar energía");
  const [usuario, setUsuario] = useState("Estudiante");
  const [velocidad, setVelocidad] = useState("Inmediato");
  const resultadoRef = useRef(null);
  const navigate = useNavigate();

  const generarRecomendacion = () => {
    if (resultadoRef.current) {
      resultadoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const irACatalogo = () => {
    navigate("/catalogo");
  };

  const productosRecomendados = recomendacionesPorObjetivo[objetivo] || [];

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
            Respuestas que suman valor, te ahorran tiempo y te acompaña en cada
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

        <div ref={resultadoRef} className="mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-extrabold text-center text-blue-700 mb-4">
              🌟 Productos recomendados para ti
            </h3>

            <div className="space-y-4">
              {productosRecomendados.map((productoId) => {
                const producto = catalogoProductos[productoId];
                if (!producto) return null;

                return (
                  <div
                    key={productoId}
                    className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex justify-between items-center"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900">
                        {producto.nombre}
                      </h4>
                      <p className="text-sm text-blue-700">
                        {producto.descripcion}
                      </p>
                      <p className="text-sm font-bold text-blue-600 mt-1">
                        ${producto.precio.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={irACatalogo}
                      className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
                    >
                      Comprar
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-t pt-4 flex items-center justify-between">
              <p className="text-sm text-blue-600">
                Perfil: <span className="font-semibold">{usuario}</span>
              </p>
              <p className="text-sm text-blue-600">
                Velocidad: <span className="font-semibold">{velocidad}</span>
              </p>
            </div>
          </div>
        </div>

        {publicidad.activo && (
          <div className="mt-16 mb-10 px-4 flex justify-center">
            <a
              href={publicidad.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-3xl"
            >
              <img
                src={publicidad.imagen}
                alt={publicidad.alt}
                className="w-full rounded-2xl shadow-lg"
              />
            </a>
          </div>
        )}

        <footer className="mt-6 text-center text-xs text-blue-500">
          FarmaVen • Recomendaciones orientativas — consulta a un profesional de
          la salud cuando corresponda.
        </footer>
      </div>
    </section>
  );
}
