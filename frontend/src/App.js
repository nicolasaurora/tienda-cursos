import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogo from './pages/Catalogo';
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';
import MisCompras from './pages/MisCompras';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f4f4f4' }}>
        <a href="/" style={{ marginRight: '10px' }}>Catálogo</a>
        <a href="/admin">Admin</a>
      </nav>
      
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/comprar/:id" element={<Checkout />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/mis-compras" element={<MisCompras />} />
      </Routes>
    </Router>
  );
}

export default App;