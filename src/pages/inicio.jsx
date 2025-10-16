import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import img2 from "../json/img2.json";

// 🔹 Accede a las imágenes desde el JSON
const images = img2.img2[0];

export default function Inicio() {
  // También puedes usar las rutas directamente desde el JSON:
  const {
    cliente1,
    cliente2,
    cliente3,
    prom1,
    prom2,
    prom3,
    ibuprofeno,
    diclofenaco,
    amoxicilina,
    crema,
    suero,
    alcohol70,
    mascarillas,
    gel,
  } = images;

  return (
    <div className="inicio-container">
      <header className="bg-primary text-white py-3">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="/src/img/logo.png" alt="Logo FARMAVEN" height="100" width="200" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">INICIO</Link>
                </li>
                <li className="nav-item">
                  <Link to="/nosotras" className="nav-link active">SOBRE NOSOTRAS</Link>
                </li>
                <li className="nav-item">
                  <Link to="/valores" className="nav-link active">VALORES</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Sección de productos principales */}
      <section className="py-5">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Nuestros Productos</h2>
          <p className="descripcion-productos text-center mb-4">
            🌟 Descubre nuestros productos más populares 🌟
          </p>

          <div className="row g-4">
            {[ 
              { img: ibuprofeno, nombre: "Ibuprofeno", precio: 12.0, desc: "Analgésico y antiinflamatorio." },
              { img: diclofenaco, nombre: "Diclofenaco", precio: 15.0, desc: "Alivia dolores musculares." },
              { img: amoxicilina, nombre: "Amoxicilina", precio: 22.0, desc: "Antibiótico eficaz." }
            ].map((producto, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.desc}</p>
                    <p className="precio">S/ {producto.precio.toFixed(2)}</p>
                    <Link to="/catalogo" className="btn btn-primary">Comprar</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de promociones */}
      <section className="py-5 promociones">
        <div className="container">
          <h3 className="text-center mb-4">Promociones</h3>
          <div className="row g-4">
            {[prom1, prom2, prom3].map((promo, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 shadow-sm border-primary">
                  <img src={promo} className="card-img-top" alt={`Promoción ${i + 1}`} />
                  <div className="card-body text-center">
                    <h5 className="card-title">Promoción {i + 1}</h5>
                    <p className="precio">Descuento especial</p>
                    <Link to="/catalogo" className="btn btn-primary">Ver más</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-5 bg-light testimonios">
        <div className="container">
          <h2 className="text-center mb-5">Testimonios de Nuestros Clientes</h2>
          <div className="row g-4">
            {[cliente1, cliente2, cliente3].map((foto, i) => (
              <div key={i} className="col-md-4">
                <div className="card border-0 shadow-lg p-4 text-center">
                  <img src={foto} alt={`Cliente ${i + 1}`} className="rounded-circle mx-auto mb-3" width="120" height="120" />
                  <h5 className="fw-bold">Cliente {i + 1}</h5>
                  <p className="text-muted fst-italic">"Excelente servicio y productos de calidad."</p>
                  <div className="text-warning fs-5">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="custom-footer text-dark pt-5">
        <div className="container text-center small py-3">
          © 2025 FARMAVEN - Todos los derechos reservados
        </div>
      </footer>
    </div>
  );
}
