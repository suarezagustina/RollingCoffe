import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import Menu from './components/common/Menu'
import Inicio from './components/pages/Inicio'
import Footer from './components/common/Footer'
import Error404 from './components/pages/Error404'
import Administrador from './components/pages/Administrador'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import DetalleProducto from "./components/pages/producto/DetalleProducto";

function App() {

  return (
   <BrowserRouter>
   <Menu></Menu>
    <Routes>
    <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/detalleProducto" element={<DetalleProducto></DetalleProducto>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/administrador/crear" element={<FormularioProducto></FormularioProducto>}></Route>
        <Route exact path="/administrador/editar" element={<Administrador></Administrador>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      <Route path='*' element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
   </BrowserRouter>
  )
}

export default App
