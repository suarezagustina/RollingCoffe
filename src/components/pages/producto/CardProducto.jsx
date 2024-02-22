import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";

const CardProducto = ({producto}) => {
    return (
        <>
            <Card  className='ms-3 col-3'>
            <Card.Body className='cardBody'>
            <Card.Img className='imagenCard' src={producto.imagen} variant="top"/>
              <Card.Title className="colorPrincipal2 mt-2">
                {producto.nombreDelProducto}
              </Card.Title>
                <Card.Text className="mb-0 cardText">
                {producto.descripcionBreve}
                </Card.Text>
                <Card.Title className="mt-2 fw-bolder mb-0">
                <p>${producto.precio}</p>
                </Card.Title>
                <Card.Footer className="text-end mt-0">
                 <Link variant="success" className="btn btn-success border-0" to={`/detalleProducto/${producto.id}`}>
                 Ver más
                 </Link>
               </Card.Footer>
               </Card.Body>
            </Card>
        </>
    );
};

export default CardProducto;