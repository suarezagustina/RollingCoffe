import { Container, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const LoginAdmi = () => {
 const{
    register, handleSubmit, formState:{errors}} = useForm();

const usuarioCreado = (usuario)=>{
console.log(usuario)
}

    return (
        <>
        <Container className="mainPage">
        <Form onSubmit={handleSubmit(usuarioCreado)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" {
        ...register("email", {
            required: "El email es obligatorio",
            minLength:{
                value: 15,
                message: "Debes ingresar como minimo 15 caracteres"
            },
            maxLength:{
                value: 35,
                message: "Puedes ingresar como maximo 35 caracteres"
            }
        })
        }/>
        <Form.Text className="text-danger">
        {errors.email?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese una contraseña" {
        ...register("contraseña", {
            required: "La contraseña es obligatoria",
            minLength:{
                value: 8,
                message: "Debes ingresar como minimo 8 caracteres"
            },
            maxLength:{
                value: 15,
                message: "Puedes ingresar como maximo 15 caracteres"
            }
        })
        }
        />
        <Form.Text className="text-danger">
        {errors.contraseña?.message}
        </Form.Text>
      </Form.Group>

      <Button variant="success" className="border-success" type="submit">
        Ingresar
      </Button>
    </Form>
    </Container>
        </>
    );
};

export default LoginAdmi;