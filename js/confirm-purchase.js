const form = document.getElementById("form");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    button.classList.toggle("scale");
    setTimeout(() => {
      button.classList.toggle("scale");
    }, 250);
  });
});