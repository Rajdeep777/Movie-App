import express from 'express'
import path from 'path'
import ejsLayout from 'express-ejs-layouts'
import ProductController from './src/controllers/product.controller.js'
import validateRequest from './src/middlewares/validation.middleware.js'
const app = express()
const PORT = 8000
// setup view engine
app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src', 'views'))
const productController = new ProductController()
// Middleware for rendering the layout
app.use(ejsLayout)
// Middleware for parsing form data
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))
app.get('/', productController.getProducts)
app.get('/new', productController.getAddProduct)
app.post('/', validateRequest, productController.postAddProduct)
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:8000');
})