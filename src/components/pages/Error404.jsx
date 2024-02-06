import error404 from '../../assets/error404.png'
import { Button} from 'react-bootstrap'
const Error404 = () => {
    return (
        <>
        <section className='text-center'>
      <div>
        <h2 className="display-3">aqui va el maquetado del error</h2>
        <img src={error404} className='img-fluid' width={450} alt="Error 404" />
        </div>
        <Button className="mt-1 bg-success text-center my-4">Volver al inicio</Button>
        </section>
        </>
    );
};

export default Error404;