import {loadHeaderFooter, getLocalStorage} from "./utils.mjs";
import { itemsTotal } from "./OrderTotal.mjs";

const tax = 0.06;
let shipping = 10; //assume at least one item in cart or we should not be calling this page

function renderOrderSummary() {
    try{
        const cartItems = getLocalStorage("so-cart");
        const total = itemsTotal(cartItems);
        const salesTax = total * tax;
        const totalArrayItems = cartItems.map((item) => calculateCartItems(item));
        let items = 0;
        totalArrayItems.forEach(quantity => {
            items += quantity;
        });
        shipping += (items - 1) * 2;
        const orderTotal = total + salesTax + shipping;
        //console.log(`$${shipping.toFixed(2)}`);
        document.querySelector(".order-summary").innerHTML = `
        <p class="subtotal">SubTotal: &#36;${total.toFixed(2)}</p>
        <p class="sales-tax">Sales Tax: &#36;${salesTax.toFixed(2)}</p>
        <p class="shipping">Shipping: &#36;${shipping.toFixed(2)}</p>
        <p class=order-total>Total: &#36;${orderTotal.toFixed(2)}</p>
        `;
    }
    catch (err){
        console.log(err);
    }
}

function calculateCartItems(item){
    return 1 * item.qty;
}

renderOrderSummary();
loadHeaderFooter();