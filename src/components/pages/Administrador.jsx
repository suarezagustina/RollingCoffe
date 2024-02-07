import { Container, Table, Button } from "react-bootstrap";
import chocotorta from '../../assets/chocotorta.jpg'

const Administrador = () => {
    return (
        <>
            <Container>
              <article className="d-flex align-items-center">
                <h2 className="text-black display-4 mt-2">Productos Disponibles</h2>
                <Button className="mt-1 boton border-success bg-success ms-auto">
                <i className="bi bi-file-earmark-plus fs-2"></i>
                </Button>
                </article>
                <hr/>
                <Table striped bordered hover>
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
        <tr>
          <td>1</td>
          <td>Chocotorta</td>
          <td>$2.500</td>
          <td className="text-center">
          <img src={chocotorta} className='img-fluid' width={150} alt="logo de rolling coffee" />
            </td>
          <td>Cosas Dulces</td>
          <td className="text-center">
          <Button className="mt-1 boton bg-warning border-warning">
          <i className="bi bi-pencil-square text-black"></i>
          </Button>
          <Button className="mt-1 boton ms-3 bg-danger border-danger">
          <i class="bi bi-trash3 text-white"></i>
          </Button>
          </td>
        </tr>
      </tbody>
    </Table>
            </Container>
        </>
    );
};

export default Administrador;