/* 
  1. Modifique la función mostrar menú, para que al hacer clic en alguna categoría se muestre: 
    a. El nombre de la categoría en un H2
    b. Los productos disponibles en esa cetegoría: 
      Si el producto tiene inventario, mostrar el botón agregar a carrito
      Si el producto no tiene inventario, mostrar el mensaje 'No disponible' 

  2. Agregar una función que permita agregar un producto al carrito. 
*/

function init(){
    escribirBienvenida();
    mostrarMenu();
    escribirMensaje();
}

function escribirBienvenida()
{
  const myH1 = document.createElement("h1");
  myH1.innerHTML="Bienvenido";
  document.body.appendChild(myH1);

}

function mostrarMenu()
{
   categorias.forEach((categoria)=>{
     const myBtn = document.createElement("button");
     myBtn.setAttribute("class", "styledBtn");
     myBtn.innerHTML=categoria.nombre;
     myBtn.addEventListener("click", ()=>mostrarProductos(categoria.id));
     document.body.appendChild(myBtn);
   })
}

function escribirMensaje()
{
  const nodoMensaje = document.createElement("p");
  nodoMensaje.innerHTML= "Por favor, selecciona una categoría para continuar:";
  document.body.appendChild(nodoMensaje);
}


function mostrarProductos(idCategoria)
{
  
  // Filtrar los productos de la categoria
  // Mostrar los productos
  
  const productosFiltrados = filtrarProductos(idCategoria);
  let cadena ='';
  productosFiltrados.forEach((element)=>{
    cadena+=`<div>

    Nombre Producto: ${element.nombre}<br>
    Precio Producto: ${element.precio}<br>

    
    </div>`

    document.querySelector("#productos").innerHTML=cadena;
  });



}

function filtrarProductos(idCategoria)
{

    return productos.filter(producto=>producto.categoria===idCategoria);

}