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
// Manejo del formulario de registro
const API_URL = 'https://agrotur-back.vercel.app/api/auth/';

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const password2 = document.getElementById("registerPassword2").value;
    const errorMessage = document.getElementById("register-error-message");

    if (password !== password2) {
        errorMessage.textContent = "Las contraseñas no coinciden.";
        return;
    }

    try {
        const response = await fetch(`${API_URL}register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();
        alert("Registro exitoso del usuario ", name);
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});


