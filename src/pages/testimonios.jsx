import React from "react";
import { Link } from "react-router-dom";
//import "../App.css";
import imgData from "../json/img2.json";

export default function testimonios() {
  const testimonios = [
    {
      nombre: "María López",
      comentario:
        "Excelente servicio. Pedí mis medicamentos y llegaron en menos de una hora. ¡Muy recomendado!",
      imagen: imgData.img2[0].cliente1, //
    },
    {
      nombre: "Carlos Ramírez",
      comentario:
        "Los productos son de buena calidad y a muy buen precio. Me encantó la atención al cliente.",
      imagen: imgData.img2[0].cliente2,
    },
    {
      nombre: "Ana Torres",
      comentario:
        "He comprado varias veces y siempre cumplen. El catálogo es claro y las promociones son geniales.",
      imagen: imgData.img2[0].cliente3,
    },
  ];
  return (
    <>
      <section className="testimonios-container">
        <h2 className="testimonios-titulo">
          💬 Testimonios de nuestros clientes
        </h2>
        <div className="testimonios-grid">
          {testimonios.map((t, index) => (
            <div key={index} className="testimonio-card">
              <img src={t.imagen} alt={t.nombre} className="testimonio-img" />
              <p className="testimonio-texto">“{t.comentario}”</p>
              <h4 className="testimonio-nombre">— {t.nombre}</h4>
            </div>
          ))}
        </div>
      </section>
      {/* === FOOTER AJUSTADO (Azul 700 + imagen más grande) === */}
      <footer className="text-white pt-10 bg-blue-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-around gap-10 text-center">
          {/* === COLUMNA 1: Logo + Navegación === */}
          <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-start w-full md:w-1/2">
            {/* Logo + Descripción */}
            <div className="w-auto">
              <img
                src={new URL("../img/logo.png", import.meta.url).href}
                alt="Logo FARMAVEN"
                className="w-60 h-auto mx-auto md:mx-0" // Imagen más grande
              />

              <p className="text-sm mt-4 text-white max-w-xs mx-auto md:mx-0 md:text-left">
                FARMAVEN nació con la misión de ofrecer medicamentos y productos
                de salud accesibles para todos, con un servicio humano y
                cercano.
              </p>
            </div>

            {/* Enlaces */}
            <div className="w-auto md:text-left">
              <h5 className="font-bold mb-2 text-white">FARMAVEN</h5>
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

          {/* === COLUMNA 2: Contacto + Suscripción === */}
          <div className="flex flex-col md:flex-row gap-10 justify-center md:justify-start w-full md:w-1/2">
            {/* Contacto */}
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

            {/* Suscripción */}
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
          © 2025 FARMAVEN - Todos los derechos reservados
        </p>
      </footer>
    </>
  );
}
