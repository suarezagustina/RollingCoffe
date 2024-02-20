const URI_PRODUCTOS= import.meta.env.VITE_API_PRODUCTOS;

console.log(URI_PRODUCTOS);

export const leerProductosAPI = async()=>{
     try {
        const respuesta = await fetch(URI_PRODUCTOS);
       // console.log(respuesta);
        const listaProductos = await respuesta.json()
       // console.log(listaProductos);
        return listaProductos;
     } catch (error) {
        console.log(error)
     }
}
// POST
export const crearProductoAPI = async(nuevoproducto)=>{
 try {
   const respuesta = await fetch(URI_PRODUCTOS, {
      method: "POST",
      headers: {
         "Content-Type":"application/json"
      },
      body: JSON.stringify(nuevoproducto)
   })
   console.log(respuesta);
   return respuesta
 } catch (error) {
   console.log(error)
 }
}

// DELETE borrar
export const borrarProductoAPI = async(id)=>{
   try {
     const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`, {
        method: "DELETE",
     })
     console.log(respuesta);
     return respuesta
   } catch (error) {
     console.log(error)
   }
  }

  export const obtenerProductoAPI = async(id)=>{
   try {
      const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`);
     // console.log(respuesta);
     // const productoBuscado = await respuesta.json()
     console.log(respuesta);
      return respuesta;
   } catch (error) {
      console.log(error)
   }
}