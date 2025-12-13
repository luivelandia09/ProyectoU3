import React from "react";
import { Link } from "react-router-dom";
//import "../index.css";
import img2 from "../json/img2.json";

// Accede a las imágenes desde el JSON
const images = img2.img2?.[0] ?? {};

export default function Inicio() {
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
              {/* Logo en public/assets/img */}
              <img
                src="/src/img/logo.png"
                alt="Logo FARMAVEN"
                height="100"
                width="200"
              />
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

      {/* Sección de productos principales */}
      <section className="py-5">
        <div className="container">
          <h2 style={{ textAlign: "center" }}>Nuestros Productos</h2>
          <p className="descripcion-productos text-center mb-4">
            🌟 Descubre nuestros productos más populares 🌟
          </p>

          <div className="row g-4">
            {[
              {
                img: ibuprofeno, // p.ej. "/img/IBUPROFENO.png" -> debe existir en public/img/IBUPROFENO.png
                nombre: "Ibuprofeno",
                precio: 12.0,
                desc: "Analgésico y antiinflamatorio.",
              },
              {
                img: diclofenaco,
                nombre: "Diclofenaco",
                precio: 15.0,
                desc: "Alivia dolores musculares.",
              },
              {
                img: amoxicilina,
                nombre: "Amoxicilina",
                precio: 22.0,
                desc: "Antibiótico eficaz.",
              },
            ].map((producto, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={producto.img}
                    className="card-img-top"
                    alt={producto.nombre}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.desc}</p>
                    <p className="precio">S/ {producto.precio.toFixed(2)}</p>
                    <Link to="/catalogo" className="btn btn-primary">
                      Comprar
                    </Link>
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
                  <img
                    src={promo}
                    className="card-img-top"
                    alt={`Promoción ${i + 1}`}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Promoción {i + 1}</h5>
                    <p className="precio">Descuento especial</p>
                    <Link to="/catalogo" className="btn btn-primary">
                      Ver más
                    </Link>
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
                  <img
                    src={foto}
                    alt={`Cliente ${i + 1}`}
                    className="rounded-circle mx-auto mb-3"
                    width="120"
                    height="120"
                  />
                  <h5 className="fw-bold">Cliente {i + 1}</h5>
                  <p className="text-muted fst-italic">
                    "Excelente servicio y productos de calidad."
                  </p>
                  <div className="text-warning fs-5">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                  className="bg-blue-600 hover:bg-blue-500 text-black px-3 py-1 rounded w-full sm:w-auto"
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
    </div>
  );
}
