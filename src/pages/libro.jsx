import React from "react";
import "../App.css";



export default function Libro() {

  return (
    <div className="bg-gray-50 min-h-screen font-[Montserrat] text-gray-800">
      {/* ENCABEZADO */}
      <header className="bg-blue-700 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold uppercase tracking-wide">
              Libro de Reclamaciones
            </h1>
          </div>
          <p className="text-sm md:text-base italic">
            Tu opinión es importante para nosotros 💬
          </p>
        </div>
      </header>

      {/* SECCIÓN DE INFORMACIÓN */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Atención y Soporte al Cliente
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          En <span className="font-bold text-blue-700">FARMAVEN</span> valoramos
          la transparencia y la confianza. Si tienes una queja, reclamo o
          sugerencia, te ofrecemos distintos medios para comunicarte con
          nosotros de forma rápida y segura.
        </p>

        {/* CONTACTOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-md p-6 rounded-xl text-center border-t-4 border-blue-600">
            <h3 className="font-semibold text-xl mb-2 text-blue-700">
              📞 Asistente 1 – Rocío Valverde
            </h3>
            <p>Central Telefónica: (01) 612-5001</p>
            <p>Celular: +51 987 321 654</p>
            <p className="text-sm text-gray-500 mt-2">
              Horario: Lunes a Viernes 8:00 a.m. – 6:00 p.m.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl text-center border-t-4 border-green-600">
            <h3 className="font-semibold text-xl mb-2 text-green-700">
              📞 Asistente 2 – Mariana Torres
            </h3>
            <p>Central Telefónica: (01) 612-5002</p>
            <p>Celular: +51 985 432 198</p>
            <p className="text-sm text-gray-500 mt-2">
              Horario: Lunes a Sábado 9:00 a.m. – 5:00 p.m.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl text-center border-t-4 border-purple-600">
            <h3 className="font-semibold text-xl mb-2 text-purple-700">
              📞 Asistente 3 – Diego López
            </h3>
            <p>Central Telefónica: (01) 612-5003</p>
            <p>Celular: +51 999 876 543</p>
            <p className="text-sm text-gray-500 mt-2">
              Horario: Lunes a Viernes 7:30 a.m. – 4:30 p.m.
            </p>
          </div>
        </div>

        {/* PASOS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-blue-700">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">
            📝 Pasos para registrar tu reclamo
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              Comunícate con cualquiera de nuestras asistentes de atención al
              cliente por llamada o WhatsApp.
            </li>
            <li>
              Indica tus datos personales, número de pedido y el motivo del
              reclamo o consulta.
            </li>
            <li>
              Nuestro equipo registrará tu solicitud en el sistema del{" "}
              <span className="font-semibold">Libro de Reclamaciones Digital</span>.
            </li>
            <li>
              Recibirás una confirmación vía correo o mensaje con el número de
              atención asignado.
            </li>
            <li>
              Te daremos una respuesta en un plazo máximo de{" "}
              <span className="font-semibold text-blue-700">5 días hábiles</span>.
            </li>
          </ol>
        </div>

        {/* INFO EXTRA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto mb-4">
            También puedes visitar nuestras oficinas centrales o escribirnos a:
          </p>
          <p className="text-lg font-semibold text-blue-700">
            📧 reclamos@farmaven.com
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Dirección: Av. Los Olivos 125 – Lima, Perú
          </p>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="bg-blue-700 text-white text-center py-6 mt-10">
        <p>
          © 2025 <span className="font-bold">FARMAVEN</span> — Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
}
