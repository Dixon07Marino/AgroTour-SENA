// GUARDAR DATOS //

function togglePasswords() {
            // Seleccionar todos los inputs de contraseña
            const passwords = document.querySelectorAll('.pass');
            const isPassword = passwords[0].type === 'password';

            // Cambiar el tipo de los inputs
            passwords.forEach(input => {
                input.type = isPassword ? 'text' : 'password';
            });

            // Cambiar los íconos asociados a las contraseñas
            const passwordIcons = document.querySelectorAll('.password-icon');
            passwordIcons.forEach(icon => {
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
            });
        }

function goHome(event) {
    event.preventDefault();

    window.location.href = "pages/home/index.html";
    }