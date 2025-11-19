import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      alert("Ingreso exitoso");

      navigate("/dashboard"); // redirigir
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

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Ingresar
        </button>
      </form>
    </div>
  );
}
