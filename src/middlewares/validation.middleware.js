import { body, validationResult } from "express-validator";
const validationMiddleware = async (req, res, next) => {
  //1. Setup rules for validation
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("genre").notEmpty().withMessage("Genre is required"),
    body("year")
      .isInt({ min: 1950, max: new Date().getFullYear() })
      .withMessage("Year must be between 1950 and the current year"),
    body("imdb")
      .isFloat({ min: 1, max: 10 })
      .withMessage("IMDB rating must be between 1 and 10"),
    body("imageUrl").isURL().withMessage("Invalid image URL"),
    body("fullhdbtn")
      .isFloat({ gt: 0 })
      .withMessage("FHD size must be a positive value"),
    body("ultrahdbtn")
      .isFloat({ gt: 0 })
      .withMessage("UHD size must be a positive value"),
    body("fullhd").isURL().withMessage("Invalid Full HD download link"),
    body("ultrahd").isURL().withMessage("Invalid Ultra HD download link"),
  ];
  //2. Run those rules
  await Promise.all(rules.map((rule) => rule.run(req)));
  //3. Check if there are any errors after running the rules
  const validationErrors = validationResult(req);
  //4. If errors, then return the error message
  if (!validationErrors.isEmpty()) {
    return res.render("new-product", {
      errorMessage: validationErrors.array()[0].msg,
    });
  }
  next();
};
export default validationMiddleware;
