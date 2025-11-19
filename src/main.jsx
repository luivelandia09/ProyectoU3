import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext";  // 👈 IMPORTANTE

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>     {/* 👈 ENVUELVE TODA TU APP */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
