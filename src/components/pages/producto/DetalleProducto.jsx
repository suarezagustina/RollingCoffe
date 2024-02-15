import { Container, Card } from "react-bootstrap";
const DetalleProducto = () => {
    return (
        <>
        <Container >
            <section className="row mb-5">
            <h1 className="display-4 text-center mb-3">Detalle del producto</h1>
            <article className="col-12 d-flex">
                <img className="col-6" src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/14170007/chocotorta-destacada.jpg" alt="" />
            <Card>
      <Card.Body className="col-12">
        <Card.Title>Chocotorta</Card.Title>
        <Card.Text className="fs-5">
            <hr/>
            ¡Deliciosa chocotorta de chocolate muy
            cremosa, con dulce de leche y mucho chocolate!
            <div className="d-flex mb-0">
            <p className="text-success mt-0 mb-0">Categoria: </p>
            <p className="ms-1 mt-0 mb-0"> Cosas Dulces</p> 
            </div>
            <p className="text-success mt-0 mb-0">Precio: $2.500</p>
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