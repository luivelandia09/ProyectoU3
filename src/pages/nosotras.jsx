import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import equipo from "../json/equipo.json";
import { useState } from "react";
import Footer from "../components/Footer"; // 👈 ÚNICO IMPORT NUEVO

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

      {/* CONTENIDO */}
      <div className="font-[Montserrat] text-[#495057] bg-gradient-to-b from-primary-50 via-primary-100 to-blue-200 leading-relaxed min-h-screen">
        {/* HEADER */}
        <header className="bg-primary shadow-xl mx-auto mt-10 mb-20 p-8 text-center rounded-xl max-w-4xl">
          <h1
            className="text-5xl text-center mb-3 tracking-wide drop-shadow-sm"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              color: "white",
            }}
          >
            Conócenos
          </h1>
          <p className="text-black text-lg max-w-3xl mx-auto">
            Somos tres mentes creativas y poderosas, comprometidas con la salud
            y el bienestar de nuestros clientes.
          </p>
        </header>

        {/* EQUIPO */}
        <h2 className="text-center bg-[#0056b3] text-white px-10 py-4 w-fit mx-auto rounded-full text-2xl font-bold shadow-lg mb-10">
          Nuestro equipo
        </h2>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {data.map((persona, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-2xl overflow-hidden"
            >
              <div className="flex justify-center p-6 bg-blue-50">
                <img
                  src={persona.img}
                  alt={persona.alt}
                  className="w-24 h-24 rounded-lg"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-xl font-bold text-blue-800">
                  {persona.nombre}
                </h5>
                <p className="text-blue-600 font-semibold">
                  {persona.especialidad}
                </p>
                <p className="text-gray-700 mt-2">{persona.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FORMULARIO */}
        <section className="max-w-2xl mx-auto px-8 py-12 bg-white rounded-2xl shadow-xl mb-20">
          <h2 className="text-center text-2xl font-bold text-blue-700 mb-6">
            Cuéntanos tu experiencia
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="nombres"
              placeholder="Nombres y Apellidos"
              value={formData.nombres}
              onChange={handleChange}
              className="p-3 border rounded"
              required
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              value={formData.correo}
              onChange={handleChange}
              className="p-3 border rounded"
              required
            />
            <textarea
              name="experiencia"
              placeholder="Cuéntanos tu experiencia"
              rows="4"
              value={formData.experiencia}
              onChange={handleChange}
              className="p-3 border rounded"
              required
            />
            <input
              type="text"
              name="sugerencias"
              placeholder="Sugerencias"
              value={formData.sugerencias}
              onChange={handleChange}
              className="p-3 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-black py-3 rounded font-bold"
            >
              Enviar
            </button>
          </form>
        </section>
      </div>

      {/* ✅ FOOTER GLOBAL */}
      <Footer />
    </div>
  );
}
