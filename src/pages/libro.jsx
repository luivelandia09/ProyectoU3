import React from "react";
import "../App.css";

export default function Libro() {
  return (
    <div className="bg-gray-50 min-h-screen font-[Montserrat] text-gray-800">

      {/* ENCABEZADO */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-8 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-3">
          <h1 className="text-3xl font-extrabold tracking-wide uppercase drop-shadow-md">
            Libro de Reclamaciones
          </h1>
          <p className="text-sm md:text-base italic opacity-90">
            Tu opinión es importante para nosotros 💬
          </p>
        </div>
      </header>

      {/* SECCIÓN PRINCIPAL */}
      <section className="max-w-6xl mx-auto py-12 px-6">

        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
          Atención y Soporte al Cliente
        </h2>

        <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
          En <span className="font-bold text-blue-700">FARMAVEN</span> valoramos la transparencia y la confianza.
          Si tienes una queja, reclamo o sugerencia, ponemos a tu disposición diferentes medios para comunicarte de manera rápida y segura.
        </p>

        {/* TARJETAS DE ASISTENTES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Asistente 1 */}
          <div className="bg-white shadow-lg p-8 rounded-2xl border-t-4 border-blue-600 hover:scale-[1.02] transition">
            <h3 className="font-bold text-xl mb-4 text-blue-700 flex items-center justify-center gap-2">
              📞 Rocío Valverde
            </h3>
            <p>Central: (01) 612-5001</p>
            <p>Celular: +51 987 321 654</p>
            <p className="text-sm text-gray-500 mt-3">
              Lunes a Viernes: 8:00 a.m. – 6:00 p.m.
            </p>
          </div>

          {/* Asistente 2 */}
          <div className="bg-white shadow-lg p-8 rounded-2xl border-t-4 border-green-600 hover:scale-[1.02] transition">
            <h3 className="font-bold text-xl mb-4 text-green-700 flex items-center justify-center gap-2">
              📞 Mariana Torres
            </h3>
            <p>Central: (01) 612-5002</p>
            <p>Celular: +51 985 432 198</p>
            <p className="text-sm text-gray-500 mt-3">
              Lunes a Sábado: 9:00 a.m. – 5:00 p.m.
            </p>
          </div>

          {/* Asistente 3 */}
          <div className="bg-white shadow-lg p-8 rounded-2xl border-t-4 border-purple-600 hover:scale-[1.02] transition">
            <h3 className="font-bold text-xl mb-4 text-purple-700 flex items-center justify-center gap-2">
              📞 Diego López
            </h3>
            <p>Central: (01) 612-5003</p>
            <p>Celular: +51 999 876 543</p>
            <p className="text-sm text-gray-500 mt-3">
              Lunes a Viernes: 7:30 a.m. – 4:30 p.m.
            </p>
          </div>

        </div>

        {/* PASOS */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mt-16 border-l-8 border-blue-700">
          <h3 className="text-2xl font-extrabold mb-6 text-blue-700 flex items-center gap-3">
            📝 ¿Cómo registrar tu reclamo?
          </h3>

          <ol className="list-decimal list-inside space-y-4 text-gray-700 leading-relaxed">
            <li>Comunícate con cualquier asistente por llamada o WhatsApp.</li>
            <li>Indica tus datos personales, número de pedido y motivo del reclamo.</li>
            <li>El equipo registrará tu caso en el <span className="font-semibold">Libro de Reclamaciones Digital</span>.</li>
            <li>Recibirás una confirmación por correo o mensaje.</li>
            <li>Obtendrás una respuesta en un máximo de <span className="font-bold text-blue-700">5 días hábiles</span>.</li>
          </ol>
        </div>

        {/* INFORMACIÓN EXTRA */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 max-w-xl mx-auto mb-3">
            También puedes escribirnos a:
          </p>
          <p className="text-xl font-bold text-blue-700">
            📧 reclamos@farmaven.com
          </p>
          <p className="text-sm mt-3 text-gray-600">
            Dirección: Av. Los Olivos 125 – Lima, Perú
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-blue-700 text-white text-center py-5 mt-20">
        <p>
          © 2025 <span className="font-bold">FARMAVEN</span> — Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
