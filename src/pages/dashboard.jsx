import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  onSnapshot,
  query
} from "firebase/firestore";

const emptyForm = {
  name: "",
  imageUrl: "",
  description: "",
  price: "",
  category: "",
  buyUrl: "",
};

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [okMsg, setOkMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const ref = collection(db, "products");
      const q = query(ref);

      const unsub = onSnapshot(
        q,
        (snap) => {
          const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          setProducts(list);
          setLoading(false);
        },
        (err) => {
          setErrorMsg("Error al cargar productos");
          setLoading(false);
        }
      );

      return () => unsub();
    } catch (err) {
      setErrorMsg("Error interno");
      setLoading(false);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOkMsg("");
    setErrorMsg("");

    const data = {
      name: form.name.trim(),
      imageUrl: form.imageUrl.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      category: form.category.trim(),
      buyUrl: form.buyUrl.trim(),
      createdAt: serverTimestamp(),
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "products", editingId), data);
        setOkMsg("Producto actualizado.");
      } else {
        await addDoc(collection(db, "products"), data);
        setOkMsg("Producto creado.");
      }

      setForm(emptyForm);
      setEditingId(null);
    } catch (err) {
      setErrorMsg("Error al guardar el producto.");
    }
  };

  const handleEdit = (p) => {
    setEditingId(p.id);
    setForm({
      name: p.name || "",
      imageUrl: p.imageUrl || "",
      description: p.description || "",
      price: p.price ?? "",
      category: p.category || "",
      buyUrl: p.buyUrl || "",
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setOkMsg("Producto eliminado.");
    } catch (err) {
      setErrorMsg("Error al eliminar.");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard - Farmaven</h1>

      {errorMsg && (
        <div className="mb-3 p-2 rounded bg-red-100 text-red-700 text-sm">
          {errorMsg}
        </div>
      )}

      {okMsg && (
        <div className="mb-3 p-2 rounded bg-green-100 text-green-700 text-sm">
          {okMsg}
        </div>
      )}

      <form className="bg-white shadow rounded p-4 mb-6 grid gap-3" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-semibold">Nombre</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Categoría</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="Medicamentos">Medicamentos</option>
            <option value="Vitaminas">Vitaminas</option>
            <option value="Cuidado Personal">Cuidado Personal</option>
            <option value="Recargas Digitales">Recargas Digitales</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold">Imagen (URL)</label>
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Descripción</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-semibold">Precio</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Enlace de compra</label>
            <input
              name="buyUrl"
              value={form.buyUrl}
              onChange={handleChange}
              className="w-full border rounded px-2 py-1"
              required
            />
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            {editingId ? "Guardar cambios" : "Crear producto"}
          </button>

          {editingId && (
            <button type="button" onClick={handleCancel} className="px-4 py-2 bg-gray-200 rounded">
              Cancelar
            </button>
          )}
        </div>
      </form>

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded shadow p-3 flex justify-between gap-2">
              <div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-xs text-gray-500">{p.category}</p>
                <p className="text-xs text-gray-500">{p.description}</p>
                <p className="text-sm font-bold text-blue-600">S/. {p.price}</p>
              </div>

              <div className="flex flex-col gap-1">
                <button
                  onClick={() => handleEdit(p)}
                  className="px-2 py-1 text-xs bg-yellow-400 text-black rounded"
                >
                  Editar
                </button>

                <button
                  onClick={() => handleDelete(p.id)}
                  className="px-2 py-1 text-xs bg-red-500 text-white rounded"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;