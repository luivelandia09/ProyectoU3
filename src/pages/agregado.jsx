import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import publicidad from "../json/publicidad.json";
import Footer from "../components/Footer";

// Mapeo de recomendaciones usando IDs reales del catálogo
const recomendacionesPorObjetivo = {
  "Aumentar energía": [8, 9, 10],
  "Reforzar defensas": [9, 8, 7],
  "Manejar estrés y dolores": [1, 2, 11],
  "Mantener higiene": [7, 6, 9],
  "Hidratación rápida": [8, 9, 10],
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
    descripcion:
      "Antibiótico de amplio espectro para infecciones bacterianas.",
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
    descripcion: "Jarabe expectorante y antitusivo.",
    precio: 28.0,
  },
  7: {
    nombre: "Loratadina",
    descripcion: "Antihistamínico para alergias.",
    precio: 15.5,
  },
  8: {
    nombre: "Multivitamínico",
    descripcion: "Vitaminas y minerales esenciales.",
    precio: 35.0,
  },
  9: {
    nombre: "Vitamina C",
    descripcion: "Refuerza el sistema inmunológico.",
    precio: 25.0,
  },
  10: {
    nombre: "Vitamina D",
    descripcion: "Salud ósea e inmunológica.",
    precio: 28.5,
  },
  11: {
    nombre: "Aspirina",
    descripcion: "Analgésico y antiinflamatorio.",
    precio: 14.5,
  },
  12: {
    nombre: "Omeprazol",
    descripcion: "Reduce el ácido estomacal.",
    precio: 24.0,
  },
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
    resultadoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const irACatalogo = () => navigate("/catalogo");

  const productosRecomendados =
    recomendacionesPorObjetivo[objetivo] || [];

  const productosValidos = productosRecomendados.filter(
    (id) => catalogoProductos[id]
  );

  return (
    <section className="min-h-screen p-6 bg-blue-50 text-blue-900">
      <div className="max-w-3xl mx-auto">

        {/* FORMULARIO */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div>
            <label className="block font-semibold text-sm mb-2">
              1. ¿Cuál es tu objetivo principal de bienestar?
            </label>
            <select
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              className="w-full rounded-lg border px-4 py-2"
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
              className="w-full rounded-lg border px-4 py-2"
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
              className="w-full rounded-lg border px-4 py-2"
            >
              <option>Inmediato</option>
              <option>Rápido</option>
              <option>Progresivo</option>
              <option>No importa</option>
            </select>
          </div>

          <button
            onClick={generarRecomendacion}
            className="w-full py-3 rounded-lg text-white bg-blue-600 font-bold"
          >
            Ver productos recomendados
          </button>
        </div>

        {/* RESULTADOS */}
        {mostrarResultados && (
          <div ref={resultadoRef} className="mt-8 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-center text-blue-700 mb-4">
              🌟 Productos recomendados
            </h3>

            {productosValidos.map((id) => {
              const p = catalogoProductos[id];
              return (
                <div key={id} className="border p-4 rounded mb-4">
                  <h4 className="font-semibold">{p.nombre}</h4>
                  <p className="text-sm">{p.descripcion}</p>
                  <p className="font-bold text-blue-700">S/ {p.precio}</p>
                  <button
                    onClick={irACatalogo}
                    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Comprar
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* PUBLICIDAD */}
        {Array.isArray(publicidad) &&
          publicidad.filter(p => p.activo).map(p => (
            <div key={p.id} className="mt-16 flex justify-center">
              <img src={p.imagen} alt={p.alt} className="rounded-xl shadow-xl" />
            </div>
          ))}

        {/* FOOTER GLOBAL */}
        <Footer />
      </div>
    </section>
  );
}