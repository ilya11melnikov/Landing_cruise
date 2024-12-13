const menuButton = document.querySelector(".menu_button");
const menuCloseButton = document.querySelector(".nav_close");
const menu = document.querySelector(".nav");
const body = document.querySelector(".body");

menuButton.addEventListener("click", function () {
  menu.classList.add("active");
  body.classList.add("body--overflow_hidden");
});

menuCloseButton.addEventListener("click", function () {
  menu.classList.remove("active");
  body.classList.remove("body--overflow_hidden");
});
