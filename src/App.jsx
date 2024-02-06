import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import Menu from './components/common/Menu'
import Inicio from './components/pages/Inicio'
import Footer from './components/common/Footer'
import Error404 from './components/pages/Error404'
import Administrador from './components/pages/Administrador'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
   <BrowserRouter>
   <Menu></Menu>
    <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
      <Route exact path='/administrador/crear' element={<Error404></Error404>}></Route>
      <Route exact path='/administrador/editar' element={<Error404></Error404>}></Route>
      <Route path='*' element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
   </BrowserRouter>
  )
}

export default App
