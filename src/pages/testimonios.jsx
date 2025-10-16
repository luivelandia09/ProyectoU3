import React from "react";
import "../App.css";
import imgData from "../json/img2.json"; // 

export default function Testimonios() {
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
    <section className="testimonios-container">
      <h2 className="testimonios-titulo">💬 Testimonios de nuestros clientes</h2>
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
  );
}
