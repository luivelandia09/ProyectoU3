import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  const allowedEmail = "luivelandiabaez@crackthecode.la";

  return (
    <nav className="bg-blue-700 text-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          🩺 Farmaven
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-black-200 transition">
            Inicio
          </Link>

          <Link to="/nosotras" className="hover:text-black-600 transition">
            Nosotras
          </Link>

          <Link to="/valores" className="hover:text-black-600 transition">
            Valores
          </Link>

          <Link to="/catalogo" className="hover:text-black-600 transition">
            Catálogo
          </Link>

          <Link to="/testimonios" className="hover:text-black-600 transition">
            Testimonios
          </Link>

          <Link to="/libro" className="hover:text-black-600 transition">
            Libro
          </Link>

          {/* 🔹 Dashboard solo visible para el email permitido */}
          {user?.email === allowedEmail && (
            <Link to="/dashboard" className="hover:text-black-600 transition">
              Dashboard
            </Link>
          )}

         <Link to="/AuthPage" className="hover:text-black-600 transition">
         Acceder
        </Link>
        </div>
      </div>
    </nav>
  );
}
