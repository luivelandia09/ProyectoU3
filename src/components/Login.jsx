import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 NUEVO
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      alert("Ingreso exitoso");

      navigate("/dashboard"); 
    } catch (error) {
      alert("Error al ingresar: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Ingresar</h2>

      <form onSubmit={login} className="flex flex-col gap-4">

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-3 py-2"
        />

        {/* 👇 INPUT CON BOTÓN PARA VER/OCULTAR */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="border rounded px-3 py-2 w-full"
          />

          <button
            type="button"
            className="absolute right-3 top-2 text-sm text-blue-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Ocultar" : "Ver"}
          </button>
        </div>

        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Ingresar
        </button>
      </form>
    </div>
  );
}
