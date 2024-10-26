import express from 'express'
import path from 'path'
import ProductController from './src/controllers/product.controller.js'
const app = express()
const PORT = 8000
const productController = new ProductController()
app.use(express.static('public'))
app.get('/', productController.getProducts)
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:8000');
})