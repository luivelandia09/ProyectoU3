import React from "react"
export default function testimonios() {
  const testimonios = [
    {
      nombre: "María López",
      comentario:
        "Excelente servicio. Pedí mis medicamentos y llegaron en menos de una hora. ¡Muy recomendado!",
      imagen: "images/testimonio1.jpg",
    },
    {
      nombre: "Carlos Ramírez",
      comentario:
        "Los productos son de buena calidad y a muy buen precio. Me encantó la atención al cliente.",
      imagen: "images/testimonio2.jpg",
    },
    {
      nombre: "Ana Torres",
      comentario:
        "He comprado varias veces y siempre cumplen. El catálogo es claro y las promociones son geniales.",
      imagen: "images/testimonio3.jpg",
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
