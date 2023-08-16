const desktopMenu = document.querySelector(".desktop-menu");
const navmail = document.querySelector(".navbar-email");
const arrow = document.querySelector(".arrow")

navmail.addEventListener("click", toggleDesktopMenu);
arrow.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}