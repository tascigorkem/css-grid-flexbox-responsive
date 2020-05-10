const menuIconBtn = document.querySelector(".menu-icon");
const sidenav = document.querySelector(".sidenav");
const sidenavCloseBtn = document.querySelector(".sidenav__close-icon");

menuIconBtn.addEventListener("click", () => {
  sidenav.classList.toggle("active");
});

sidenavCloseBtn.addEventListener("click", () => {
  sidenav.classList.toggle("active");
});
