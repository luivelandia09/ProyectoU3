import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Inicio from "./pages/inicio";
import Nosotras from "./pages/nosotras";
import Valores from "./pages/valores";
import Catalogo from "./pages/catalogo";
import Testimonios from "./pages/testimonios";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="p-8">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotras" element={<Nosotras />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/testimonios" element={<Testimonios />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;