import { Button } from "react-bootstrap";

const ItemProducto = ({producto}) => {
  return (
    <tr>
    <td>{producto.id}</td>
    <td>{producto.nombreDelProducto}</td>
    <td>{producto.precio}</td>
    <td className="text-center">
    <img src={producto.imagen} className='img-fluid' width={250}/>
      </td>
    <td>{producto.categoria}</td>
    <td className="text-center">
    <Button className="mt-1 boton bg-warning border-warning">
    <i className="bi bi-pencil-square text-black"></i>
    </Button>
    <Button className="mt-1 boton ms-3 bg-danger border-danger">
    <i class="bi bi-trash3 text-white"></i>
    </Button>
    </td>
  </tr>
  );
};

export default ItemProducto;