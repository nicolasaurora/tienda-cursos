import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cursos')
      .then(res => res.json())
      .then(data => setCursos(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cursos Gastronómicos IGA</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {cursos.map(curso => (
          <div key={curso.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img 
            src={ curso.imagenes && curso.imagenes.length > 0 ? `http://localhost:3001/public/images/${curso.imagenes[0]}` : '/images/placeholder.jpg'}
            alt={curso.nombre} 
            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            <h3>{curso.nombre}</h3>
            <p>{curso.descripcion}</p>
            <p><strong>Precio:</strong> ${curso.precio}</p>
            <Link to={`/comprar/${curso.id}`}>
              <button>Comprar</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;