export default class ProductData {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    init(){

    }

    function addProductToCart(product) {
        let shoppingCart = getLocalStorage("so-cart");
        if (shoppingCart === "null") {
            shoppingCart = [];
        }
        shoppingCart.push(product);
        setLocalStorage("so-cart", shoppingCart);
    }

    function renderProductDetails(){
        
    }
}