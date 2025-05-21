function toggleSeccion(id) {
    const seccion = document.getElementById(id);
    if (seccion) {
      const visible = seccion.style.display === "block";
      // Ocultar todas las secciones dinámicas
      document.querySelectorAll("#busqueda, #carrito, #login").forEach(s => s.style.display = "none");
      // Mostrar la elegida si estaba oculta
      if (!visible) seccion.style.display = "block";
    }
  }
  
  function mostrarBusqueda() {
    toggleSeccion("busqueda");
  }
  