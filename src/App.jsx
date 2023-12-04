import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page2 from './Page2';
import Page4 from './Page4';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRoutes />} />
        <Route path="pagina2" element={<Page2 />} />
        <Route path="pagina4" element={<Page4 />} />
      </Routes>
    </BrowserRouter>
  );
};

const AppRoutes = () => {
  return (
    <>
        <Link to="pagina4">
        <button>Ir para a Página 4</button>
      </Link>
      <h1>aaaaa</h1>
    </>
  );
};

export default App;
