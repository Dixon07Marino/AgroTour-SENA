import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Configuración de Firebase (Ojo con ésto, se puede mover a variable de entorno)
const firebaseConfig = {
    apiKey: "AIzaSyCb5BkUIu0utLMMoa99rjk8abZ5UKcBOfI",
    authDomain: "agrotour-sena-7d5d6.firebaseapp.com",
    projectId: "agrotour-sena-7d5d6",
    storageBucket: "agrotour-sena-7d5d6.firebasestorage.app",
    messagingSenderId: "307456328980",
    appId: "1:307456328980:web:a4b4a2a46f2f9237abae01"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Inicio de Sesión del usuario
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const errorMessage = document.getElementById("login-error-message");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Inicio de sesión exitoso: " + userCredential.user.email);
        window.location.replace("./pages/home/index.html");
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});

// Registro de usuario
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
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Guardar datos en Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            createdAt: new Date()
        });

        alert("Registro exitoso: " + name);
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});

// Escuchar cambios en la autenticación
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Usuario activo:", user.email);
    } else {
        console.log("No hay usuario autenticado.");
    }
});
