import React, { useState } from 'react';

const MisCompras = () => {
  const [email, setEmail] = useState('');
  const [resultado, setResultado] = useState(null); // Usamos null para saber si ya se buscó

  const buscarCompras = async () => {
    try {
      const res = await fetch(`http://localhost:3001/compras/cliente/${email}`);
      const data = await res.json();
      setResultado(data); // Aquí guardamos el objeto { email, total, compras }
    } catch (error) {
      console.error("Error buscando compras:", error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mis Cursos Comprados</h2>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="email" 
          placeholder="Tu email registrado" 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={buscarCompras} style={{ padding: '8px' }}>Ver mis cursos</button>
      </div>

      {resultado && (
        <div>
          <p>Resultados para: <strong>{resultado.email}</strong> (Total: {resultado.total})</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {resultado.compras.map((item, i) => (
              <li key={i} style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
                <strong>{item.curso}</strong> - ${item.precio} <br />
                <small>Fecha: {new Date(item.fechaCompra).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MisCompras;