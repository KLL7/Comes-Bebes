document.addEventListener("DOMContentLoaded", function () {
  const registerBtn = document.getElementById("register-btn");
  const pop = document.getElementById("register");
  const closeBtn = document.querySelector(".close-btn");

// Função para mostrar o Pop-Uo
  registerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    pop.classList.remove("hidden");
  });

// Função para fechar o Pop-Up
  closeBtn.addEventListener("click", function () {
    pop.classList.add("hidden");
  });
});