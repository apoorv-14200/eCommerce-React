const express = require("express");
const router = express.Router();
const CartController = require("../../controller/cartcontroller");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  CartController.getCart
);
router.get(
  "/add",
  passport.authenticate("jwt", { session: false }),
  CartController.addToCart
);
router.get(
  "/remove",
  passport.authenticate("jwt", { session: false }),
  CartController.removeItem
);
router.get(
  "/increaseItem",
  passport.authenticate("jwt", { session: false }),
  CartController.increaseItemcount
);
router.get(
  "/decreaseItem",
  passport.authenticate("jwt", { session: false }),
  CartController.decreaseItemcount
);

module.exports = router;
