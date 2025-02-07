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

const API_URL = 'https://agrotur-back.vercel.app/api/auth/';

// Manejo del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const errorMessage = document.getElementById("login-error-message");

    try {
        const response = await fetch(`${API_URL}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();
        alert("Inicio de sesión exitoso");
        window.location.replace("../docs/pages/home/index.html");
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});