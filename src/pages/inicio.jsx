import React from "react";
import "../index.css";
import logo from "../assets/react.svg";
import ibuprofeno from "../assets/react.svg";
import diclofenaco from "../assets/react.svg";
import amoxicilina from "../assets/react.svg";
import paracetamol from "../assets/react.svg";
import azitromicina from "../assets/react.svg";
import prom1 from "../assets/react.svg";
import prom2 from "../assets/react.svg";
import prom3 from "../assets/react.svg";
import crema from "../assets/img/crema.jpg";
import suero from "../assets/img/suero.jpg";
import alcohol from "../assets/img/alcohol.jpg";
import mascarillas from "../assets/img/mascarillas.jpg";
import gel from "../assets/img/gel.jpg";
import cliente1 from "../assets/img/cliente1.jpg";
import cliente2 from "../assets/img/cliente2.jpg";
import cliente3 from "../assets/img/cliente3.jpg";
export default function Inicio() {
  return (
    <div>
      <header className="bg-primary text-white py-3">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo FARMAVEN" height="100" width="200" />
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
                  <a className="nav-link active" href="./inicio.jsx">
                    INICIO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="./nosotras.jsx">
                    SOBRE NOSOTRAS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="./valores.jsx">
                    VALORES
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <nav className="navbar">
        <div className="logo" />
        <i className="fa fa-shopping-cart" aria-hidden="true" />

        <div>
          <form className="search-bar">
            <input type="text" placeholder="Buscar..." />
            <button type="submit">🔍</button>
          </form>
        </div>
      </nav>

      <section className="banner">
        <div className="container text-center">
          <h2 style={{ textAlign: "center" }}>
            <i className="fas fa-plus" /> Tu salud nuestra prioridad{" "}
            <i className="fas fa-heartbeat" />
          </h2>
          <p className="lead">
            En FARMAVEN trabajamos para cuidarte a ti y a tu familia.
          </p>
          <p className="mt-3 fst-italic fs-4">
            ✨ "Cuidamos de ti para que vivas mejor" ✨
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Nuestros Productos</h2>
          <p className="descripcion-productos text-center mb-4">
            🌟 "Descubre nuestros productos más populares, diseñados para
            ofrecerte alivio y tranquilidad." 🌟
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={ibuprofeno}
                  className="card-img-top"
                  alt="Ibuprofeno"
                />
                <div className="card-body">
                  <h5 className="card-title">Ibuprofeno</h5>
                  <p className="card-text">
                    Antiinflamatorio y analgésico ideal para dolores y fiebre.
                  </p>
                  <p className="precio">S/ 12.00</p>
                  <a href="./catalogo.jsx" className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={diclofenaco}
                  className="card-img-top"
                  alt="Diclofenaco"
                />
                <div className="card-body">
                  <h5 className="card-title">Diclofenaco</h5>
                  <p className="card-text">
                    Reduce inflamación y alivia dolores musculares.
                  </p>
                  <p className="precio">S/ 15.00</p>
                  <a href="./catalogo.jsx" className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={amoxicilina}
                  className="card-img-top"
                  alt="Amoxicilina"
                />
                <div className="card-body">
                  <h5 className="card-title">Amoxicilina</h5>
                  <p className="card-text">
                    Antibiótico eficaz contra diversas infecciones bacterianas.
                  </p>
                  <p className="precio">S/ 22.00</p>
                  <a href="./catalogo.jsx" className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-danger">
                <img
                  src={paracetamol}
                  className="card-img-top"
                  alt="Paracetamol en oferta"
                />
                <div className="card-body">
                  <h5 className="card-title">Paracetamol (Oferta)</h5>
                  <p className="card-text">
                    Alivio rápido para dolores y fiebre.
                  </p>
                  <p className="precio">
                    <span className="precio-tachado">S/ 10.00</span> S/7.50
                  </p>
                  <a href="./catalogo.jsx" className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={azitromicina}
                  className="card-img-top"
                  alt="Azitromicina"
                />
                <div className="card-body">
                  <h5 className="card-title">Azitromicina</h5>
                  <p className="card-text">
                    Tratamiento para infecciones respiratorias y más.
                  </p>
                  <p className="precio">S/ 32.00</p>
                  <a href="./catalogo.jsx" className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 promociones">
        <div className="container">
          <h3 className="text-center mb-4">Promociones</h3>
          <p className="text-center text-muted mb-5">
            Aprovecha nuestras ofertas especiales en medicamentos y productos de
            salud.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-primary">
                <img
                  src={prom1}
                  className="card-img-top"
                  alt="Producto en oferta 1"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Vitamina C</h5>
                  <p className="card-text">
                    Refuerza tus defensas con nuestra promoción.
                  </p>
                  <p className="precio">
                    <span className="text-decoration-line-through text-muted">
                      S/ 25.00
                    </span>{" "}
                    S/ 18.00
                  </p>
                  <a href="./catalogo.jsx" className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-primary">
                <img
                  src={prom2}
                  className="card-img-top"
                  alt="Producto en oferta 2"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Multivitamínico</h5>
                  <p className="card-text">
                    Más energía y bienestar para tu día a día.
                  </p>
                  <p className="precio">
                    <span className="text-decoration-line-through text-muted">
                      S/ 40.00
                    </span>{" "}
                    S/ 28.00
                  </p>
                  <a href="./catalogo.jsx" className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-primary">
                <img
                  src={prom3}
                  className="card-img-top"
                  alt="Producto en oferta 3"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Jarabe para la tos</h5>
                  <p className="card-text">
                    Alivio rápido para toda la familia.
                  </p>
                  <p className="precio">
                    <span className="text-decoration-line-through text-muted">
                      S/ 18.00
                    </span>{" "}
                    S/ 12.50
                  </p>
                  <a href=".7catalogo.jsx" className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonios */}
      <section className="py-5 bg-light testimonios">
        <div className="container">
          <h2 className="text-center mb-5">Testimonios de Nuestros Clientes</h2>
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card border-0 shadow-lg p-4 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src={cliente1}
                  alt="Cliente 1"
                  className="rounded-circle mx-auto mb-3"
                  width="120"
                  height="120"
                />
                <h5 className="fw-bold">María López</h5>
                <p className="text-muted fst-italic">
                  “Farmaven siempre tiene los medicamentos que necesito. El servicio es rápido y confiable.”
                </p>
                <div className="text-warning fs-5">★★★★★</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-lg p-4 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src={cliente2}
                  alt="Cliente 2"
                  className="rounded-circle mx-auto mb-3"
                  width="120"
                  height="120"
                />
                <h5 className="fw-bold">Carlos Ramírez</h5>
                <p className="text-muted fst-italic">
                  “Excelente atención y precios accesibles. Recomiendo Farmaven a todos mis amigos.”
                </p>
                <div className="text-warning fs-5">★★★★★</div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-lg p-4 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src={cliente3}
                  alt="Cliente 3"
                  className="rounded-circle mx-auto mb-3"
                  width="120"
                  height="120"
                />
                <h5 className="fw-bold">Lucía Fernández</h5>
                <p className="text-muted fst-italic">
                  “Me encanta la presentación del sitio y la variedad de productos. ¡Muy recomendable!”
                </p>
                <div className="text-warning fs-5">★★★★★</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="custom-footer text-dark pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <img
                src={logo}
                alt="Logo FARMAVEN"
                className="mb-3"
                height="60"
                width="150"
              />
              <p className="small">
                FARMAVEN nació con la misión de ofrecer medicamentos y productos
                de salud accesibles para todos, con un servicio humano y
                cercano.
              </p>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">FARMAVEN</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="./catalogo.jsx"
                    className="text-dark text-decoration-none"
                  >
                    Catálogo del mes
                  </a>
                </li>
                <li>
                  <a
                    href="./libroderecla.jsx"
                    className="text-dark text-decoration-none"
                  >
                    Libro de Reclamaciones
                  </a>
                </li>
                <li>
                  <a
                    href="testimonios.jsx"
                    className="text-dark text-decoration-none"
                  >
                    Testimonios
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Contáctanos</h5>
              <ul className="list-unstyled small">
                <li>
                  📧{" "}
                  <a href="mailto:contacto@farmaven.com" className="text-dark">
                    contacto@farmaven.com
                  </a>
                </li>
                <li>
                  📞{" "}
                  <a href="tel:+51987654321" className="text-dark">
                    +51 987 654 321
                  </a>
                </li>
                <li>Central Telefónica: (01) 612-5000</li>
                <li>
                  <a href="#" className="text-dark text-decoration-none">
                    Libro de reclamaciones
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Suscríbete</h5>
              <p className="small">
                Recibe notificaciones de sorteos y promociones exclusivas 🎁
              </p>
              <form className="d-flex mb-3">
                <input
                  type="email"
                  className="form-control form-control-sm me-2"
                  placeholder="Tu correo"
                />
                <button className="btn btn-primary btn-sm">Enviar</button>
              </form>
              <h6 className="fw-bold">Síguenos</h6>
              <div>
                <a href="#" className="text-dark me-3">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" className="text-dark me-3">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="text-dark">
                  <i className="fab fa-tiktok fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <hr />
          <div className="text-center small py-3">
            © 2025 FARMAVEN - Todos los derechos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}
