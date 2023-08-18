const desktopMenu = document.querySelector(".desktop-menu");
const navmail = document.querySelector(".navbar-email");
const arrow = document.querySelector(".arrow");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".shopping-cart-icon");
const shoppingCartdetail = document.querySelector(".detail-container");
const productContainer = document.querySelector(".product-container")
const mainSection = document.querySelector(".main-section");
const detailContainer = document.querySelector(".detail_container");
const closeIcon = document.querySelector(".close-icon");

navmail.addEventListener("click", toggleDesktopMenu);
arrow.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", togglemobileMenu);
shoppingCart.addEventListener("click", toggleCartMenu);
closeIcon.addEventListener("click", closeDetailContainer);


function toggleDesktopMenu(){
    var isShoppingCartdetailClosed = shoppingCartdetail.classList.contains("inactive");
    var isDetailContainerClosed = detailContainer.classList.contains("inactive");
    if (!isShoppingCartdetailClosed){
        shoppingCartdetail.classList.add("inactive");
    }
    if (!isDetailContainerClosed){
        detailContainer.classList.add("inactive");
       }
    desktopMenu.classList.toggle("inactive");
}

function togglemobileMenu(){
    var isShoppingCartdetailClosed = shoppingCartdetail.classList.contains("inactive");
    var isDetailContainerClosed = detailContainer.classList.contains("inactive");
    if (!isShoppingCartdetailClosed){
        shoppingCartdetail.classList.add("inactive");
    }
    if (!isDetailContainerClosed){
        detailContainer.classList.add("inactive");
    }
     mobileMenu.classList.toggle("inactive");
}

function toggleCartMenu(){
   
   var ismobileMenuClosed = mobileMenu.classList.contains("inactive");
   var isdesktopMenuClosed = desktopMenu.classList.contains("inactive");
   var isDetailContainerClosed = detailContainer.classList.contains("inactive");

   if (!ismobileMenuClosed){
    mobileMenu.classList.add("inactive");
   }
   if (!isdesktopMenuClosed){
    desktopMenu.classList.add("inactive");
   }
   if (!isDetailContainerClosed){
    detailContainer.classList.add("inactive");
   }
   shoppingCartdetail.classList.toggle("inactive");
  
}

function closeDetailContainer(){
    detailContainer.classList.add("inactive");
}


const productList = [];
    productList.push({
    name: "Bike",
    price: "$120,00",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });
    productList.push({
        name: "Helmet",
        price: "$80,00",
        image: "https://images.pexels.com/photos/134069/pexels-photo-134069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        });
     productList.push({
        name: "gloves",
        price: "$50,00",
        image: "https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        });
     productList.push({
    name: "Bike",
    price: "$120,00",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });
    productList.push({
        name: "Helmet",
        price: "$80,00",
        image: "https://images.pexels.com/photos/134069/pexels-photo-134069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        });
     productList.push({
        name: "gloves",
        price: "$50,00",
        image: "https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        });
     productList.push({
    name: "Bike",
    price: "$120,00",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });
    productList.push({
        name: "Helmet",
        price: "$80,00",
        image: "https://images.pexels.com/photos/134069/pexels-photo-134069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        });
     productList.push({
        name: "gloves",
        price: "$50,00",
        image: "https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        });

/* 
                <div class="product-card">
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="card 1">
                    <div class="product-info">
                         <div>
                            <p>$120,00</p>
                            <p>Bike</p>
                         </div> 
                        <figure><img src="./icons/bt_add_to_cart.svg" alt="add car logo"></figure>
                    </div>
                </div> */

for (product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card")

    const img = document.createElement("img")
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info")

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;
   
    const productFigure = document.createElement("figure");
    
    const cartImg = document.createElement("img");
    cartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productFigure.appendChild(cartImg);

    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    productContainer.appendChild(productCard);


img.addEventListener("click", addAside);

function addAside(){
    detailContainer.classList.remove("inactive");
    var isDetailContainerClosed = detailContainer.classList.contains("inactive");

    if (!isDetailContainerClosed){
        shoppingCartdetail.classList.add("inactive");
    }
    if (!isDetailContainerClosed){
        desktopMenu.classList.add("inactive");
    }
    
}

}