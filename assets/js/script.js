const BTN = document.querySelector(".menu-burger");
const ALL_LINK = document.querySelectorAll(".menu-list .menu-link");
const MENU = document.querySelector(".menu-list");

function viewMenu() {
  MENU.classList.toggle("action");
}

function closeMenu() {
  MENU.classList.remove("action");
}

BTN.addEventListener("click", viewMenu);
ALL_LINK.forEach((el) => el.addEventListener("click", closeMenu));
