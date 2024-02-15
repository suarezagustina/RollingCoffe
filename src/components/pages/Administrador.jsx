import { Container, Table, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import ItemProducto from "./producto/ItemProducto";

const Administrador = () => {
const [productos, setProductos] = useState ([]);

useEffect(()=>{
 traerProducto();
},[])

const traerProducto = async()=>{
 try {
  const listaProductosAPI = await leerProductosAPI()
  setProductos(listaProductosAPI);
 } catch (error) {
  console.log(error)
 }
}
    return (
        <>
            <Container>
              <article className="d-flex align-items-center">
                <h2 className="text-black display-4 mt-2">Productos Disponibles</h2>
                <Button className="mt-1 boton border-success bg-success ms-auto">
                <Link className="btn btn-success border-0" to="/administrador/crear">
                <i className="bi bi-file-earmark-plus fs-2"></i>
                </Link>
                </Button>
                </article>
                <hr/>
                <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Code</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de la imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {
         productos.map((producto)=><ItemProducto key={producto.id} producto={producto}></ItemProducto>)
        }
      </tbody>
    </Table>
            </Container>
        </>
    );
};

export default Administrador;