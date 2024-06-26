document.addEventListener("DOMContentLoaded", function () {
  // Função de cadastro
  document
    .getElementById("submit-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const newUser = document.getElementById("register-email").value;
      const newPassword = document.getElementById("register-password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      if (newUser !== "" || newPassword !== "") {
        const userExists = users.some(
          (user) => user.username === newUser && user.password === newPassword
        );

        if (!userExists) {
          users.push({ username: newUser, password: newPassword });
          localStorage.setItem("users", JSON.stringify(users));
        }

        document.getElementById("register-email").value = "";
        document.getElementById("register-password").value = "";
      }
    });

  // Função de login
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("user-email").value;
      const password = document.getElementById("user-password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      if (!username !== " " || !password !== " ") {
        const foundUser = users.find(
          (user) => user.username === username && user.password === password
        );

        if (foundUser) window.location.href = "../index.html";

        document.getElementById("user-email").value = "";
        document.getElementById("user-password").value = "";
      }
    });
});

// Animação para o botão

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("scale");
    setTimeout(() => {
      button.classList.toggle("scale");
    }, 250);
  });
});

// Animação para mudar de login para cadastro e vice-versa

const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");
const blackDiv = document.querySelector(".black-div");
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const inputs = document.querySelectorAll("input");

loginLink.addEventListener("click", () => {
  blackDiv.classList.toggle("hidden-black-div");

  registerForm.style.filter = "opacity(.4)";
  loginForm.style.filter = "opacity(1)";

  inputs.forEach((input) => {
    input.value = "";
  });
});

registerLink.addEventListener("click", () => {
  blackDiv.classList.toggle("hidden-black-div");

  loginForm.style.filter = "opacity(.4)";
  registerForm.style.filter = "opacity(1)";

  inputs.forEach((input) => {
    input.value = "";
  });
});
