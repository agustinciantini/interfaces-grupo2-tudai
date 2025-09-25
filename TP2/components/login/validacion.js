document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    const inputs = [
        { id: 'usuario', errorId: 'usuario-error', validator: validateUsuario },
        { id: 'edad', errorId: 'edad-error', validator: validateEdad },
        { id: 'correo', errorId: 'correo-error', validator: validateCorreo },
        { id: 'contrasena', errorId: 'contrasena-error', validator: validateContrasena },
        { id: 'repetir-contrasena', errorId: 'repetir-contrasena-error', validator: validateRepetirContrasena }
    ];

    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
        element.previousElementSibling.classList.add('has-error');
    }

    function hideError(element) {
        element.textContent = '';
        element.style.display = 'none';
        element.previousElementSibling.classList.remove('has-error');
    }

    // Funciones de validación individuales
    function validateUsuario() {
        const usuarioInput = document.getElementById('usuario');
        const usuarioError = document.getElementById('usuario-error');
        if (usuarioInput.value.length < 4) {
            showError(usuarioError, 'El nombre de usuario debe tener al menos 4 caracteres.');
            return false;
        } else {
            hideError(usuarioError);
            return true;
        }
    }

    function validateEdad() {
        const edadInput = document.getElementById('edad');
        const edadError = document.getElementById('edad-error');
        const edad = parseInt(edadInput.value);
        if (isNaN(edad) || edad < 13) {
            showError(edadError, 'Debes tener 13 años o más.');
            return false;
        } else {
            hideError(edadError);
            return true;
        }
    }

    function validateCorreo() {
        const correoInput = document.getElementById('correo');
        const correoError = document.getElementById('correo-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correoInput.value)) {
            showError(correoError, 'Por favor, ingresa un correo electrónico válido.');
            return false;
        } else {
            hideError(correoError);
            return true;
        }
    }

    function validateContrasena() {
        const contrasenaInput = document.getElementById('contrasena');
        const contrasenaError = document.getElementById('contrasena-error');
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|:;"'<,>.?/~`]).{8,}$/;
        if (!passwordRegex.test(contrasenaInput.value)) {
            showError(contrasenaError, 'La contraseña debe tener 8 caracteres, 1 mayúscula, 1 número y 1 símbolo.');
            return false;
        } else {
            hideError(contrasenaError);
            return true;
        }
    }

function validateRepetirContrasena() {
    const repetirContrasenaInput = document.getElementById('repetir-contrasena');
    const repetirContrasenaError = document.getElementById('repetir-contrasena-error');
    const contrasenaInput = document.getElementById('contrasena');
    
    // Si los valores no coinciden, muestra el error
    if (repetirContrasenaInput.value !== contrasenaInput.value) {
        showError(repetirContrasenaError, 'Las contraseñas no coinciden.');
        return false;
    } else {
        // Si los valores sí coinciden, oculta el error
        hideError(repetirContrasenaError);
        return true;
    }
}

    // Validar en tiempo real (al salir de un campo)
    inputs.forEach(inputInfo => {
        const inputElement = document.getElementById(inputInfo.id);
        if (inputElement) {
            inputElement.addEventListener('blur', () => {
                inputInfo.validator();
            });
        }
    });

    // Escuchar el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Siempre prevenir el envío por defecto para la validación

        let formIsValid = true;
        inputs.forEach(inputInfo => {
            if (!inputInfo.validator()) {
                formIsValid = false;
            }
        });

        const recaptchaCheckbox = document.getElementById('recaptcha');
        if (!recaptchaCheckbox.checked) {
            alert('Por favor, confirma que no eres un robot.');
            formIsValid = false;
        }

        if (formIsValid) {
            alert('¡Formulario enviado con éxito!');
            // Aquí puedes enviar el formulario a un servidor con AJAX o redirigir
        }
    });
});