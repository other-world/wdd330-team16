import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
import {loadHeaderFooter} from "./utils.mjs";

const dataSource = new ProductData();
const productId = getParam("product");

const productPage = new ProductDetails(productId, dataSource);
productPage.init();
loadHeaderFooter();

//console.log(dataSource.findProductById(productId));