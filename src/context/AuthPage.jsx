import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // login | register
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "register") {
        const cred = await createUserWithEmailAndPassword(auth, email, pass);

        const role =
          email === "administracion@farmaven.com" ? "admin" : "cliente";

        await setDoc(doc(db, "users", cred.user.uid), { role });

        await signInWithEmailAndPassword(auth, email, pass);

        setMessage("🎉 ¡Felicidades! Tu cuenta ha sido creada con éxito.");
        navigate("/dashboard");
        return;
      }

      await signInWithEmailAndPassword(auth, email, pass);
      setMessage("✨ Ingreso exitoso. ¡Bienvenido(a) nuevamente!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-xl p-8 border border-blue-200">
      <div className="flex justify-center mb-6">
        {/* BOTÓN INGRESAR */}
        <button
          className={`px-4 py-2 mr-2 rounded-lg font-semibold transition ${
            mode === "login"
              ? "bg-blue-700 text-blue-700"
              : "bg-transparent text-blue-700"
          }`}
          onClick={() => setMode("login")}
        >
          Ingresar
        </button>

        {/* BOTÓN REGISTRARSE */}
        <button
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            mode === "register"
              ? "bg-blue-500 text-blue-700"
              : "bg-transparent text-blue-700"
          }`}
          onClick={() => setMode("register")}
        >
          Registrarse
        </button>
      </div>

      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
        {mode === "login" ? "Ingresar a tu cuenta" : "Crear una cuenta"}
      </h2>

      {message && (
        <div className="mb-4 p-3 rounded bg-blue-100 text-blue-700 font-semibold text-center shadow">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="text-blue-600 font-semibold">Correo:</label>
        <input
          type="email"
          placeholder="nombre@farmaven.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-blue-300 rounded px-3 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="text-blue-600 font-semibold">Contraseña:</label>
<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Ingresa tu contraseña"
    value={pass}
    onChange={(e) => setPass(e.target.value)}
    className="border border-blue-300 rounded px-3 py-2 w-full
      focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  <button
    type="button"
    className="absolute right-3 top-1/2 -translate-y-1/2 text-xl p-1"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? "🙈" : "👁️"}
  </button>
</div>


        <button
          type="submit"
          className={`py-2 rounded-lg  text-blue-700git  font-semibold transition ${
            mode === "login"
              ? "bg-blue-700 hover:bg-blue-800"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {mode === "login" ? "Ingresar" : "Crear cuenta"}
        </button>
      </form>
    </div>
  );
}
