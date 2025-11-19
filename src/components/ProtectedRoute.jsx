import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // correo permitido
  const allowedEmail = "luivelandiabaez@crackthecode.la";

  // 1. si no hay usuario → redirigir a registro
  if (!user) {
    return <Navigate to="/registro" replace />;
  }

  // 2. si el usuario existe pero NO es el permitido → bloquear
  if (user.email !== allowedEmail) {
    return <h1 className="text-center mt-10 text-red-600 text-xl">
      ❌ No tienes permiso para ver esta página.
    </h1>;
  }

  // 3. acceso autorizado
  return children;
}
