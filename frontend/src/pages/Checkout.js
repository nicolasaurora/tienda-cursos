import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, cursoId: parseInt(id) };

    const res = await fetch('http://localhost:3001/compras', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.status === 409) {
        alert("Ya estás inscrito en este curso. No es necesario comprarlo de nuevo.");
        return;
    }

    if (!res.ok) {
        alert("Ocurrió un error al procesar la compra.");
        return;
    }

    if (res.ok) {
      alert("Gracias por tu compra!! Compra exitosa.");
      navigate('/mis-compras');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Datos del Cliente</h2>
      <input placeholder="Nombre" onChange={e => setForm({...form, nombre: e.target.value})} required />
      <input placeholder="Email" type="email" onChange={e => setForm({...form, email: e.target.value})} required />
      <input placeholder="Teléfono" onChange={e => setForm({...form, telefono: e.target.value})} required />
      <button type="submit">Finalizar Compra</button>
    </form>
  );
};

export default Checkout;