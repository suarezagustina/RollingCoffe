import { Container, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginAdmi = () => {
 const{
    register, handleSubmit, formState:{errors}} = useForm();
    const navegacion = useNavigate()

const usuarioCreado = (usuario)=>{
if(login(usuario)){
    //usuario logueado
    Swal.fire({
        title: "Usuario Logueado",
        text:  `El usuario ${usuario.email} fue logueado correctamente `,
        icon: "success",
      });
    //redirecccionar a pag de admi
    navegacion("/administrador")
}else{
    //no fue logueado
    Swal.fire({
        title: "Error en el login",
        text: "El email o contraseña son incorrectos",
        icon: "error",
      });
}
};

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
            minLength: { 
                value: 9, 
                message: "El minimo es de 9 caracteres" },
            maxLength: {
              value: 12,
              message: "El maximo es de 15 caracteres",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número",
            },
          })}
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