import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";

const DetalleProducto = () => {

  const{id} = useParams();
  const[producto, setProducto] = useState({})

useEffect(()=>{
 //buscar el producto que quiero maquetar
 cargarDetalle();
},[])

const cargarDetalle = async()=>{
 const respuesta = await obtenerProductoAPI(id)
 if(respuesta.status === 200){
  //mostrar producto en card
  const datoProducto = await respuesta.json();
  setProducto(datoProducto);
 }else{
  Swal.fire({
    title: "Ocurrio un error",
    text: "Intente realizar esta operacion en unos minutos",
    icon: "error"
  });
 }
}

    return (
        <>
        <Container className="mainPage">
            <section className="row mb-5">
            <h1 className="display-4 text-center mb-3">Detalle del producto</h1>
            <article className="col-12 d-flex">
                <img className="col-6" src={producto.imagen} alt="{producto.imagen}" />
            <Card>
      <Card.Body className="col-12">
        <Card.Title>{producto.nombreDelProducto}</Card.Title>
        <Card.Text className="fs-5">
            <hr/>
            {producto.descripcionBreve}
            <div className="d-flex mb-0">
            <p className="text-success mt-0 mb-0">Categoria: </p>
            <p className="ms-1 mt-0 mb-0">{producto.categoria}</p> 
            </div>
            <p className="text-success mt-0 mb-0">Precio:${producto.precio}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </article>
    </section>
      </Container>
        </>
    );
};

export default DetalleProducto;