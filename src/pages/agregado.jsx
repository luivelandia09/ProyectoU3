import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import publicidad from "../json/publicidad.json";

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
  1: { nombre: "Paracetamol", descripcion: "Analgésico y antipirético eficaz para dolores leves a moderados y fiebre.", precio: 12.0 },
  2: { nombre: "Ibuprofeno", descripcion: "Antiinflamatorio no esteroideo (AINE) para dolor, inflamación y fiebre.", precio: 15.0 },
  3: { nombre: "Diclofenaco", descripcion: "Potente antiinflamatorio para dolores musculares y articulares.", precio: 18.0 },
  4: { nombre: "Azitromicina", descripcion: "Antibiótico de amplio espectro para infecciones bacterianas.", precio: 25.0 },
  5: { nombre: "Amoxicilina", descripcion: "Antibiótico penicilínico para diversas infecciones bacterianas.", precio: 22.0 },
  6: { nombre: "Jarabe para la Tos", descripcion: "Jarabe expectorante y antitusivo.", precio: 28.0 },
  7: { nombre: "Loratadina", descripcion: "Antihistamínico para alergias.", precio: 15.5 },
  8: { nombre: "Multivitamínico", descripcion: "Vitaminas y minerales esenciales.", precio: 35.0 },
  9: { nombre: "Vitamina C", descripcion: "Refuerza el sistema inmunológico.", precio: 25.0 },
  10: { nombre: "Vitamina D", descripcion: "Salud ósea e inmunológica.", precio: 28.5 },
  11: { nombre: "Aspirina", descripcion: "Analgésico y antiinflamatorio.", precio: 14.5 },
  12: { nombre: "Omeprazol", descripcion: "Reduce el ácido estomacal.", precio: 24.0 },
};

export default function Recomendador() {
  const [objetivo, setObjetivo] = useState("Aumentar energía");
  const [usuario, setUsuario] = useState("Estudiante");
  const [velocidad, setVelocidad] = useState("Inmediato");
  const resultadoRef = useRef(null);
  const navigate = useNavigate();

  const generarRecomendacion = () => {
    resultadoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const irACatalogo = () => navigate("/catalogo");

  const productosRecomendados = recomendacionesPorObjetivo[objetivo] || [];

  return (
    <section className="min-h-screen p-6 bg-blue-50 text-blue-900">
      <div className="max-w-3xl mx-auto">

        {/* CONTENIDO (NO TOCADO) */}
        {/* ... todo tu contenido exactamente igual ... */}

        {Array.isArray(publicidad) &&
          publicidad.filter((item) => item.activo).map((item) => (
            <div key={item.id} className="mt-16 flex justify-center">
              <img
                src={item.imagen}
                alt={item.alt}
                className="max-w-[90%] rounded-2xl shadow-xl"
              />
            </div>
          ))}

        {/* FOOTER COMPLETO (MISMO QUE INICIO) */}
        <footer className="text-white pt-10 bg-blue-700 mt-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-around gap-10 text-center">

            <div className="flex flex-col md:flex-row gap-10 w-full md:w-1/2">
              <div>
                <img
                  src={new URL("../img/logo.png", import.meta.url).href}
                  alt="Logo FARMAVEN"
                  className="w-60 mx-auto md:mx-0"
                />
                <p className="text-sm mt-4 max-w-xs mx-auto md:text-left">
                  FARMAVEN nació con la misión de ofrecer medicamentos y productos
                  de salud accesibles para todos, con un servicio humano y cercano.
                </p>
              </div>

              <div className="md:text-left">
                <h5 className="font-bold mb-2">FARMAVEN</h5>
                <ul className="text-sm space-y-1">
                  <li><Link to="/catalogo" className="hover:underline text-blue-200">Catálogo del mes</Link></li>
                  <li><Link to="/testimonios" className="hover:underline text-blue-200">Testimonios</Link></li>
                  <li><Link to="/libro" className="hover:underline text-blue-200">Libro de reclamaciones</Link></li>
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
                  <button className="bg-blue-600 px-3 py-1 rounded">
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