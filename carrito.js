// ================================
// 🧠 CARRITO DE CURSOS IA DOCENTES
// ================================

// Selección de elementos del DOM
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

let articulosCarrito = [];

// Inicializar eventos
document.addEventListener("DOMContentLoaded", cargarEventosListeners);

// ================================
// EVENTOS PRINCIPALES
// ================================
function cargarEventosListeners() {
  // Agregar curso al carrito
  listaCursos.addEventListener("click", agregarCurso);

  // Eliminar curso del carrito
  carrito.addEventListener("click", eliminarCurso);

  // Vaciar carrito completo
  vaciarCarrito.addEventListener("click", vaciarCarritoCursos);
}

// ================================
// AGREGAR CURSO
// ================================
function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.closest(".card");
    leerDatosCurso(cursoSeleccionado);
  }
}

// ================================
// LEER DATOS DEL CURSO
// ================================
function leerDatosCurso(cursoSeleccionado) {
  const infoCurso = {
    imagen: cursoSeleccionado.querySelector("img").src,
    titulo: cursoSeleccionado.querySelector("h4").textContent,
    precio: cursoSeleccionado.querySelector(".precio span").textContent,
    id: cursoSeleccionado.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  // Buscar si el curso ya existe
  const cursoExistente = articulosCarrito.find(curso => curso.id === infoCurso.id);

  if (cursoExistente) {
    // Aumentar cantidad si ya existe
    cursoExistente.cantidad++;
  } else {
    // Agregar nuevo curso al carrito
    articulosCarrito.push(infoCurso);
  }

  carritoHTML();
  mostrarMensaje(`✅ "${infoCurso.titulo}" agregado al carrito`);
}

// ================================
// ELIMINAR CURSO
// ================================
function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

    carritoHTML();
    mostrarMensaje("🗑️ Curso eliminado del carrito");
  }
}

// ================================
// VACIAR CARRITO
// ================================
function vaciarCarritoCursos(e) {
  e.preventDefault();
  articulosCarrito = [];
  limpiarHTML();
  mostrarMensaje("🧹 Carrito vaciado correctamente");
}

// ================================
// ACTUALIZAR HTML DEL CARRITO
// ================================
function carritoHTML() {
  limpiarHTML();

  articulosCarrito.forEach(({ imagen, titulo, precio, cantidad, id }) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${imagen}" width="80" alt="curso"></td>
      <td>${titulo}</td>
      <td>$${precio}</td>
      <td>${cantidad}</td>
      <td><a href="#" class="borrar-curso" data-id="${id}">❌</a></td>
    `;
    contenedorCarrito.appendChild(row);
  });
}

// ================================
// LIMPIAR HTML
// ================================
function limpiarHTML() {
  contenedorCarrito.innerHTML = "";
}

// ================================
// MOSTRAR MENSAJES DE USUARIO
// ================================
function mostrarMensaje(mensaje) {
  const alerta = document.createElement("div");
  alerta.textContent = mensaje;
  alerta.style.backgroundColor = "#004aad";
  alerta.style.color = "#fff";
  alerta.style.padding = "10px";
  alerta.style.borderRadius = "5px";
  alerta.style.marginTop = "10px";
  alerta.style.textAlign = "center";
  alerta.style.fontSize = "0.9em";
  alerta.style.transition = "opacity 0.3s ease";

  carrito.parentElement.insertBefore(alerta, carrito);

  // Eliminar mensaje después de 2 segundos
  setTimeout(() => {
    alerta.style.opacity = "0";
    setTimeout(() => alerta.remove(), 300);
  }, 2000);
}
