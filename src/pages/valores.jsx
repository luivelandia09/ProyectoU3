import { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import imagenes from "../json/img.json";
import Footer from "../components/Footer"; // 👈 ÚNICO CAMBIO (import)

export default function Valores() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    valor: "",
    comentarios: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Formulario enviado correctamente!");
    console.log(formData);
    setFormData({
      nombre: "",
      correo: "",
      valor: "",
      comentarios: "",
    });
  };

  return (
    <div className="inicio-container">
      {/* NAVBAR */}
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

      {/* CONTENIDO */}
      <div className="font-[Montserrat] text-[#495057] bg-[#f8f9fa] leading-relaxed">

        <div className="text-center py-8 bg-gradient-to-r from-[#dbeeff] to-[#f8f9fa]">
          {imagenes.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12"
            >
              <img
                src={new URL(`../${item.imagenfoto}`, import.meta.url).href}
                alt="Foto valores"
                className="rounded-xl shadow-lg w-56 md:w-72 lg:w-80 border-4 border-white object-cover"
              />
              <img
                src={new URL(`../${item.imagendes}`, import.meta.url).href}
                alt="Descuento valores"
                className="rounded-xl shadow-lg w-48 md:w-60 lg:w-72 border-4 border-white object-cover"
              />
              <img
                src={new URL(`../${item.img3}`, import.meta.url).href}
                alt="Logo valores"
                className="rounded-full shadow-md w-20 md:w-24 lg:w-28 border-2 border-[#0056b3]"
              />
            </div>
          ))}
        </div>

        <section className="py-16 bg-gradient-to-br from-[#e6f2ff] to-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#003b73] uppercase tracking-wide mb-6">
              LOS VALORES QUE NOS DEFINEN
            </h1>

            <p className="text-lg text-[#6c757d] max-w-3xl mx-auto">
              Estos principios guían cada producto, servicio e interacción con
              nuestros clientes.
            </p>

            <div className="flex flex-col md:flex-row items-center mt-12 gap-8">
              <div className="flex flex-col gap-6 w-full md:w-1/2">
                <div className="bg-[#e9f5ff] rounded-xl p-6 shadow-md border-2 hover:border-[#0056b3] transition">
                  <h3 className="text-xl font-semibold text-[#0e3b5c] mb-2">
                    NUESTRA MISIÓN
                  </h3>
                  <p>
                    Ser un pilar de salud y bienestar para la comunidad,
                    ofreciendo productos farmacéuticos de calidad y un servicio
                    excepcional.
                  </p>
                </div>

                <div className="bg-[#e9f5ff] rounded-xl p-6 shadow-md border-2 hover:border-[#0056b3] transition">
                  <h3 className="text-xl font-semibold text-[#0e3b5c] mb-2">
                    NUESTRA VISIÓN
                  </h3>
                  <p>
                    Ser la farmacia de mayor confianza en el Perú, reconocida
                    por la innovación en salud digital y cuidado accesible para
                    todos.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center">
                <img
                  src={new URL("../img/fotovalores.jpg", import.meta.url).href}
                  alt="Imagen de valores"
                  className="rounded-xl shadow-lg max-w-full border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-gray-200">
          <h2 className="text-2xl text-white font-bold bg-[#0056b3] w-fit px-6 py-3 mx-auto rounded-full uppercase shadow-md mb-8">
            Nuestros pilares fundamentales
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
            {[
              {
                icon: "fa-hand-holding-heart",
                titulo: "Inclusión y Diversidad",
                texto:
                  "Brindamos un servicio transparente, honesto y personalizado para todos.",
                frase: "“Tu bienestar es nuestra prioridad.”",
              },
              {
                icon: "fa-lightbulb",
                titulo: "Innovación en salud digital",
                texto:
                  "Usamos tecnología para mejorar el acceso a servicios y productos de salud.",
                frase: "“La tecnología al servicio de tu bienestar.”",
              },
              {
                icon: "fa-hands-holding-child",
                titulo: "Compromiso con el cuidado",
                texto:
                  "Promovemos el uso responsable de medicamentos e información confiable.",
                frase: "“Cuidarte hoy es vivir mejor mañana.”",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-[#e9f5ff] p-8 rounded-xl text-center shadow-lg max-w-sm border-2 hover:border-[#0056b3] transition"
              >
                <i
                  className={`fa-solid ${p.icon} text-[#0056b3] text-4xl mb-3`}
                ></i>
                <h3 className="text-xl font-semibold mb-2">{p.titulo}</h3>
                <p className="text-[#0e3b5c] mb-2">{p.texto}</p>
                <p className="italic font-bold text-[#0e3b5c]">{p.frase}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-white to-[#e6f2ff] border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl text-center font-bold bg-[#0056b3] text-white px-6 py-3 rounded-full w-fit mx-auto mb-10 shadow-md">
              Participa por un descuento en nuestros productos 🎁
            </h2>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-10">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2 border border-gray-200"
              >
                {/* formulario intacto */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white py-2 rounded-full font-bold hover:opacity-90 transition"
                >
                  Enviar
                </button>
              </form>

              <div className="w-full md:w-1/2 text-center">
                <img
                  src={new URL("../img/descuvalores.png", import.meta.url).href}
                  alt="Descuento"
                  className="rounded-xl shadow-lg max-w-full border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ✅ FOOTER GLOBAL */}
      <Footer />
    </div>
  );
}