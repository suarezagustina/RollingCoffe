import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
const FormularioProducto = ({editar, titulo}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const productoValidado = async(producto) => {
    if(editar){
      //agregar logica de editar con la api
    }else{
    console.log(producto);
    const respuesta = await crearProductoAPI(producto);
    if(respuesta.status === 201){
      //mensaje
      Swal.fire({
        title: "Producto creado!",
        text:  `El producto: ${producto.nombreDelProducto} fue creado correctamente `,
        icon: "success"
      });
      console.log("producto creado")
    reset();
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente crear este producto en unos minutos",
        icon: "error"
      });
    }
  };
}

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(productoValidado)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre del Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Chocotorta"
       
            {...register("nombreDelProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message:
                  "Ingresar como minimo dos caracteres del nombre del Producto",
              },
              maxLength: {
                value: 55,
                message: "Debe ingresar como maximo 55 caracteres",
              },
            })}

          />
          <Form.Text className="text-danger">
            {errors.nombreDelProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 2.500"
        
 {...register("precio", {
              required: "El precio del producto es obligatorio",
             min: {
              value: 50,
              message:
                "El precio minimo valido es 50",
             },
             max: {
              value: 100000,
              message:
              "El precio maximo valido es 100000",
             }
            })}
          />
          <Form.Text className="text-danger">
          {errors.precio?.message}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/14170007/chocotorta-destacada.jpg"

            {...register("imagen", {
              required: "La imagen del producto es necesaria",
              pattern: {
                value: "/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/",
                message:
                  "Ingrese una URL valida",
              },
            })}

          />
          <Form.Text className="text-danger">
          {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
          
          {...register("categoria", {
            required: "Elegir la categoria es obligatorio",
          })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
          {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Chocotorta con dulce de leche y mucho chocolate."
            as="textarea"

            {...register("descripcionBreve", {
              required: "Una descripcion breve es obligatoria",
              minLength: {
                value: 5,
                message:
                  "Ingresar como minimo cinco caracteres para una descipcion breve del Producto",
              },
              maxLength: {
                value: 30,
                message: "Debe ingresar como maximo 30 caracteres para una descipcion breve del Producto",
              },
            })}

          />
          <Form.Text className="text-danger">
          {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Deliciosa chocotorta de chocolate muy cremosa, con dulce de leche y mucho chocolate"
            as="textarea"

            {...register("descripcionAmplia", {
              required: "Una descripcion mas amplia es obligatoria",
              minLength: {
                value: 40,
                message:
                  "Ingresar como minimo cuarenta caracteres para una descipcion amplia del Producto",
              },
              maxLength: {
                value: 650,
                message: "Debe ingresar como maximo 650 caracteres",
              },
            })}

          />
          <Form.Text className="text-danger">
          {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
