import express from "express";
import path from "path";
import ejsLayout from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";
import validationMiddleware from "./src/middlewares/validation.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload.middleware.js";
import UserController from "./src/controllers/user.controller.js";
import session from "express-session";
import auth from "./src/middlewares/auth.middleware.js";
import cookieParser from 'cookie-parser'
import setLastVisit from "./src/middlewares/lastVisit.middleware.js";
const app = express();
const PORT = 8000;
// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
const productController = new ProductController();
const userController = new UserController();
// Middleware for rendering the layout
app.use(ejsLayout);
// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser())
app.use(setLastVisit)
app.use(
  session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.get("/register", userController.getRegister);
app.get("/login", userController.getLogin);
app.post("/register", userController.postRegister);
app.post("/login", userController.postLogin);
app.get('/logout', userController.logout)
app.get("/", auth, productController.getProducts);
app.get("/new", auth, productController.getAddProduct);
app.get("/update-product/:id", auth, productController.getUpdateProductView);
app.post(
  "/",
  auth,
  uploadFile.single("imageUrl"),
  validationMiddleware,
  productController.postAddProduct
);
app.post("/update-product", auth, productController.postUpdateProduct);
app.post("/delete-product/:id", auth, productController.deleteProduct);
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:8000");
});
