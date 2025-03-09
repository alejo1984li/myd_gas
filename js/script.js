// Array para almacenar los productos en el carrito
let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito();
});

function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let listaCarrito = document.getElementById("lista-carrito");
    let total = 0;

    listaCarrito.innerHTML = "";

    carrito.forEach((producto, index) => {
        let item = document.createElement("li");
        item.innerHTML = `${producto.nombre} - $${producto.precio.toLocaleString()} COP 
            <button onclick="eliminarDelCarrito(${index})">❌</button>`;
        listaCarrito.appendChild(item);
        total += producto.precio;
    });

    document.getElementById("total").textContent = total.toLocaleString();
    document.getElementById("cantidad-carrito").textContent = carrito.length;
}

function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({ nombre, precio });

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();

    mostrarMensaje(`${nombre} ha sido agregado al carrito 🛒`);
}


    // Mostrar total y cantidad de productos
    totalElemento.textContent = total.toLocaleString();
    cantidadCarrito.textContent = carrito.length;

    // Mostrar el carrito si tiene productos
    document.getElementById("carrito").style.display = carrito.length > 0 ? "block" : "none";

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para vaciar todo el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Función para finalizar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    alert("¡Gracias por tu compra! 🎉");
    vaciarCarrito();
}

// Evento para abrir el carrito al hacer clic en el botón
document.getElementById("ver-carrito").addEventListener("click", () => {
    let carritoElemento = document.getElementById("carrito");
    carritoElemento.style.display = carritoElemento.style.display === "none" ? "block" : "none";
});

function agregarAlCarrito(nombre, precio) {
    // Obtener el carrito actual o inicializarlo vacío
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Agregar el nuevo producto al carrito
    carrito.push({ nombre, precio });

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar el contador de productos en el carrito
    document.getElementById("cantidad-carrito").textContent = carrito.length;

    // Mostrar mensaje de confirmación
    mostrarMensaje(`${nombre} ha sido agregado al carrito 🛒`);
}

function mostrarMensaje(mensaje) {
    let mensajeDiv = document.createElement("div");
    mensajeDiv.className = "mensaje-carrito";
    mensajeDiv.textContent = mensaje;

    document.body.appendChild(mensajeDiv);

    // Hacer que el mensaje desaparezca después de 3 segundos
    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1); // Eliminar el producto según su posición en el array

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

document.getElementById("form-contacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    document.getElementById("mensaje-enviado").style.display = "block"; // Muestra el mensaje
    setTimeout(() => {
        document.getElementById("mensaje-enviado").style.display = "none";
    }, 3000); // Ocultar después de 3 segundos
});

const imagenes = document.querySelectorAll(".imagen-galeria");
const lightbox = document.getElementById("lightbox");
const imagenAmpliada = document.getElementById("imagen-ampliada");
const cerrarLightbox = document.getElementById("cerrar-lightbox");

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        imagenAmpliada.src = img.src;
    });
});

cerrarLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
