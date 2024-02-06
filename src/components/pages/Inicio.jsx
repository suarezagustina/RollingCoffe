import { Container, Button, Card } from "react-bootstrap";
import iniciobanner from "../../assets/bannerInicio.jpg";
import menuChocotorta from "../../assets/chocotorta.jpg";

const Inicio = () => {
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
          <hr />
          <article className="mt-3 mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={menuChocotorta} />
              <Card.Body>
                <Card.Title className="colorPrincipal2">Chocotorta</Card.Title>
                <Card.Text className="mb-0">
                  ¡Deliciosa chocotorta de chocolate muy
                  cremosa, con dulce de leche y mucho chocolate!
                </Card.Text>
                <Card.Title className="my-2 fw-bolder">Precio: $2.500</Card.Title>
                <Button className="mt-1 boton bg-success">Ver mas</Button>
              </Card.Body>
            </Card>
          </article>
        </Container>
      </section> 
    </>
  );
};

export default Inicio;
