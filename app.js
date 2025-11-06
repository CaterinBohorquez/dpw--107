const productosJSON = [
    {
        id: 1,
        nombre: "Café Moca",
        precio: 70.00,
        descripcion: "Exquisito café con chocolate y crema",
        imagen: "./img/moca.jpg"
    },
    {
        id: 2,
        nombre: "Té Verde",
        precio: 50.00,
        descripcion: "Hoja de té verde",
        imagen: "./img/teverde.jpg"
    },
    {
        id: 3,
        nombre: "Smoothie de Frutas",
        precio: 40.00,
        descripcion: "Mezcla de frutas",
        imagen: "./img/smoothie.jpg"
    }
];

// Función principal
function mostrarProductos() {
    const contenedor = document.querySelector('#contenedor-productos');
    
    productosJSON.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card');
        
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <button data-id="${producto.id}">Agregar al carrito</button>
        `;
        
        contenedor.appendChild(card);
    });
}

// Llamar la función
mostrarProductos();
