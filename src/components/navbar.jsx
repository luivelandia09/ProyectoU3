import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          🩺 Farmaven
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-black-800 transition">
            Inicio
          </Link>

          <Link to="/nosotras" className="hover:text-black-800 transition">
            Nosotras
          </Link>

          <Link to="/valores" className="hover:text-black-800 transition">
            Valores
          </Link>

          <Link to="/catalogo" className="hover:text-black-800 transition">
            Catálogo
          </Link>

          <Link to="/testimonios" className="hover:text-black-800 transition">
            Testimonios
          </Link>

          <Link to="/libro" className="hover:text-black-800 transition">
            Libro
          </Link>
        </div>
      </div>
    </nav>
  );
}
