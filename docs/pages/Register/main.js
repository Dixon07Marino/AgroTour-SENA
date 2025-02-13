
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

document.addEventListener("DOMContentLoaded", function () {
    const passwordInputs = [
        document.getElementById("registerPassword"),
        document.getElementById("registerPassword2")
    ];
    const toggleIcons = [
        document.getElementById("toggleIcon1"),
        document.getElementById("toggleIcon2")
    ];

    toggleIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const isPassword = passwordInputs[0].type === "password";

            passwordInputs.forEach(input => {
                input.type = isPassword ? "text" : "password";
            });

            toggleIcons.forEach(icon => {
                icon.classList.toggle("fa-eye");
                icon.classList.toggle("fa-eye-slash");
            });
        });
    });
});

