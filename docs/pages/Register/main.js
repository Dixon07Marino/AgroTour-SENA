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

//Funcionalidad de registro mediante metodo POST
document.getElementById("registro-form").addEventListener("submit", async (e) => {
    e.preventDefault();  // Evita que el formulario se envíe normalmente
    console.log(e.target.children.user.value);  // Verifica los valores que se están tomando del formulario

    const res = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: e.target.children.user.value,
            email: e.target.children.email.value,
            password: e.target.children.password.value
        })
    });

    const data = await res.json();  // Lee la respuesta como JSON
    console.log(data);  // Verifica la respuesta del servidor

    if (res.ok) {
        alert('Registro exitoso');
        window.location.href = "/inicio";  // Redirige al usuario a otra página después del registro
    } else {
        alert('Error: ' + data.error);  // Muestra el error si algo salió mal
    }
});


