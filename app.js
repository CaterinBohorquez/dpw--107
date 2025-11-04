const productosJSON = [
    {
        id: 1 ,
        nombre: "Cafe moca",
        precio: 70.00,
        descripcion: "Exquisito cafe con chocolate y crema",
        imagen: "moca.jpg"
    },
    {
        id: 2 ,
        nombre: "Te verde",
        precio: 50.00,
        descripcion: "Hoja de te verde",
        imagen: "teverde.jpg"
    },
    {
        id: 3 ,
        nombre: "Smoothie de Frutas",
        precio: 40.00,
        descripcion: "Mezclade frutas",
        imagen: "smoothie.jpg"
    },
]
// funcion principal
function mostrarProductos(){
    const contenedor = document.querySelector('#contenedor-productos')
    //recorrer
    productosJSON.forEach(productos => {
        //desde javascript se cre4ara un contenedor div
        const card = document.createElement('div')
        // asignar al contenedor unaclase
        card.classList.add('productos-card')
        //construir unatarjeta
        card.innerHTML = `
       
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${productos.nombre}</h2>
        <p>${productos.descripcion}</p>
         <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
        <button data-id="${producto.id}">Agregar al carrito</button>
        
        `;
        //insertaque el nuevo elemento a la tarjeta
        contenedor.appendChild(card);
    })
}
// llamara la funcion

mostrarProductos();

