import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, role: userRole, loading } = useAuth();

  // Esperar a que Firebase termine de verificar si hay usuario
  if (loading) return <p>Cargando...</p>;

  // Si no hay sesión → mandar al inicio
  if (!user) return <Navigate to="/" replace />;

  // Si la ruta exige un rol y el usuario no lo cumple → bloquear
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // Si todo ok → mostrar contenido
  return children;
};

export default ProtectedRoute;
