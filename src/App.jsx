import ProtectedRoute from "./components/ProtectedRoute";
import Agregado from "./pages/agregado";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/navbar";
import Inicio from "./pages/inicio";
import Nosotras from "./pages/nosotras";
import Valores from "./pages/valores";
import Catalogo from "./pages/catalogo";
import Testimonios from "./pages/testimonios";
import Libro from "./pages/libro";
import PreguntasFrecuentes from "./pages/preguntasFrecuentes";
import DashboardPage from "./pages/dashboard";
import Acceder from "./context/AuthPage";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotras" element={<Nosotras />} />
            <Route path="/valores" element={<Valores />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/libro" element={<Libro />} />
            <Route path="/preguntas" element={<PreguntasFrecuentes />} />
<<<<<<< HEAD
            <Route path="/preguntas" element={<PreguntasFrecuentes />} />
=======
>>>>>>> refs/remotes/origin/main
            <Route path="/AuthPage" element={<Acceder />} />
            <Route path="/agregado" element={<Agregado />} />

            {/* Ruta PROTEGIDA: Dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />

            {/* Ruta SOLO admin */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <h1>Zona del Admin</h1>
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;