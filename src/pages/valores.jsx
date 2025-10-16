import "@fontawesome/fontawesome-free/css/all.min.css";
import imagenes from "../json/img.json";

export default function Valores() {
  return (
    <div className="font-[Montserrat] text-[#495057] bg-[#f8f9fa] leading-relaxed">
      {/* SECCIÓN PRINCIPAL */}
      <section className="py-16 bg-gradient-to-br from-[#e6f2ff] to-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#003b73] uppercase tracking-wide mb-6">
            LOS VALORES QUE NOS DEFINEN
          </h1>
         <div>
  {imagenes.img.map((imagesTOP) => (
    <div key={imagesTOP.img3}>
      <img src={imagesTOP.imagenfoto} alt="Foto valores" width="200" />
      <img src={imagesTOP.imagendes} alt="Descuento valores" width="200" />
      <img src={imagesTOP.img3} alt="Logo valores" width="100" />
    </div>
  ))}
</div>
          <p className="text-lg text-[#6c757d] max-w-3xl mx-auto">
            Estos principios guían cada producto, servicio e interacción con
            nuestros clientes.
          </p>

          {/* MISIÓN Y VISIÓN */}
          <div className="flex flex-col md:flex-row items-center mt-12 gap-8">
            <div className="flex flex-col gap-6 w-full md:w-1/2">
              <div className="bg-[#e9f5ff] rounded-xl p-6 shadow-md hover:border-[#0056b3] border-2 border-transparent transition">
                <h3 className="text-xl font-semibold text-[#0e3b5c] mb-2">
                  NUESTRA MISIÓN
                </h3>
                <p>
                  Ser un pilar de salud y bienestar para la comunidad,
                  ofreciendo productos farmacéuticos de calidad y un servicio
                  excepcional.
                </p>
              </div>
              <div className="bg-[#e9f5ff] rounded-xl p-6 shadow-md hover:border-[#0056b3] border-2 border-transparent transition">
                <h3 className="text-xl font-semibold text-[#0e3b5c] mb-2">
                  NUESTRA VISIÓN
                </h3>
                <p>
                  Ser la farmacia de mayor confianza en el Perú, reconocida por
                  la innovación en salud digital y cuidado accesible para todos.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center">
              <img
                src={fotoValores}
                alt="Imagen de valores"
                className="rounded-xl shadow-lg max-w-full border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-16 bg-white border-t border-gray-200">
        <h2 className="text-2xl text-white font-bold bg-[#0056b3] w-fit px-6 py-3 mx-auto rounded-full uppercase tracking-wider shadow-md mb-8">
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
              img: "/atencion valores.png",
            },
            {
              icon: "fa-lightbulb",
              titulo: "Innovación en salud digital",
              texto:
                "Usamos tecnología para mejorar el acceso a servicios y productos de salud.",
              frase: "“La tecnología al servicio de tu bienestar.”",
              img: "/reunion valores.png",
            },
            {
              icon: "fa-hands-holding-child",
              titulo: "Compromiso con el cuidado",
              texto:
                "Promovemos el uso responsable de medicamentos e información confiable.",
              frase: "“Cuidarte hoy es vivir mejor mañana.”",
              img: "/productos valores.png",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-[#e9f5ff] p-8 rounded-xl text-center shadow-lg max-w-sm border-2 border-transparent hover:border-[#0056b3] transition"
            >
              {/* <-- CORRECCIÓN: usar backticks para interpolar clases */}
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

      {/* FORMULARIO */}
      <section className="py-16 bg-gradient-to-br from-white to-[#e6f2ff] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl text-center font-bold bg-[#0056b3] text-white px-6 py-3 rounded-full w-fit mx-auto mb-10 shadow-md">
            Participa por un descuento en nuestros productos 🎁
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2 border border-gray-200">
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block font-semibold text-[#003b73] mb-1"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#0056b3]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="correo"
                  className="block font-semibold text-[#003b73] mb-1"
                >
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="tucorreo@example.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#0056b3]"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="valor"
                  className="block font-semibold text-[#003b73] mb-1"
                >
                  ¿Qué valor te representa más?
                </label>
                <select
                  id="valor"
                  name="valor"
                  value={formData.valor}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#0056b3]"
                  required
                >
                  <option value="">Selecciona un valor</option>
                  <option value="inclusion">Inclusión y Diversidad</option>
                  <option value="innovacion">
                    Innovación en salud digital
                  </option>
                  <option value="compromiso">Compromiso con el cuidado</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="comentarios"
                  className="block font-semibold text-[#003b73] mb-1"
                >
                  Comentarios:
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Cuéntanos tu experiencia..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#0056b3]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white py-2 rounded-full font-bold hover:opacity-90 transition"
              >
                Enviar
              </button>
            </form>

            <div className="w-full md:w-1/2 text-center">
              <img
                src={descuValores}
                alt="Promoción descuento"
                className="rounded-xl shadow-lg max-w-full border-4 border-white"
              />
            </div>
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
