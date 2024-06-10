document.addEventListener("DOMContentLoaded", function () {
  // Função de cadastro
  document.getElementById("submit-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const newUser = document.getElementById("register-email").value;
    const newPassword = document.getElementById("register-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username: newUser, password: newPassword });
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("register-email").value = "";
    document.getElementById("register-password").value = "";
  });

  // Função de login
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("user-email").value;
      const password = document.getElementById("user-password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        alert("Login bem-sucedido!");
        window.location.href = "../index.html";
      } else {
        alert("Usuário ou senha inválidos. Por favor, cadastre-se primeiro.");
      }

      document.getElementById("user-email").value = "";
      document.getElementById("user-password").value = "";
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