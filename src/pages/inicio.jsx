import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../img/logo.png";
import ibuprofeno from "../img/IBUPROFENO.png";
import diclofenaco from "../img/DICLOFENACO.png";
import amoxicilina from "../img/AMOXICILINA.png";
import paracetamol from "../img/PARACETAMOL.png";
import azitromicina from "../img/AZITROMICINA.png";
import prom1 from "../img/prom1.png";
import prom2 from "../img/prom2.png";
import prom3 from "../img/prom3.png";
import crema from "../assets/img/crema.jpg";
import suero from "../assets/img/suero.jpg";
import alcohol from "../assets/img/alcohol.jpg";
import mascarillas from "../assets/img/mascarillas.jpg";
import gel from "../assets/img/gel.jpg";
import cliente1 from "../assets/img/cliente1.jpg";
import cliente2 from "../assets/img/cliente2.jpg";
import cliente3 from "../assets/img/cliente3.jpg";

const productosExtra = [
  {
    id: 6,
    nombre: "Crema antibiótica",
    precio: 8.5,
    desc: "Ideal para heridas leves y quemaduras.",
    img: crema,
  },
  {
    id: 7,
    nombre: "Suero oral 500ml",
    precio: 5.0,
    desc: "Hidratación efectiva para cuadros de deshidratación.",
    img: suero,
  },
  {
    id: 8,
    nombre: "Alcohol 70%",
    precio: 4.0,
    desc: "Desinfectante de uso externo para limpieza de heridas.",
    img: alcohol,
  },
  {
    id: 9,
    nombre: "Mascarillas quirúrgicas (10u)",
    precio: 6.0,
    desc: "Protección diaria contra agentes externos.",
    img: mascarillas,
  },
  {
    id: 10,
    nombre: "Gel antibacterial 250ml",
    precio: 5.5,
    desc: "Elimina el 99.9% de bacterias sin necesidad de agua.",
    img: gel,
  },
];

export default function Inicio() {
  const productosExtra = [
    {
      id: 6,
      nombre: "Crema antibiótica",
      precio: 8.5,
      desc: "Ideal para heridas leves y quemaduras.",
      img: crema,
    },
    {
      id: 7,
      nombre: "Suero oral 500ml",
      precio: 5.0,
      desc: "Hidratación efectiva para cuadros de deshidratación.",
      img: suero,
    },
    {
      id: 8,
      nombre: "Alcohol 70%",
      precio: 4.0,
      desc: "Desinfectante de uso externo para limpieza de heridas.",
      img: alcohol,
    },
    {
      id: 9,
      nombre: "Mascarillas quirúrgicas (10u)",
      precio: 6.0,
      desc: "Protección diaria contra agentes externos.",
      img: mascarillas,
    },
    {
      id: 10,
      nombre: "Gel antibacterial 250ml",
      precio: 5.5,
      desc: "Elimina el 99.9% de bacterias sin necesidad de agua.",
      img: gel,
    },
  ];

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
                  <Link to="/" className="nav-link active">
                    INICIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/nosotras" className="nav-link active">
                    SOBRE NOSOTRAS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/valores" className="nav-link active">
                    VALORES
                  </Link>
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
                <div className="card-body">
                  <h5 className="card-title">¡Ofertas Especiales!</h5>
                  <p className="card-text">
                    Descubre más productos en nuestro catálogo completo.
                  </p>
                  <a href="./catalogo.jsx" className="btn btn-danger">
                    Ver Catálogo
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
                  <a href="./catalogo.jsx" className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  “Farmaven siempre tiene los medicamentos que necesito. El
                  servicio es rápido y confiable.”
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
                  “Excelente atención y precios accesibles. Recomiendo Farmaven
                  a todos mis amigos.”
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
                  “Me encanta la presentación del sitio y la variedad de
                  productos. ¡Muy recomendable!”
                </p>
                <div className="text-warning fs-5">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 🔥 SECCIÓN DE PROMOCIONES 🔥 */}
      <section className="relative bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 text-white py-16 mt-10 overflow-hidden">
        {/* Fondo animado */}
        <div className="absolute inset-0 animate-pulse opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_70%)]"></div>

        <div className="relative container mx-auto px-6 text-center">
          {/* Icono del carrito */}
          <div className="flex justify-center mb-6 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 text-yellow-300 drop-shadow-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.435m0 0L6.75 14.25A2.25 2.25 0 009 16.5h9.75a2.25 2.25 0 002.19-1.757l1.5-6.75A1.125 1.125 0 0021.375 6H5.121m0 0L4.5 3.75M9 21a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>
          </div>

          {/* Texto principal */}
          <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">
            🔥 ¡Promoción de la Semana! 🔥
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
            Aprovecha descuentos exclusivos en productos esenciales de salud y
            bienestar. Solo por tiempo limitado 🕒
          </p>

          {/* Botón animado */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-3 rounded-full shadow-lg transform hover:scale-110 transition duration-300 animate-bounce">
            🛒 Ver ofertas exclusivas
          </button>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section id="testimonios" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Testimonios de Clientes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nombre: "María López",
                opinion:
                  "El servicio fue excelente, el equipo siempre atento y profesional.",
                foto: cliente1,
              },
              {
                nombre: "Carlos Pérez",
                opinion:
                  "Me encantó el diseño final, captaron exactamente lo que quería.",
                foto: cliente2,
              },
              {
                nombre: "Lucía Fernández",
                opinion:
                  "Muy buen trabajo, cumplieron con todo en el tiempo acordado.",
                foto: cliente3,
              },
            ].map((cliente, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-500"
              >
                <img
                  src={cliente.foto}
                  alt={cliente.nombre}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-gray-700">
                  {cliente.nombre}
                </h3>
                <p className="text-gray-600 italic mt-2">"{cliente.opinion}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* FOOTER */}
      <footer className="bg-[#64bafb] text-black text-center pt-10">
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
              de salud accesibles para todos, con un servicio humano y cercano.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h5 className="font-bold mb-2">FARMAVEN</h5>
            <ul className="text-sm space-y-1">
              <li>
                <Link to="/catalogo" className="hover:underline">
                  Catálogo del mes
                </Link>
              </li>
              <li>
                <Link to="/testimonios" className="hover:underline">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link to="/libroderecla" className="hover:underline">
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
                  className="hover:underline"
                >
                  contacto@farmaven.com
                </Link>
              </li>
              <li>
                📞{" "}
                <Link to="tel:+51987654321" className="hover:underline">
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
                className="d-flex mb-3"
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
                  className="form-control form-control-sm me-2"
                  placeholder="Tu correo"
                  required
                />
                <button type="submit" className="btn btn-primary btn-sm">
                  Enviar
                </button>
              </form>
              <h6 className="fw-bold">Síguenos</h6>
            <div className="flex justify-center space-x-4">
              <Link  className="text-black text-xl">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link className="text-black text-xl">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link className="text-black text-xl">
                <i className="fab fa-tiktok"></i>
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-black/20" />
        <p className="text-sm pb-4">
          © 2025 FARMAVEN - Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}
