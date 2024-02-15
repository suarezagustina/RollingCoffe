import { Container, Card } from "react-bootstrap";
import iniciobanner from "../../assets/bannerInicio.jpg";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";

const Inicio = () => {
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
     <section>
        <img
          src={iniciobanner}
          id="bannerInicio"
          className="object-fit-cover"
          alt="logo de rolling coffee"
        />
        <Container className="mt-3">
          <h3 className="display-4 text-black">Nuestros Productos</h3>
          <hr/>
          <article className="mt-3 mb-3 d-flex row">
            {
         productos.map((producto)=><CardProducto key={producto.id} producto={producto}></CardProducto>)
        }
          </article>
        </Container>
      </section> 
    </>
  );
};

export default Inicio;
