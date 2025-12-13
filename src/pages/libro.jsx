import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

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
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % asistentes.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + asistentes.length) % asistentes.length);

  return (
    <div className="bg-gray-50 min-h-screen font-[Montserrat] text-gray-800">
      {/* ENCABEZADO */}
      <header className="bg-blue-700 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-3">
          <h1
            className="text-5xl text-center mb-3 tracking-wide drop-shadow-sm"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
            }}
          >
            Libro de Reclamaciones
          </h1>
          <p className="text-sm md:text-base italic">
            Tu opinión es importante para nosotros 💬
          </p>
        </div>
      </header>

      {/* CONTENIDO */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Atención y Soporte al Cliente
        </h2>

        <p
          className="text-24px text-gray-600 text-center mb-12 max-w-2xl mx-auto font-light italic"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          En <span className="font-bold text-blue-700">FARMAVEN</span> valoramos
          la transparencia y la confianza.
        </p>

        {/* CARRUSEL */}
        <div className="w-full flex flex-col items-center mb-16">
          <div
            className={`bg-white shadow-xl p-10 rounded-2xl border-t-4 ${asistentes[index].color} max-w-xl w-full`}
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

          <div className="flex gap-6 mt-6">
            <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded-full text-xl">
              ⬅
            </button>
            <button onClick={next} className="px-4 py-2 bg-gray-200 rounded-full text-xl">
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
            <li>Comunícate con cualquiera de nuestras asistentes.</li>
            <li>Indica tus datos, pedido y motivo del reclamo.</li>
            <li>Registramos tu solicitud en el Libro Digital.</li>
            <li>Recibirás una confirmación.</li>
            <li>Respuesta en máximo 5 días hábiles.</li>
          </ol>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">También puedes escribirnos a:</p>
          <p className="text-lg font-semibold text-blue-700">
            📧 reclamos@farmaven.com
          </p>
        </div>
      </section>

      {/* === FOOTER (IGUAL AL DE INICIO) === */}
      <footer className="text-white pt-10 bg-blue-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-around gap-10 text-center">
          <div className="flex flex-col md:flex-row gap-10 w-full md:w-1/2">
            <div>
              <img
                src={new URL("../img/logo.png", import.meta.url).href}
                alt="Logo FARMAVEN"
                className="w-60 mx-auto md:mx-0"
              />
              <p className="text-sm mt-4 max-w-xs mx-auto md:mx-0 md:text-left">
                FARMAVEN nació con la misión de ofrecer medicamentos y productos
                de salud accesibles para todos.
              </p>
            </div>

            <div className="md:text-left">
              <h5 className="font-bold mb-2">FARMAVEN</h5>
              <ul className="text-sm space-y-1">
                <li>
                  <Link to="/catalogo" className="hover:underline text-blue-200">
                    Catálogo del mes
                  </Link>
                </li>
                <li>
                  <Link to="/testimonios" className="hover:underline text-blue-200">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link to="/libroderecla" className="hover:underline text-blue-200">
                    Libro de reclamaciones
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 w-full md:w-1/2">
            <div className="md:text-left">
              <h5 className="font-bold mb-2">Contáctanos</h5>
              <p className="text-sm">📧 contacto@farmaven.com</p>
              <p className="text-sm">📞 +51 987 654 321</p>
              <p className="text-sm">Central: (01) 612-5000</p>
            </div>

            <div className="md:text-left">
              <h5 className="font-bold mb-2">Suscríbete</h5>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("¡Gracias por suscribirte!");
                  e.target.reset();
                }}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Tu correo"
                  className="border rounded px-2 py-1 text-black"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded"
                >
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
  );
}