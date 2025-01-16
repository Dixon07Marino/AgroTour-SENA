// GUARDAR DATOS //
/* function mostrar() {
    const user = document.getElementById("user").value;
	const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
	const password2 = document.getElementById("pass2").value;
    alert(`Tu informacion es: 
	Usuario: ${user} 
	Correo: ${email}
	Contraseña: ${password}
    Confirmación contraseña: ${password2}
    `);
} */

function togglePasswords() {
    const passwords = document.querySelectorAll('.pass');
    const isPassword = passwords[0].type === 'password';

    passwords.forEach(input => {
        input.type = isPassword ? 'text' : 'password';
    });

    const passwordIcons = document.querySelectorAll('.password-icon');
    passwordIcons.forEach(icon => {
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
}

function samePasswords () {
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;

    if (pass !== pass2) {
        alert("Las contraseñas no coinciden. Verifica que ambas sean las mismas.");
        return false;
    }

    window.location.href = "../../index.html";
    return false;
}

