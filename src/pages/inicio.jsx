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
    prom1, // <- asegúrate de corregirlo en el JSON (antes tenías promi)
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
      <footer className="bg-primary-600 text-black text-center pt-10">
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
                className="bg-blue-700 text-white text-sm font-semibold px-4 py-1 rounded hover:bg-blue-800 transition-all"
              >
                Enviar
              </button>
            </form>
            <h6 className="font-bold mb-2">Síguenos</h6>
            <div className="flex justify-center space-x-4">
              <Link className="text-black text-xl hover:text-blue-700 transition-colors">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link className="text-black text-xl hover:text-pink-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link className="text-black text-xl hover:text-gray-800 transition-colors">
                <i className="fab fa-tiktok"></i>
              </Link>
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
