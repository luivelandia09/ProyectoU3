import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user, role: userRole, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  if (!user) return <Navigate to="/" replace />;

  if (role && userRole !== role) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;