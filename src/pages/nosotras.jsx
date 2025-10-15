export default function Nosotras() {
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
        {/* Tarjeta 1 */}
        <div className="bg-[#e9f5ff] shadow-lg rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <img
            src="/src/img/NIÑA1.jpg"
            alt="Nayeli Mamani sonríe con calidez y confianza"
            className="w-full h-64 object-cover"
          />
          <div className="p-5">
            <h5 className="text-center text-2xl font-bold text-gray-800 mb-2">
              Nayeli Mamani
            </h5>
            <p className="text-justify text-black text-base">
              Soy Nayeli Mamani, especialista en Marketing Digital. Provengo del
              mundo del diseño gráfico y el marketing, y me apasiona crear
              campañas que conecten a las personas con productos que realmente
              mejoren su calidad de vida. Domino áreas como la publicidad en
              redes, el email marketing y el diseño de promociones. Mi mayor
              fortaleza es transformar cada promoción en una historia
              irresistible que los clientes quieren compartir.
            </p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="bg-[#e9f5ff] shadow-lg rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <img
            src="/src/img/NIÑA2.jpg"
            alt="Luisana Velandia sonríe cálidamente"
            className="w-full h-64 object-cover"
          />
          <div className="p-5">
            <h5 className="text-center text-2xl font-bold text-gray-800 mb-2">
              Luisana Velandia
            </h5>
            <p className="text-justify text-black text-base">
              Soy Luisana Velandia, especialista en ventas de Farmaven. Tengo un
              fuerte compromiso hacia el bienestar de los clientes y cuento con
              más de 5 años de experiencia en ventas y atención. Mi misión es
              escuchar y comprender las necesidades de cada persona para ofrecer
              soluciones que mejoren su calidad de vida.
            </p>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-[#e9f5ff] shadow-lg rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <img
            src="/src/img/NIÑA3.png"
            alt="Mikela Mora sonríe con amabilidad y confianza"
            className="w-full h-64 object-cover"
          />
          <div className="p-5">
            <h5 className="text-center text-2xl font-bold text-gray-800 mb-2">
              Mikela Mora
            </h5>
            <p className="text-justify text-black text-base">
              Soy Mikela Mora, una apasionada por conectar las necesidades de
              cada persona con soluciones de salud efectivas. En Farmaven,
              combino mi conocimiento farmacéutico con estrategias de
              orientación al cliente para garantizar que cada recomendación sea
              clara, segura y adaptada. Mi objetivo es que cada cliente reciba
              confianza y acompañamiento en su bienestar.
            </p>
          </div>
        </div>
      </div>

      {/* FORMULARIO */}
      <section className="max-w-xl mx-auto p-6 bg-gray-100 rounded-2xl shadow-md mb-20">
        <h2 className="text-center bg-[#0056b3] text-white px-10 py-4 w-fit mx-auto rounded-full text-xl font-bold uppercase tracking-wider shadow-lg">
          Cuéntanos tu experiencia
        </h2>
        <p className="text-center text-lg my-4">
          ✨ Tu opinión nos ayuda a crecer y a seguir cuidando de ti. ✨
        </p>

        <form className="flex flex-col gap-4 mt-6">
          <label htmlFor="Nombres" className="font-semibold text-black">
            Nombres y Apellidos:
          </label>
          <input
            type="text"
            id="Nombres"
            name="Nombre"
            placeholder="Escribe tu nombre completo"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="Correo" className="font-semibold text-black">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="Correo"
            name="Correo"
            placeholder="ejemplo@correo.com"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="Experiencia" className="font-semibold text-black">
            ¿Cómo fue tu experiencia en Farmaven?
          </label>
          <textarea
            id="Experiencia"
            name="Experiencia"
            rows="5"
            placeholder="Cuéntanos cómo fue"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <label htmlFor="Sugerencias" className="font-semibold text-black">
            Cuéntanos tus sugerencias aquí:
          </label>
          <input
            type="text"
            name="Sugerencias"
            id="Sugerencias"
            placeholder="Escribe tus sugerencias"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <a href="../catalogo.jsx" className="hover:underline">
                  Catálogo del mes
                </a>
              </li>
              <li>
                <a href="../testimonios.jsx" className="hover:underline">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="../libroderecla.jsx" className="hover:underline">
                  Libro de reclamaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h5 className="font-bold mb-2">Contáctanos</h5>
            <ul className="text-sm space-y-1">
              <li>
                📧{" "}
                <a
                  href="mailto:contacto@farmaven.com"
                  className="hover:underline"
                >
                  contacto@farmaven.com
                </a>
              </li>
              <li>
                📞{" "}
                <a href="tel:+51987654321" className="hover:underline">
                  +51 987 654 321
                </a>
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
            <form className="flex items-center justify-center mb-3">
              <input
                type="email"
                className="border rounded-l-md p-2 w-2/3 text-sm"
                placeholder="Tu correo"
              />
              <button className="bg-blue-700 text-white p-2 rounded-r-md text-sm hover:bg-blue-800">
                Enviar
              </button>
            </form>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-black text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-black text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-black text-xl">
                <i className="fab fa-tiktok"></i>
              </a>
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
