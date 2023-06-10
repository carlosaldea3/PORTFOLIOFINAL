  function validarFormulario() {
        var nombre = document.getElementById("nombre").value;
        var telefono = document.getElementById("telefono").value;
        var correo = document.getElementById("correo").value;

        // Validar que todos los campos estén completos
        if (nombre === "" || telefono === "" || correo === "") {
            alert("Por favor, completa todos los campos.");
            return false;
        }

        // Validar formato de teléfono (opcional)
        var telefonoRegex = /^[0-9]{9}$/;
        if (!telefono.match(telefonoRegex)) {
            alert("Por favor, introduce un número de teléfono válido de 9 dígitos.");
            return false;
        }

        // Validar formato de correo electrónico (opcional)
        var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correo.match(correoRegex)) {
            alert("Por favor, introduce una dirección de correo electrónico válida.");
            return false;
        }

        // Si todas las validaciones pasan, el formulario es válido
        return true;
    }