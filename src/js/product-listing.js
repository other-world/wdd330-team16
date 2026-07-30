import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import {getParam, loadHeaderFooter} from "./utils.mjs";

const category = getParam("category");
const dataSource = new ProductData();
const listElement = document.querySelector(".product-list");
const myList = new ProductList(category, dataSource, listElement);
myList.init();
//const productList = new ProductList("tents", dataSource, document.querySelector(".product-list"));
//productList.init();
loadHeaderFooter();

// Show category for each Product List Page.

let topProducts = document.querySelector(".products h2");
let uppercaseCategory = category.charAt(0).toUpperCase() + category.slice(1);
topProducts.textContent = `Top Products: ${uppercaseCategory}`;