const productosJSON = [
    {
        id: 1,
        nombre: "Cafe moca",
        precio: 70.00,
        descripcion: "Exquisito café con chocolate y crema",
        imagen: "moca.jpg"
    },
    {
        id: 2,
        nombre: "Té verde",
        precio: 50.00,
        descripcion: "Hoja de té verde natural",
        imagen: "teverde.jpg"
    },
    {
        id: 3,
        nombre: "Smoothie de Frutas",
        precio: 40.00,
        descripcion: "Mezcla de frutas frescas",
        imagen: "smoothie.jpg"
    },
];

// Función principal
function mostrarProductos() {
    const contenedor = document.querySelector('#contenedor-productos');
    
    // limpiar el contenedor por si se vuelve a ejecutar
    contenedor.innerHTML = '';

    // recorrer el arreglo de productos
    productosJSON.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('productos-card');

        // construir el contenido de la tarjeta
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
            <button data-id="${producto.id}">Agregar al carrito</button>
        `;
        contenedor.appendChild(card);
    });
}

// Llamar a la función
mostrarProductos();

