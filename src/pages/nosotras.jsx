import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom"
import equipo from "../json/equipo.json"
import { useState } from "react";

const data = equipo.map(persona => ({
  ...persona,
  img: new URL(`../img/${persona.img}`, import.meta.url).href
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
  }
  return (
    <div className="font-[Montserrat] text-[#495057] bg-[#f8f9fa] leading-relaxed">
      {/* HEADER */}
      <header className="bg-[#0056b3] shadow-xl w-fit mx-auto mt-10 mb-20 p-8 text-center rounded-xl">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-white via-sky-300 to-blue-700 bg-clip-text text-transparent animate-pulse">
          Conócenos
        </h1>
        <p className="text-white text-center text-lg mt-4 max-w-3xl">
          Somos tres mentes creativas y poderosas, que juntas decidimos formar
          esta empresa como una forma de poder ayudar a las personas con
          nuestros conocimientos en salud y atención personalizada. Nos
          dedicamos a ofrecer productos farmacéuticos de la más alta calidad,
          cuidando la salud de nuestros clientes. Nuestra prioridad es escuchar,
          orientar y acompañar a cada cliente, asegurando que encuentre no solo
          lo que necesita, sino también la confianza y tranquilidad que merece.
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mb-20">
        {data.map((persona, idx) => (
          <div
            key={idx}
            className="bg-[#e9f5ff] shadow-lg rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={persona.img}
              alt={persona.alt}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h5 className="text-center text-2xl font-bold text-gray-800 mb-2">
                {persona.nombre}
              </h5>
              <p className="text-justify text-black text-base">
                {persona.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FORMULARIO */}
      <section className="max-w-xl mx-auto p-6 bg-gray-100 rounded-2xl shadow-md mb-20">
        <h2 className="text-center bg-[#0056b3] text-white px-10 py-4 w-fit mx-auto rounded-full text-xl font-bold uppercase tracking-wider shadow-lg">
          Cuéntanos tu experiencia
        </h2>
        <p className="text-center text-lg my-4">
          ✨ Tu opinión nos ayuda a crecer y a seguir cuidando de ti. ✨
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          <label htmlFor="nombres" className="font-semibold text-black">
            Nombres y Apellidos:
          </label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            placeholder="Escribe tu nombre completo"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label htmlFor="correo" className="font-semibold text-black">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label htmlFor="experiencia" className="font-semibold text-black">
            ¿Cómo fue tu experiencia en Farmaven?
          </label>
          <textarea
            id="experiencia"
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
            rows="5"
            placeholder="Cuéntanos cómo fue"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <label htmlFor="sugerencias" className="font-semibold text-black">
            Cuéntanos tus sugerencias aquí:
          </label>
          <input
            type="text"
            name="sugerencias"
            id="sugerencias"
            value={formData.sugerencias}
            onChange={handleChange}
            placeholder="Escribe tus sugerencias"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-700 text-white font-bold py-3 px-5 rounded-lg hover:bg-blue-800 transition-all"
          >
            Enviar
          </button>
        </form>
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
