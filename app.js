// Datos de los productos
const productosJSON = [
    {
        id: 1,
        nombre: "Café Moca",
        precio: 70.00,
        descripcion: "Exquisito café con chocolate y crema.",
        imagen: "moca.jpg"
    },
    {
        id: 2,
        nombre: "Té Verde",
        precio: 50.00,
        descripcion: "Hojas de té verde seleccionadas.",
        imagen: "teverde.jpg"
    },
    {
        id: 3,
        nombre: "Smoothie de Frutas",
        precio: 40.00,
        descripcion: "Mezcla refrescante de frutas naturales.",
        imagen: "smoothie.jpg"
    }
];

// Función principal para mostrar productos
function mostrarProductos() {
    const contenedor = document.querySelector('#contenedor-productos');

    // Recorrer cada producto del JSON
    productosJSON.forEach(producto => {
        // Crear un contenedor div para cada tarjeta
        const card = document.createElement('div');
        card.classList.add('producto-card'); // clase CSS para diseño

        // Construir la tarjeta del producto
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
            <button data-id="${producto.id}">Agregar al carrito</button>
        `;

        // Insertar la tarjeta en el contenedor
        contenedor.appendChild(card);
    });
}

// Llamar a la función para mostrar los productos
mostrarProductos();
