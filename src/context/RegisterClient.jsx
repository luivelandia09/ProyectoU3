import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function RegisterCliente() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const register = async (e) => {
    e.preventDefault();

    // 1. Crear usuario
    const cred = await createUserWithEmailAndPassword(auth, email, pass);

    // 2. Guardar rol en Firestore
    await setDoc(doc(db, "users", cred.user.uid), {
      role: "cliente",
    });

    alert("Cliente registrado con éxito");
  };

  return (
    <div>
      <h2>Registrar Cliente</h2>

      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Correo cliente"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Crear Cliente</button>
      </form>
    </div>
  );
}