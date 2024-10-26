import path from "path";
class ProductController {
  getProducts(req, res) {
    return res.sendFile(
      path.join(path.resolve(), "src", "views", "index.html")
    );
  }
}
export default ProductController;
