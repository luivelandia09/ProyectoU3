import React, { useState } from "react";
import "../App.css";

export default function Libro() {
  const asistentes = [
    {
      nombre: "Rocío Valverde",
      telefono: "(01) 612-5001",
      celular: "+51 987 321 654",
      horario: "Lunes a Viernes 8:00 a.m. – 6:00 p.m.",
      color: "border-blue-600 text-blue-700",
    },
    {
      nombre: "Mariana Torres",
      telefono: "(01) 612-5002",
      celular: "+51 985 432 198",
      horario: "Lunes a Sábado 9:00 a.m. – 5:00 p.m.",
      color: "border-green-600 text-green-700",
    },
    {
      nombre: "Diego López",
      telefono: "(01) 612-5003",
      celular: "+51 999 876 543",
      horario: "Lunes a Viernes 7:30 a.m. – 4:30 p.m.",
      color: "border-purple-600 text-purple-700",
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % asistentes.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + asistentes.length) % asistentes.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-[Montserrat] text-gray-800">
      {/* ENCABEZADO */}
      <header className="bg-blue-700 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-3">
          <h1 className="text-2xl font-bold uppercase tracking-wide">
            Libro de Reclamaciones
          </h1>
          <p className="text-sm md:text-base italic">
            Tu opinión es importante para nosotros 💬
          </p>
        </div>
      </header>

      {/* SECCIÓN DE INFORMACIÓN */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Atención y Soporte al Cliente
        </h2>

        <p className="text-lg text-gray-700 text-center mb-10">
          En <span className="font-bold text-blue-700">FARMAVEN</span> valoramos
          la transparencia y la confianza. Si tienes una queja, reclamo o
          sugerencia, te ofrecemos distintos medios para comunicarte con
          nosotros de forma rápida y segura.
        </p>

        {/* ✅ CARRUSEL */}
        <div className="w-full flex flex-col items-center mb-16">
          <div
            className={`bg-white shadow-xl p-10 rounded-2xl border-t-4 ${
              asistentes[index].color
            } max-w-xl w-full transition-all duration-500`}
          >
            <h3
              className={`font-bold text-2xl mb-4 flex justify-center gap-2 ${
                asistentes[index].color.split(" ")[1]
              }`}
            >
              📞 {asistentes[index].nombre}
            </h3>

            <p className="text-center">Central: {asistentes[index].telefono}</p>
            <p className="text-center">Celular: {asistentes[index].celular}</p>

            <p className="text-center text-sm text-gray-500 mt-3">
              {asistentes[index].horario}
            </p>
          </div>

          {/* BOTONES */}
          <div className="flex gap-6 mt-6">
            <button
              onClick={prev}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-xl"
            >
              ⬅
            </button>

            <button
              onClick={next}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-xl"
            >
              ➡
            </button>
          </div>
        </div>

        {/* PASOS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-blue-700">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">
            📝 Pasos para registrar tu reclamo
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              Comunícate con cualquiera de nuestras asistentes por llamada o
              WhatsApp.
            </li>
            <li>
              Indica tus datos personales, número de pedido y motivo del reclamo.
            </li>
            <li>
              Registraremos tu solicitud en el{" "}
              <span className="font-semibold">Libro de Reclamaciones Digital</span>.
            </li>
            <li>
              Recibirás una confirmación con tu número de atención.
            </li>
            <li>
              Respuesta en máximo{" "}
              <span className="font-semibold text-blue-700">5 días hábiles</span>.
            </li>
          </ol>
        </div>

        {/* INFO EXTRA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto mb-4">
            También puedes visitar nuestras oficinas centrales o escribirnos a:
          </p>
          <p className="text-lg font-semibold text-blue-700">
            📧 reclamos@farmaven.com
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Dirección: Av. Los Olivos 125 – Lima, Perú
          </p>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-10">
        <p>
          © 2025 <span className="font-bold">FARMAVEN</span> — Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
}
