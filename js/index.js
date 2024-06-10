const navLinks = document.querySelectorAll(".progess-section");
const sections = document.querySelectorAll(".menu-section");

// animação da barra de navegação com o scroll

const navAnimation = () => {
  let activeIndex = 0;
  for (let i = 0; i < sections.length; i++) {
    if (window.scrollY + 400 < sections[i].offsetTop) {
      break;
    }
    activeIndex = i;
  }

  navLinks.forEach((link, index) => {
    link.classList.toggle("active", index === activeIndex);
  });
};

window.addEventListener("scroll", navAnimation);

// Scroll suave ao clicar na barra de navegação

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const sectionId = event.target.getAttribute("href");
    const section = document.querySelector(sectionId);
    const scrollOffset = 100;

    window.scrollTo({
      top: section.offsetTop - scrollOffset,
      behavior: "smooth",
    });
  });
});

const toggleButton = document.getElementById("toggle-button");
const cart = document.getElementById("cart");
const body = document.querySelector("body");

toggleButton.addEventListener("click", () => {
  cart.classList.toggle("hide");
  cart.classList.toggle("appear");

  if (cart.classList.contains("hide")) {
    body.style.overflowX = "hidden";
  } else {
    setTimeout(() => {
      body.style.overflowX = "auto";
    }, 250);
  }
});
