import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import equipo from "../json/equipo.json";
import { useState } from "react";

const data = equipo.map((persona) => ({
  ...persona,
  img: new URL(`../img/${persona.img}`, import.meta.url).href,
}));

export default function Nosotras() {
  const [formData, setFormData] = useState({
    nombres: "",
    correo: "",
    experiencia: "",
    sugerencias: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por compartir tu experiencia 💙");
    setFormData({ nombres: "", correo: "", experiencia: "", sugerencias: "" });
  };
  return (
    <div className="inicio-container">
      <header className="bg-primary text-white py-3">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
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

      <div className="font-[Montserrat] text-[#495057] bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 leading-relaxed min-h-screen">
        {/* HEADER */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-xl mx-auto mt-10 mb-20 p-8 text-center rounded-xl max-w-4xl">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-white via-sky-300 to-blue-200 bg-clip-text text-transparent animate-pulse mb-6">
            Conócenos
          </h1>
          <p className="text-black text-center text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
            Somos tres mentes creativas y poderosas, que juntas decidimos formar
            esta empresa como una forma de poder ayudar a las personas con
            nuestros conocimientos en salud y atención personalizada. Nos
            dedicamos a ofrecer productos farmacéuticos de la más alta calidad,
            cuidando la salud de nuestros clientes. Nuestra prioridad es
            escuchar, orientar y acompañar a cada cliente, asegurando que
            encuentre no solo lo que necesita, sino también la confianza y
            tranquilidad que merece.
          </p>
        </header>

        {/* EQUIPO */}
        <div>
          <h2 className="text-center bg-[#0056b3] text-white px-10 py-4 w-fit mx-auto rounded-full text-2xl font-bold uppercase tracking-wider shadow-lg animate-pulse">
            <i className="fa fa-users mr-2" aria-hidden="true"></i>
            Nuestro equipo
          </h2>
        </div>

        {/* TARJETAS */}
        <div className="grid-container max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {data.map((persona, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="relative bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center h-64 p-4">
                <img
                  src={persona.img}
                  alt={persona.alt}
                  className="w-20 h-20 object-cover mx-auto rounded-lg shadow-md"
                />
              </div>
              <div className="p-6 flex-1 bg-gradient-to-b from-white to-blue-50">
                <h5 className="text-center text-2xl font-bold text-blue-800 mb-2">
                  {persona.nombre}
                </h5>
                <h6 className="text-center text-lg font-semibold text-blue-600 mb-3">
                  {persona.especialidad}
                </h6>
                <p className="text-gray-700 text-base leading-relaxed">
                  {persona.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FORMULARIO */}
        <section className="grid-container max-w-2xl mx-auto px-8 py-12 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 -mt-20 mb-10 px-8 py-6 rounded-xl shadow-lg mx-auto max-w-fit transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-center text-white text-2xl font-bold uppercase tracking-wider">
              Cuéntanos tu experiencia
            </h2>
          </div>
          <p className="text-center text-lg mb-10 text-blue-800 font-medium px-4">
            ✨ Tu opinión nos ayuda a crecer y a seguir cuidando de ti ✨
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
            <div className="space-y-2">
              <label
                htmlFor="nombres"
                className="font-semibold text-blue-500 block"
              >
                Nombres y Apellidos:
              </label>
              <input
                type="text"
                id="nombres"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                placeholder="Escribe tu nombre completo"
                className="w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 placeholder-gray-400 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="correo"
                className="font-semibold text-blue-800 block"
              >
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                className="w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 placeholder-gray-400 transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="experiencia"
                className="font-semibold text-blue-800 block"
              >
                ¿Cómo fue tu experiencia en Farmaven?
              </label>
              <textarea
                id="experiencia"
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                rows="5"
                placeholder="Cuéntanos cómo fue"
                className="w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 placeholder-gray-400 transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="sugerencias"
                className="font-semibold text-blue-800 block"
              >
                Cuéntanos tus sugerencias aquí:
              </label>
              <input
                type="text"
                name="sugerencias"
                id="sugerencias"
                value={formData.sugerencias}
                onChange={handleChange}
                placeholder="Escribe tus sugerencias"
                className="w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 placeholder-gray-400 transition-all duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
            >
              Enviar
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="bg-blue text-black text-center pt-10">
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
                de salud accesibles para todos, con un servicio humano y
                cercano.
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
    </div>
  );
}
