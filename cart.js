let cartCount = 0;
document.querySelectorAll(".icons span")[1].addEventListener("click", () => {
    cartCount++;
    alert("Producto agregado al carrito. Total: " + cartCount);
});
