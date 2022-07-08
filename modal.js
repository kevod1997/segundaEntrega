import { eliminarProductoCarrito } from "./carritoIndex.js";

const modalContenedor = document.querySelector('.modal-contenedor')
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito')

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

// Detiene la propagación del vento click dentro del contenedor modalCarrito
modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
    // Si el elemento tiene la clase "boton-eliminar" invoco a la funcion que elimina un producto
    if (e.target.classList.contains("boton-eliminar")) {
         swal({
        title: "Esta seguro de eleminar el producto?",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then((result) => {
        if (result) {
        eliminarProductoCarrito(e.target.value);
            // eliminarProductoCarrito();
            // Arriba esta la logica para eliminar un producto
            swal({
                title: "Borrado",
                icon: "success",
                text: "El producto ha sido borrado"
            })
        }
    })
        // eliminarProductoCarrito(e.target.value);
        // swal({
        //     title: "Tu producto ha sido eliminado del carrito",
        //     icon: "warning",
        //     timer:1500
        // })
    }
});