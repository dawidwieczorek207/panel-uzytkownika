<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBcaRkvfSgHhcIXuT2itUaLD0GLl318e5c",
    authDomain: "panel-uzytkownika.firebaseapp.com",
    projectId: "panel-uzytkownika",
    storageBucket: "panel-uzytkownika.firebasestorage.app",
    messagingSenderId: "271912365105",
    appId: "1:271912365105:web:559a69c2f59e098a4db910"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  console.log("Firebase działa ✅");



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // --- Przełączanie formularzy ---
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const showRegister = document.getElementById("show-register");
  const showLogin = document.getElementById("show-login");

  showRegister.addEventListener("click", () => {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  });

  showLogin.addEventListener("click", () => {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
  });

  // --- Rejestracja użytkownika ---
  document.getElementById("register-btn").addEventListener("click", () => {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Konto utworzone!");
        console.log("Zarejestrowano:", userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  });

  // --- Logowanie użytkownika ---
  document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Zalogowano pomyślnie!");
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  });
</script>
