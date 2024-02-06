import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Inicio from './components/pages/Inicio'
import Footer from './components/common/Footer'
import Container from "react-bootstrap";
import Administrador from './components/pages/Administrador'

function App() {

  return (
    <>
    <Container className='mainPage'>
    <Menu></Menu>
    <Inicio></Inicio>
    {/*<Administrador></Administrador>*/}
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
