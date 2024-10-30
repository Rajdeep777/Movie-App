import ProductModel from "../models/product.model.js";
class ProductController {
  getProducts(req, res) {
    const products = ProductModel.get()
    res.render('products', {products:products})
  }
  getAddProduct(req, res) {
    return res.render('new-product', {
      errorMessage: null
    })
  }
  postAddProduct(req, res) {
    ProductModel.add(req.body)
    const products = ProductModel.get()
    return res.render('products', {products})
  }
}
export default ProductController;
