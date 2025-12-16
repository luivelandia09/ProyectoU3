import { useState } from "react";
import Footer from "../components/Footer";

export default function PreguntasFrecuentes() {
  const preguntas = [
    {
      pregunta: "¿Cuánto demoran los envíos?",
      respuesta: "Los envíos llegan entre 30 minutos y 2 horas, según la zona."
    },
    {
      pregunta: "¿Los productos son originales?",
      respuesta: "Sí, trabajamos solo con proveedores certificados."
    },
    {
      pregunta: "¿Cómo puedo ver el catálogo?",
      respuesta: "En la sección Catálogo dentro del menú principal."
    },
    {
      pregunta: "¿Tienen promociones?",
      respuesta: "Sí, publicamos promociones nuevas cada mes."
    }
  ];

  const [abierta, setAbierta] = useState(null);

  const toggle = (i) => {
    setAbierta(abierta === i ? null : i);
  };

  return (
    <>
      <div className="inicio-container px-6 py-10">

        {/* 🔥 TÍTULO */}
        <h1
          className="text-5xl text-center mb-3 tracking-wide drop-shadow-sm"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            color: "#003b73"
          }}
        >
          Preguntas Frecuentes
        </h1>

        {/* ✨ FRASE */}
        <p
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto font-light italic"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          🌟 Tu tranquilidad es nuestra prioridad.  
          Estamos aquí para ayudarte con todas tus dudas 💙✨
        </p>

        {/* LISTA DE PREGUNTAS */}
        <div className="max-w-3xl mx-auto space-y-6">
          {preguntas.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border border-gray-200"
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center"
                onClick={() => toggle(index)}
              >
                <span
                  className="text-lg font-semibold text-[#0056b3]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.pregunta}
                </span>

                <span className="text-xl text-gray-500">
                  {abierta === index ? "−" : "+"}
                </span>
              </button>

              {abierta === index && (
                <div
                  className="px-5 pb-5 text-gray-600"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.respuesta}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* FOOTER GLOBAL */}
      <Footer />
    </>
  );
}