import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

function renderCartContents() {
  try {
    const cartItems = getLocalStorage("so-cart");
    // Check cart and only render the total if there are elements in so-cart array. Otherwise, hide the total.
    document.querySelector(".cart-footer").classList.toggle("hidden", cartItems.length === 0);

    // Build the card for each element in so-cart
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));

    // Work out the total
    const totalArray = cartItems.map((item) => calculateTotal(item));
    let total = 0;
    totalArray.forEach(price => {
      total += price;
    });
    //console.log(total);

    // Put it all together
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
    document.querySelector(".cart-total").innerHTML = `Total: $${total}`;
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
