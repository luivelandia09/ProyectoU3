import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import libro from "../json/libro.json";


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

  // Variable para simplificar la referencia al asistente actual
  const currentAsistente = asistentes[index];

  const next = () => setIndex((prev) => (prev + 1) % asistentes.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + asistentes.length) % asistentes.length);

  // Helper para cambiar el índice al hacer click en los puntos de paginación
  const goToIndex = (i) => setIndex(i);

  return (
    // Fondo más suave y estético
    <div className="min-h-screen p-6 bg-blue-50 text-blue-900">

      {/* ENCABEZADO */}
      <header className="bg-blue-800 text-white py-8 shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md text-center">
            Libro de Reclamaciones
          </h1>
          <p className="text-sm md:text-lg italic mt-2 md:mt-0 opacity-90">
            Tu opinión es importante para nosotros 💬
          </p>
        </div>
      </header>

      {/* SECCIÓN PRINCIPAL DE INFORMACIÓN Y ATENCIÓN */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
          
          {/* IMAGEN DE ASISTENTE (Ajustada para ser más grande) */}
         {libro[0].activo && (
  <>
    {/* Imagen del asistente */}
    <img
      src={libro[0].imagen}
      alt={libro[0].alt || "Farmaven Customer Support"}
      className="w-full max-w-lg h-auto rounded-xl"
    />
  </>
)}

          {/* TEXTO INTRODUCTORIO CON MEJOR TIPOGRAFÍA */}
          <div className="lg:w-1/2 max-w-xl text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
              Atención y Soporte al Cliente
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-light">
              En <span className="font-bold text-blue-800">FARMAVEN</span>{" "}
              valoramos la transparencia y la confianza. Si tienes una queja,
              reclamo o sugerencia, te ofrecemos distintos medios para
              comunicarte con nosotros.
            </p>
          </div>
        </div>

        {/* CARRUSEL DE CONTACTOS CORREGIDO */}
        <div className="w-full flex flex-col items-center py-12">
          {/* Tarjeta de Contacto Estilizada - UTILIZA currentAsistente */}
          <div
            className={`bg-white shadow-2xl p-8 md:p-12 rounded-xl border-b-4 ${currentAsistente.color} max-w-lg w-full transform transition duration-300 hover:shadow-3xl`}
          >
            <h3
              className={`font-extrabold text-3xl mb-5 flex justify-center items-center gap-3 ${
                currentAsistente.color.split(" ")[1]
              }`}
            >
              {/* Icono de Teléfono */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {/* CORREGIDO: Muestra el nombre del asistente actual */}
              {currentAsistente.nombre}
            </h3>

            <div className="space-y-2 text-center text-lg">
              <p className="font-medium text-gray-700">
                Central: <span className="font-bold">{currentAsistente.telefono}</span>
              </p>
              <p className="font-medium text-gray-700">
                Celular: <span className="font-bold">{currentAsistente.celular}</span>
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100">
              <p className="text-center text-sm font-semibold text-gray-500">
                Horario de Atención
              </p>
              <p className="text-center text-md font-bold text-gray-600">
                {currentAsistente.horario}
              </p>
            </div>
          </div>

          {/* Controles de Carrusel Estilizados (Flechas y Puntos) */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 bg-white rounded-full text-blue-700 shadow-md hover:bg-blue-100 transition duration-150 transform hover:scale-105"
            >
              {/* Icono Flecha Izquierda */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* Puntos de Paginación */}
            {asistentes.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full cursor-pointer transition duration-300 ${
                  i === index ? "bg-blue-700" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToIndex(i)}
              ></span>
            ))}
            <button
              onClick={next}
              className="p-3 bg-white rounded-full text-blue-700 shadow-md hover:bg-blue-100 transition duration-150 transform hover:scale-105"
            >
              {/* Icono Flecha Derecha */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* PASOS PARA EL RECLAMO */}
        <div className="max-w-4xl mx-auto mt-12 mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border-l-8 border-blue-700">
            <h3 className="text-3xl font-extrabold mb-6 text-blue-800 flex items-center gap-3">
              {/* Icono de Checkmark/Lista */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Pasos para registrar tu reclamo
            </h3>
            {/* Lista sin puntos, usando numeración estilizada */}
            <ol className="list-none space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="font-extrabold text-blue-700 mr-3 text-xl">
                  1.
                </span>
                Comunícate con cualquiera de nuestras asistentes.
              </li>
              <li className="flex items-start">
                <span className="font-extrabold text-blue-700 mr-3 text-xl">
                  2.
                </span>
                Indica tus datos, pedido y motivo del reclamo.
              </li>
              <li className="flex items-start">
                <span className="font-extrabold text-blue-700 mr-3 text-xl">
                  3.
                </span>
                Registramos tu solicitud en el Libro Digital.
              </li>
              <li className="flex items-start">
                <span className="font-extrabold text-blue-700 mr-3 text-xl">
                  4.
                </span>
                Recibirás una confirmación.
              </li>
              <li className="flex items-start">
                <span className="font-extrabold text-blue-700 mr-3 text-xl">
                  5.
                </span>
                Respuesta en máximo{" "}
                <span className="font-extrabold ml-1">5 días hábiles.</span>
              </li>
            </ol>
          </div>
        </div>

        {/* CONTACTO POR EMAIL (Estilo de CTA) */}
        <div className="mt-16 pb-12 text-center border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-4 text-lg">
            También puedes escribirnos a:
          </p>
          <a
            href="mailto:reclamos@farmaven.com"
            className="text-2xl font-extrabold text-blue-700 hover:text-blue-600 transition duration-150 border-b-2 border-transparent hover:border-blue-700 pb-1 inline-flex items-center gap-3"
          >
            {/* Icono de Email */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"
              />
            </svg>
            reclamos@farmaven.com
        </a>
      </div>
      </section>
  

              {/* FOOTER */}
        <footer className="bg-primary text-black text-center pt-10">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo */}
            <div>
              <img
                src="/src/assets/img/logo.png"
                alt="Logo FARMAVEN"
                className="mx-auto mb-4 h-16"
              />
              <p className="text-sm">
                FARMAVEN nació con la misión de ofrecer medicamentos y productos
                de salud accesibles para todos, con un servicio humano y
                cercano.
              </p>
            </div>

            {/* Navegación */}
            <div>
              <h5 className="font-bold mb-2">FARMAVEN</h5>
              <ul className=" text-sm space-y-1">
                <li>
                  <Link
                    to="/catalogo"
                    className="font-bold
                  hover:underline"
                  >
                    Catálogo del mes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonios"
                    className="font-bold
                  hover:underline"
                  >
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/libroderecla"
                    className="font-bold
                  hover:underline"
                  >
                    Libro de reclamaciones
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h5 className="font-bold mb-2">Contáctanos</h5>
              <ul className="text-sm space-y-1">
                <li>
                  📧{" "}
                  <Link
                    to="mailto:contacto@farmaven.com"
                    className=" font-bold hover:underline"
                  >
                    contacto@farmaven.com
                  </Link>
                </li>
                <li>
                  📞{" "}
                  <Link
                    to="tel:+51987654321"
                    className="font-bold hover:underline"
                  >
                    +51 987 654 321
                  </Link>
                </li>
                <li>Central Telefónica: (01) 612-5000</li>
              </ul>
            </div>

            {/* Suscripción */}
            <div>
              <h5 className="font-bold mb-2">Suscríbete</h5>
              <p className="text-sm mb-2">
                Recibe notificaciones de sorteos y promociones exclusivas 🎁
              </p>
              <form
                className="flex gap-2 mb-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  console.log("Email suscrito:", email);
                  alert("¡Gracias por suscribirte!");
                  e.target.reset();
                }}
              >
                <input
                  type="email"
                  name="email"
                  className="flex-1 px-3 py-1 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu correo"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-700 text-black text-sm font-semibold px-4 py-1 rounded hover:bg-blue-800 transition-all"
                >
                  Enviar
                </button>
              </form>
              <h6 className="font-bold mb-2">Síguenos</h6>
              <div className="flex justify-center space-x-4">
                <a className="text-black text-xl hover:text-blue-700 transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a className="text-black text-xl hover:text-pink-600 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-black text-xl hover:text-gray-800 transition-colors">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>

            <hr className="my-6 border-black/20" />
            <p className="text-sm pb-4">
              © 2025 FARMAVEN - Todos los derechos reservados
            </p>
          </div>
        </footer>
      </div>
  );
}
