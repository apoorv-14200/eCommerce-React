const express = require("express");
const router = express.Router();
const ProductController = require("../../controller/productscontroller");
const passport = require("passport");

router.get("/:type", ProductController.getProducts);

router.post(
  "/addProduct",
  passport.authenticate("jwt", { session: false }),
  ProductController.addProduct
);

module.exports = router;
