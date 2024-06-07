document.getElementById("submit-btn").addEventListener("click", function () {
  var newUser = document.getElementById("register-email").value;
  var newPassword = document.getElementById("register-password").value;

  var users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ username: newUser, password: newPassword });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Cadastro realizado com sucesso!");
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login-btn")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var username = document.getElementById("user-email").value;
      var password = document.getElementById("user-password").value;

      var users = JSON.parse(localStorage.getItem("users")) || [];

      var foundUser = users.find(function (user) {
        return user.username === username && user.password === password;
      });

      if (foundUser) {
        alert("Login bem-sucedido!");
        window.location.href = "../index.html";
      } else {
        alert("Usuário ou senha inválidos. Por favor, cadastre-se primeiro.");
      }
    });
});
