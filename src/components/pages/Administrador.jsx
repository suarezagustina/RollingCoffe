import { Container, Table } from "react-bootstrap";
import chocotorta from '../../assets/chocotorta.jpg'

const Administrador = () => {
    return (
        <>
            <h2 className="display-3">pagina del admin</h2>
            <Container>
                <h2 className="text-black display-3">Productos Disponibles</h2>
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
          <td>Reposteria</td>
          <td>opcion editar y borrar</td>
        </tr>
      </tbody>
    </Table>
            </Container>
        </>
    );
};

export default Administrador;