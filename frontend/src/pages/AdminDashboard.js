import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [resumen, setResumen] = useState([]);

  // useEffect(() => {
    
  //   fetch('http://localhost:8080/admin/compras-resumen')
  //     .then(res => res.json())
  //     .then(data => setResumen(data));
  // }, []);

  return (
    <div 
      style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      marginTop: '20px' 
    }}>
      <h2>Panel Administrativo IGA</h2>
      <table 
          border="1" style={{ 
          width: '60%',
          maxWidth: '800px',          
          minWidth: '400px',      
          borderCollapse: 'collapse',
          textAlign: 'center'     
        }}>
        <thead>
          <tr>
            <th>Curso</th>
            <th>Cantidad de Ventas</th>
          </tr>
        </thead>
        <tbody>
          {resumen.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;