import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page2 from './pages/Page2/Page2';
import Page4 from './pages/Page4/Page4';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/> } />
        <Route path="page2" element={<Page2 />} />
        <Route path="page4" element={<Page4 />} />
      </Routes>
    </BrowserRouter>
  );
};

const AppRoutes = () => {
  return (
    <>
      <Link to="page2">
        <button>Ir para a Página 2</button> <br />
      </Link>
      <Link to="page4">
        <button>Ir para a Página 4</button>
      </Link>
    </>
  );
};

export default App;
