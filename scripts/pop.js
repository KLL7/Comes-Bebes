document.addEventListener("DOMContentLoaded", function () {
  const registerBtn = document.getElementById("register-btn");
  const pop = document.getElementById("pop");
  const closeBtn = document.querySelector(".close-btn");

  registerBtn.addEventListener("click", function () {
    pop.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    pop.style.display = "none";
  });
});

