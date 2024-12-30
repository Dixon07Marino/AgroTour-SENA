// GUARDAR DATOS //
function mostrar() {
    const user = document.getElementById("user").value;
	const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
	const password2 = document.getElementById("pass2").value;
    alert(`Tu informacion es: 
	Usuario: ${user} 
	Correo: ${email}
	Contraseña: ${password}`);
}

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