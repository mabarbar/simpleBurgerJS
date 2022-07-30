const burgerBtn = document.querySelector(".burger");
const bars = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-times");
const nav = document.querySelector("nav ul");

const burgerInteract = () => {
  nav.classList.toggle("active")
  burgerBtn.classList.toggle("active")
  bars.classList.toggle("hide");
  cross.classList.toggle("hide");
};

burgerBtn.addEventListener("click", burgerInteract);
