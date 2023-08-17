const desktopMenu = document.querySelector(".desktop-menu");
const navmail = document.querySelector(".navbar-email");
const arrow = document.querySelector(".arrow");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".shopping-cart-icon");
const shoppingCartdetail = document.querySelector(".detail-container");

navmail.addEventListener("click", toggleDesktopMenu);
arrow.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", togglemobileMenu);
shoppingCart.addEventListener("click", toggleCartMenu);

function toggleDesktopMenu(){
    var isShoppingCartdetailClosed = shoppingCartdetail.classList.contains("inactive");
    if (!isShoppingCartdetailClosed){
        shoppingCartdetail.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function togglemobileMenu(){
    var isShoppingCartdetailClosed = shoppingCartdetail.classList.contains("inactive");
    if (!isShoppingCartdetailClosed){
        shoppingCartdetail.classList.add("inactive");
    }
     mobileMenu.classList.toggle("inactive");
}

function toggleCartMenu(){
   
   var ismobileMenuClosed = mobileMenu.classList.contains("inactive");
   var isdesktopMenuClosed = desktopMenu.classList.contains("inactive");

   if (!ismobileMenuClosed){
    mobileMenu.classList.add("inactive");
   }
   if (!isdesktopMenuClosed){
    desktopMenu.classList.add("inactive");
   }
   shoppingCartdetail.classList.toggle("inactive");
}