import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const productPage = new ProductDetails(productId, dataSource);
productPage.init();

//console.log(dataSource.findProductById(productId));