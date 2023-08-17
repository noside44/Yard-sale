const desktopMenu = document.querySelector(".desktop-menu");
const navmail = document.querySelector(".navbar-email");
const arrow = document.querySelector(".arrow");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navmail.addEventListener("click", toggleDesktopMenu);
arrow.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", togglemobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function togglemobileMenu(){
     mobileMenu.classList.toggle("inactive");
}