const showFormBtn = document.querySelector(".cart");
const showFormMobile = document.querySelector(".cart-mobile");
const overlay = document.getElementById("overlay");
const form = document.getElementById("myform");

const burgerMenu = document.querySelector(".burger-menu");
const menuList = document.querySelector(".menu-list");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("show-menu");
  menuList.classList.toggle("show-menu");
});
showFormMobile.addEventListener("click", () => {
  overlay.classList.add("fadeIn");
  burgerMenu.classList.toggle("show-menu");
  menuList.classList.toggle("show-menu");
});

showFormBtn.addEventListener("click", () => {
  overlay.classList.add("fadeIn");
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.remove("fadeIn");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.reset();
  overlay.classList.remove("fadeIn");
});
