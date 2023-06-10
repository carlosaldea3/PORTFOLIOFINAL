const proyectosContainer = document.getElementById("proyectos");

fetch("./proyectos.json")
  .then(response => response.json())
  .then(data => {
    data.proyectos.forEach(proyecto => {
      const proyectoDiv = document.createElement("div");
      const titulo = document.createElement("h2");
      const descripcion = document.createElement("p");
      const enlace = document.createElement("a");
      const imagen = document.createElement("img");

      titulo.textContent = proyecto.nombre;
      descripcion.textContent = proyecto.descripcion;
      enlace.href = proyecto.url;
      imagen.src = proyecto.imagen;
      imagen.alt = proyecto.nombre;

      proyectoDiv.appendChild(titulo);
      proyectoDiv.appendChild(descripcion);
      enlace.appendChild(imagen);
      proyectoDiv.appendChild(enlace);

      proyectosContainer.appendChild(proyectoDiv);
    });
  })
  .catch(error => {
    console.error("Error al cargar el archivo JSON:", error);
  });
