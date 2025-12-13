import React, { useState } from "react";

export default function Dashboard() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    link: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Producto:", form);
    alert("Producto registrado correctamente ✅");
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
          <label className="block font-semibold mb-1">
            Nombre del producto
          </label>
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

        {/* ENLACE */}
        <div>
          <label className="block font-semibold mb-1">
            Enlace de compra
          </label>
          <input
            type="url"
            name="link"
            value={form.link}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* IMAGEN */}
        <div>
          <label className="block font-semibold mb-1">
            URL de la imagen
          </label>
          <input
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* BOTÓN */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          Guardar producto
        </button>

        {/* DEBUG (puedes borrar luego) */}
        <pre className="text-xs bg-gray-100 p-2 rounded">
          {JSON.stringify(form, null, 2)}
        </pre>
      </form>
    </div>
  );
}
