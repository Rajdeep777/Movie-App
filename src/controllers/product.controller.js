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
    const { name, year, imdb, genre, fullhd, ultrahd, fullhdbtn, ultrahdbtn } = req.body
    const imageUrl = 'assets/' + req.file.filename
    ProductModel.add(name, year, imdb, genre, imageUrl, fullhd, ultrahd, fullhdbtn, ultrahdbtn)
    const products = ProductModel.get()
    return res.render('products', {products})
  }
  getUpdateProductView(req, res) {
    //1. If product exists then return view
    const id = req.params.id
    const productFound = ProductModel.getById(id)
    if (productFound) {
      res.render('update-product', {
        product: productFound,
        errorMessage: null
      })
    }
    //2. else return errors
    else {
      res.status(401).send('Product not found')
    }
  }
  postUpdateProduct(req, res) {
    ProductModel.update(req.body)
    const products = ProductModel.get()
    return res.render('products', {products})
  }
  deleteProduct(req, res) {
    const id = req.params.id
    const productFound = ProductModel.getById(id)
    if (!productFound) {
      return res.status(401).send('Product not found')
    }
    ProductModel.delete(id)
    const products = ProductModel.get()
    res.render('products', {products})
  }
}
export default ProductController;
