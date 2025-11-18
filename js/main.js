// js/main.js - Versión 100% funcional y limpia

let qty = 1;
let precioActual = 0;
let nombreActual = "";
let imagenActual = "";

function openModal(nombre, precio, imagen) {
  nombreActual = nombre;
  precioActual = precio;
  imagenActual = imagen;
  qty = 1;

  document.getElementById("modalTitulo").textContent = nombre;
  document.getElementById("modalNombre").textContent = nombre;
  document.getElementById("modalImagen").src = imagen;
  document.getElementById("modalPrecio").textContent = precio.toFixed(2);
  document.getElementById("modalQty").textContent = qty;
  document.getElementById("modalTotal").textContent = precio.toFixed(2);

  new bootstrap.Modal(document.getElementById('modalCarrito')).show();
}

function changeQty(delta) {
  qty = Math.max(1, qty + delta);
  document.getElementById("modalQty").textContent = qty;
  document.getElementById("modalTotal").textContent = (qty * precioActual).toFixed(2);
}

function addToCartAndRedirect() {
  // Actualizar contador del carrito
  let contador = parseInt(document.querySelector(".cart-count").textContent) || 0;
  contador += qty;
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = contador);

  // Mensaje y redirección
  alert(`¡${qty} × ${nombreActual} añadidos al carrito!`);
  bootstrap.Modal.getInstance(document.getElementById('modalCarrito')).hide();
  window.location.href = "html/productos.html";  // Cambia aquí si quieres otra página
}
