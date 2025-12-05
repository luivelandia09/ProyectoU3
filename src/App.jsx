import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/navbar";
<<<<<<< HEAD

=======
>>>>>>> a79945dc3d61ea1e8ceabfbdc35970837bb0aaaa
import Inicio from "./pages/inicio";
import Nosotras from "./pages/nosotras";
import Valores from "./pages/valores";
import Catalogo from "./pages/catalogo";
import Testimonios from "./pages/testimonios";
import Libro from "./pages/libro";
<<<<<<< HEAD
import PreguntasFrecuentes from "./pages/preguntasFrecuentes";
=======
import Dashboard from "./pages/dashboard";
import Acceder from "./context/AuthPage";

// Dashboard
>>>>>>> a79945dc3d61ea1e8ceabfbdc35970837bb0aaaa
import DashboardPage from "./pages/dashboard";

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
<<<<<<< HEAD
            <Route path="/preguntas" element={<PreguntasFrecuentes />} />
            <Route path="/dashboard" element={<DashboardPage />} />
=======
            <Route path="/AuthPage" element={<Acceder />} />

            <Route path="/AuthPage" element={<Acceder />} />

            {/*Ruta PROTEGIDA*/}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            {/*Ruta PROTEGIDA*/}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Ruta PROTEGIDA: Dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />

            {/*Ruta SOLO admin */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <h1>Zona del Admin </h1>
                </ProtectedRoute>
              }
            />
>>>>>>> a79945dc3d61ea1e8ceabfbdc35970837bb0aaaa
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;