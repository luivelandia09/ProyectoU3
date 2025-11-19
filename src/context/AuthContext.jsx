import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";

const AuthContext = createContext();

async function getUserRole(uid) {
  try {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      return snap.data().role || null;
    } else {
      console.warn("⚠️ No existe documento de usuario en Firestore");
      return null;
    }
  } catch (error) {
    console.error("❌ Error al obtener rol:", error);
    return null;
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const roleFromDb = await getUserRole(currentUser.uid);
        setRole(roleFromDb);
      } else {
        setUser(null);
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        loading,
        email: user?.email || null,
        uid: user?.uid || null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
