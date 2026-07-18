import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init(){
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails();
        // add listener to Add to Cart button
        document.getElementById("addToCart").addEventListener("click", this.addToCartHandler.bind(this));
    }

    // add to cart button event handler
    async addToCartHandler(e) {
        this.product = await this.dataSource.findProductById(e.target.dataset.id);
        this.addProductToCart(this.product);
    }

    addProductToCart(product) {
        let shoppingCart = getLocalStorage("so-cart");
        if (shoppingCart === null) { 
            shoppingCart = [];
        }
        shoppingCart.push(product);
        setLocalStorage("so-cart", shoppingCart);

        const cartIcon = document.querySelector(".cart svg");
        cartIcon.classList.add("wiggle");
        cartIcon.addEventListener("animationend", () => cartIcon.classList.remove("wiggle"), { once: true });
    }

    renderProductDetails(){
        //find product-detail class in index.html
        document.querySelector(".product-detail").innerHTML = `
        <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Image}"
          alt="${this.product.NameWithoutBrand}"
        />
        <p class="product-card__price">&#36;${this.product.ListPrice}</p>
        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">
          ${this.product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${this.productId}">Add to Cart</button>
        </div>
        `
    }
}