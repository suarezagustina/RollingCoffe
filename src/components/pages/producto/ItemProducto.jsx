import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI } from "../../../helpers/queries";

const ItemProducto = ({producto}) => {

 const borrarProducto = ()=>{
  Swal.fire({
    title: "Estas seguro de eliminar el producto?",
    text: "No puedes revertir este proceso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      borrarProductoAPI(producto.id)
       Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
 }

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
    <Button className="mt-1 botonBorrar ms-3 bg-danger border-danger" onClick={borrarProducto}>
    <i class="bi bi-trash3 text-white"></i>
    </Button>
    </td>
  </tr>
  );
};

export default ItemProducto;