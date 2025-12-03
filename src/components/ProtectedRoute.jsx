import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, requiredRole }) {
  const { user, role, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  // 1. Si no está logueado → a login
  if (!user) {
    return <Navigate to="/AuthPage" replace />;
  }

  // 2. Si la ruta pide rol y el usuario NO lo tiene → bloquear
  if (requiredRole && role !== requiredRole) {
    return (
      <h1 className="text-center mt-10 text-red-600 text-xl">
        ❌ No tienes permiso para acceder a esta sección.
      </h1>
    );
  }

  // 3. Si todo OK → mostrar contenido
  return children;
}
