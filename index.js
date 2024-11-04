import express from "express";
import path from "path";
import ejsLayout from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";
import validationMiddleware from "./src/middlewares/validation.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload.middleware.js";
import UserController from "./src/controllers/user.controller.js";
const app = express();
const PORT = 8000;
// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
const productController = new ProductController();
const userController = new UserController()
// Middleware for rendering the layout
app.use(ejsLayout);
// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get('/register', userController.getRegister)
app.get('/login', userController.getLogin)
app.get("/", productController.getProducts);
app.get("/new", productController.getAddProduct);
app.get("/update-product/:id", productController.getUpdateProductView);
app.post(
  "/",
  uploadFile.single("imageUrl"),
  validationMiddleware,
  productController.postAddProduct
);
app.post(
  "/update-product",
  productController.postUpdateProduct
);
app.post("/delete-product/:id", productController.deleteProduct);
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:8000");
});
