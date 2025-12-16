import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import libro from "../json/libro.json";
import Footer from "../components/Footer"; // ✅ FOOTER GLOBAL

export default function Libro() {
  const asistentes = [
    {
      nombre: "Rocío Valverde",
      telefono: "(01) 612-5001",
      celular: "+51 987 321 654",
      horario: "Lunes a Viernes 8:00 a.m. – 6:00 p.m.",
      color: "border-blue-700 text-blue-700",
    },
    {
      nombre: "María Fernández",
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
      color: "border-purple-600 text-purple-600",
    },
  ];

  const [index, setIndex] = useState(0);
  const currentAsistente = asistentes[index];

  const next = () => setIndex((prev) => (prev + 1) % asistentes.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + asistentes.length) % asistentes.length);

  const goToIndex = (i) => setIndex(i);

  return (
    <div className="min-h-screen p-6 bg-blue-50 text-blue-900">
      {/* ENCABEZADO */}
      <header className="bg-blue-800 text-white py-8 shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">
            Libro de Reclamaciones
          </h1>
          <p className="text-sm md:text-lg italic mt-2 md:mt-0">
            Tu opinión es importante para nosotros 💬
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          {libro[0].activo && (
            <img
              src={libro[0].imagen}
              alt={libro[0].alt || "Farmaven Customer Support"}
              className="w-full max-w-lg rounded-xl"
            />
          )}

          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
              Atención y Soporte al Cliente
            </h2>
            <p className="text-lg text-gray-700">
              En <strong>FARMAVEN</strong> valoramos la transparencia y la
              confianza. Si tienes una queja, reclamo o sugerencia, estamos para
              ayudarte.
            </p>
          </div>
        </div>

        {/* CARRUSEL */}
        <div className="flex flex-col items-center py-12">
          <div
            className={`bg-white shadow-2xl p-10 rounded-xl border-b-4 ${currentAsistente.color} max-w-lg w-full`}
          >
            <h3 className="text-3xl font-extrabold text-center mb-4">
              {currentAsistente.nombre}
            </h3>

            <p className="text-center">
              Central: <strong>{currentAsistente.telefono}</strong>
            </p>
            <p className="text-center">
              Celular: <strong>{currentAsistente.celular}</strong>
            </p>

            <p className="text-center mt-4 font-semibold">
              {currentAsistente.horario}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <button onClick={prev}>◀</button>
            {asistentes.map((_, i) => (
              <span
                key={i}
                onClick={() => goToIndex(i)}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  i === index ? "bg-blue-700" : "bg-gray-300"
                }`}
              />
            ))}
            <button onClick={next}>▶</button>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg">También puedes escribirnos a:</p>
          <a
            href="mailto:reclamos@farmaven.com"
            className="text-2xl font-bold text-blue-700"
          >
            reclamos@farmaven.com
          </a>
        </div>
      </section>

      {/* ✅ FOOTER GLOBAL (ÚNICO CAMBIO REAL) */}
      <Footer />
    </div>
  );
}