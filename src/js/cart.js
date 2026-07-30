import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

function renderCartContents() {
  try {
    const cartItems = getLocalStorage("so-cart");
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    let productList = document.querySelector(".product-list");
    productList.innerHTML = htmlItems.join("");
  }
  catch (e) {
    // statements to handle any exceptions
    //console.log(e); // pass exception object to error handler
    document.querySelector(".products h2").innerHTML = "Your Shopping Cart Is Empty";
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.qty}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function calculateTotal(item){
  return item.FinalPrice * item.qty;
}

renderCartContents();
loadHeaderFooter();
