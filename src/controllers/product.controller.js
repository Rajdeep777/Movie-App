import path from "path";
import ProductModel from "../models/product.model.js";
class ProductController {
  getProducts(req, res) {
    const products = ProductModel.get()
    console.log(products);
    return res.sendFile(
      path.join(path.resolve(), "src", "views", "index.html")
    );
  }
}
export default ProductController;
