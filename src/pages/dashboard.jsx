import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

export default function Dashboard() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    link: "",
    stock: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "products"), {
        name: form.name,
        category: form.category,
        price: Number(form.price),
        stock: Number(form.stock),
        imageUrl: form.imageUrl,
        description: form.description,
        createdAt: serverTimestamp(),
      });

      alert("Producto guardado  ✅");

      setForm({
        name: "",
        category: "",
        price: "",
        stock: "",
        imageUrl: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Error al guardar el producto");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Panel de control - Farmacia Digital
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-xl space-y-4"
      >
        {/* NOMBRE */}
        <div>
          <label className="block font-semibold mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* CATEGORÍA */}
        <div>
          <label className="block font-semibold mb-1">Categoría</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Seleccionar categoría</option>
            <option value="Analgésicos">Analgésicos</option>
            <option value="Antiinflamatorios">Antiinflamatorios</option>
            <option value="Antibióticos">Antibióticos</option>
            <option value="Medicamentos para la Tos">
              Medicamentos para la Tos
            </option>
            <option value="Antialérgicos">Antialérgicos</option>
            <option value="Vitaminas y Suplementos">
              Vitaminas y Suplementos
            </option>
            <option value="Medicamentos Gastrointestinales">
              Medicamentos Gastrointestinales
            </option>
          </select>
        </div>

        {/* PRECIO */}
        <div>
          <label className="block font-semibold mb-1">Precio</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* STOCK */}
        <div>
          <label className="block font-semibold mb-1">Stock</label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* IMAGEN */}
        <div>
          <label className="block font-semibold mb-1">URL de la imagen</label>
          <input
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* DESCRIPCIÓN */}
        <div>
          <label className="block font-semibold mb-1">Descripción</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* BOTÓN */}
        <button
          type="submit"
          className="w-full mt-4 px-6 py-3 
             bg-blue-600 hover:bg-blue-800 
             text-black text-lg font-bold 
             rounded-lg shadow-md transition"
        >
          Guardar producto
        </button>
      </form>
      {form.name && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md max-w-xl">
          <h2 className="text-xl font-bold mb-3 text-blue-700">
            Vista previa del producto
          </h2>

          <div className="flex gap-4">
            <img
              src={form.imageUrl || "https://via.placeholder.com/150"}
              alt="Vista previa"
              className="w-32 h-32 object-contain border rounded"
            />

            <div>
              <p className="font-bold text-lg">{form.name}</p>
              <p className="text-sm text-gray-500">{form.category}</p>
              <p className="text-sm text-gray-600 mt-2">
                {form.description || "Sin descripción"}
              </p>
              <p className="text-blue-700 font-bold text-xl">
                S/ {form.price || "0.00"}
              </p>
              <p className="text-sm">Stock: {form.stock || 0}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
