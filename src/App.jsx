import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Inicio from './components/pages/Inicio'
import Footer from './components/common/Footer'
import Error404 from './components/pages/Error404'
import Administrador from './components/pages/Administrador'

function App() {

  return (
    <>
    <section className='mainPage'>
    <Menu></Menu>
    <Inicio></Inicio>
    {/*<Administrador></Administrador>*/}
   {/* <Error404></Error404> */}
   {/* <Administrador></Administrador> */}
    </section>
    <Footer></Footer>
    </>
  )
}

export default App
