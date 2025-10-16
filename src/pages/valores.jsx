// Imports (asegúrate de que las rutas existan en src/assets/img)
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import fotoValores from "/src/img/fotovalores.jpg"; 
import descuValores from "/src/img/descuvalores.png";
import logo from "/src/img/logo.png";

export default function Valores() {
  return (
    <div className="font-[Montserrat] text-[#495057] bg-[#f8f9fa] leading-relaxed">

      {/* SECCIÓN PRINCIPAL */}
      <section className="py-16 bg-gradient-to-br from-[#e6f2ff] to-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#003b73] uppercase tracking-wide mb-6">
            LOS VALORES QUE NOS DEFINEN
          </h1>
          <p className="text-lg text-[#6c757d] max-w-3xl mx-auto">
            Estos principios guían cada producto, servicio e interacción con nuestros clientes.
          </p>

          {/* MISIÓN Y VISIÓN */}
          <div className="flex flex-col md:flex-row items-center mt-12 gap-8">
            <div className="flex flex-col gap-6 w-full md:w-1/2">
              <div className="bg-[#e9f5ff] rounded-xl p-6 shadow-md hover:border-[#0056b3] border-2 border-transparent transition">
                <h3 className="text-xl font-semibold text-[#0e3b5c] mb-2">NUESTRA MISIÓN</h3>
                <p>Ser un pilar de salud y bienestar para la comunidad, ofreciendo productos farmacéuticos de calidad y un servicio excepcional.</p>
              </div>
              <div className="bg-[#e9f5ff] rounded-xl p-6 shadow-md hover:border-[#0056b3] border-2 border-transparent transition">
                <h3 className="text-xl font-semibold text-[#0e3b5c] mb-2">NUESTRA VISIÓN</h3>
                <p>Ser la farmacia de mayor confianza en el Perú, reconocida por la innovación en salud digital y cuidado accesible para todos.</p>
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
              texto: "Brindamos un servicio transparente, honesto y personalizado para todos.",
              frase: "“Tu bienestar es nuestra prioridad.”",
              imagen: "/atencion valores.png",
            },
            {
              icon: "fa-lightbulb",
              titulo: "Innovación en salud digital",
              texto: "Usamos tecnología para mejorar el acceso a servicios y productos de salud.",
              frase: "“La tecnología al servicio de tu bienestar.”",
              imagen:"/reunion valores.png",
            },
            {
              icon: "fa-hands-holding-child",
              titulo: "Compromiso con el cuidado",
              texto: "Promovemos el uso responsable de medicamentos e información confiable.",
              frase: "“Cuidarte hoy es vivir mejor mañana.”",
              imagen: "/productos valores.png",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-[#e9f5ff] p-8 rounded-xl text-center shadow-lg max-w-sm border-2 border-transparent hover:border-[#0056b3] transition"
            >
              {/* <-- CORRECCIÓN: usar backticks para interpolar clases */}
              <i className={`fa-solid ${p.icon} text-[#0056b3] text-4xl mb-3`}></i>
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
            <form className="bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2 border border-gray-200">
              <div className="mb-4">
                <label htmlFor="nombre" className="block font-semibold text-[#003b73] mb-1">Nombre:</label>
                <input type="text" id="nombre" placeholder="Tu nombre completo" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#0056b3]" />
              </div>
              <div className="mb-4">
                <label htmlFor="correo" className="block font-semibold text-[#003b73] mb-1">Correo electrónico:</label>
                <input type="email" id="correo" placeholder="tucorreo@example.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#0056b3]" />
              </div>
              <div className="mb-4">
                <label htmlFor="valor" className="block font-semibold text-[#003b73] mb-1">¿Qué valor te representa más?</label>
                <select id="valor" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#0056b3]">
                  <option value="">Selecciona un valor</option>
                  <option value="inclusion">Inclusión y Diversidad</option>
                  <option value="innovacion">Innovación en salud digital</option>
                  <option value="compromiso">Compromiso con el cuidado</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="comentarios" className="block font-semibold text-[#003b73] mb-1">Comentarios:</label>
                <textarea id="comentarios" rows="3" placeholder="Cuéntanos tu experiencia..." className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#0056b3]" />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white py-2 rounded-full font-bold hover:opacity-90 transition">
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
      <footer className="bg-[#64bafb] text-black py-10 mt-10 border-t-4 border-[#0056b3]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Logo FARMAVEN" className="h-20 mb-3" />
            <p className="text-sm">
              FARMAVEN nació con la misión de ofrecer medicamentos accesibles para todos,
              con un servicio humano y cercano.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-2">FARMAVEN</h5>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Catálogo del mes</a></li>
              <li><a href="#" className="hover:underline">Testimonios</a></li>
              <li><a href="#" className="hover:underline">Libro de reclamaciones</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-2">Contáctanos</h5>
            <ul className="space-y-1 text-sm">
              <li>📧 contacto@farmaven.com</li>
              <li>📞 +51 987 654 321</li>
              <li>Central Telefónica: (01) 612-5000</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-2">Suscríbete</h5>
            <input type="email" placeholder="Tu correo" className="w-full border border-gray-300 rounded-lg px-3 py-1 mb-2" />
            <button className="bg-[#0056b3] text-white px-4 py-1 rounded-lg w-full mb-3">Enviar</button>
            <div className="flex justify-center gap-3 text-lg">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-tiktok"></i>
            </div>
          </div>
        </div>
        <p className="text-center text-sm mt-6">© 2025 FARMAVEN - Todos los derechos reservados</p>
      </footer>

    </div>
  );
}
