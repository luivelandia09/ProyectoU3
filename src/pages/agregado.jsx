import React, { useRef, useState } from "react";
import publicidad from "../json/publicidad.json";

export default function Recomendador() {
  const [objetivo, setObjetivo] = useState("Aumentar energía");
  const [usuario, setUsuario] = useState("Estudiante");
  const [velocidad, setVelocidad] = useState("Inmediato");
  const resultadoRef = useRef(null);

  const generarRecomendacion = () => {
    if (resultadoRef.current) {
      resultadoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const ProductosPorObjetivo = ({ objetivo }) => {
    switch (objetivo) {
      case "Aumentar energía":
        return (
          <>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">Vital+ Multivitamínico</h4>
              <p className="text-sm">Energía diaria para estudiar o trabajar con ritmo.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">FocusUp B-Complex</h4>
              <p className="text-sm">Mejora concentración y reduce cansancio mental.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">NeutroLife Suero Hidratante</h4>
              <p className="text-sm">Hidratación rápida para mantenerte activo.</p>
            </div>
          </>
        );

      case "Reforzar defensas":
        return (
          <>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">Vitamina C C-Protect</h4>
              <p className="text-sm">Refuerza el sistema inmune.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">Zinc ImmuneShield</h4>
              <p className="text-sm">Apoyo inmunológico constante.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">Defensa Natural (infusión)</h4>
              <p className="text-sm">Refuerzo suave y natural.</p>
            </div>
          </>
        );

      case "Manejar estrés y dolores":
        return (
          <>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">SoftDol 400mg</h4>
              <p className="text-sm">Alivio suave para dolores comunes.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">MagRelax</h4>
              <p className="text-sm">Magnesio para relajar cuerpo y mente.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">CalmHerbal</h4>
              <p className="text-sm">Infusión relajante de uso diario.</p>
            </div>
          </>
        );

      case "Mantener higiene":
        return (
          <>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">Dermoclean Gel 99.9%</h4>
              <p className="text-sm">Protección inmediata y portátil.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">FreshClean Spray</h4>
              <p className="text-sm">Alcohol en spray para uso rápido.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">CareWipes Toallitas</h4>
              <p className="text-sm">Perfectas para rutinas diarias.</p>
            </div>
          </>
        );

      case "Hidratación rápida":
        return (
          <>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">NeutroLife Strong</h4>
              <p className="text-sm">Rehidratación rápida post ejercicio.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">ReHydraSport</h4>
              <p className="text-sm">Bebida isotónica para atletas.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold">ElectroMix</h4>
              <p className="text-sm">Sales rehidratantes de acción inmediata.</p>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen p-6 bg-blue-50 text-blue-900">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-6">
          <h2 className="text-2xl font-extrabold">✨ Recomendado para ti – FarmaVen ✨</h2>
          <p className="mt-2 text-sm opacity-80">Respuestas rápidas, seguras y en tonos azules.</p>
        </header>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div>
            <label className="block font-semibold text-sm mb-2">1. ¿Cuál es tu objetivo principal de bienestar?</label>
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
            <label className="block font-semibold text-sm mb-2">2. ¿Quién usará los productos?</label>
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
            <label className="block font-semibold text-sm mb-2">3. ¿Qué tan rápido necesitas resultados?</label>
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

            <div className="space-y-3">
              <ProductosPorObjetivo objetivo={objetivo} />
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
          FarmaVen • Recomendaciones orientativas — consulta a un profesional de la salud cuando corresponda.
        </footer>
      </div>
    </section>
  );
}