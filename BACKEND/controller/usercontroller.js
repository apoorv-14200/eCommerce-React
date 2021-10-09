const Product = require("../models/product");
const User = require("../models/user");
const CartItem = require("../models/cartitem");
const jwt = require("jsonwebtoken");

module.exports.createSession = async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    res.header("Access-Control-Allow-Origin", "*");
    let user = await User.findOne({ email: req.body.email }).populate({
      path: "cart",
      populate: {
        path: "product",
      },
    });
    if (!user || user.password != req.body.password) {
      return res.json(200, {
        message: "Unauthorized User",
        error: "Invalid Username or Password",
        success: false,
      });
    } else {
      return res.json(200, {
        message: "Successfully Signed in Here is your token",
        success: true,
        error: "",
        data: {
          token: jwt.sign(user.toJSON(), "secret", { expiresIn: "1000000" }),
          user: {
            name: user.name,
            _id: user._id,
            email: user.email,
            cart: user.cart,
          },
        },
      });
    }
    //req.flash("success","Logged in successfully!");
    //return res.redirect("/");
  } catch (err) {
    return res.json(500, {
      message: "Server error",
      success: false,
      error: "Server Error",
    });
  }
};

module.exports.signup = async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    res.header("Access-Control-Allow-Origin", "*");
    let user = await User.findOne({ email: req.body.email }).populate({
      path: "cart",
      populate: {
        path: "product",
      },
    });
    if (user) {
      return res.json(200, {
        message:
          "You have already registered with this email try doing singin instead",
        success: false,
        error:
          "You are already registered with this email try doing singin instead",
      });
    } else if (req.body.password != req.body.confirmpassword) {
      return res.json(200, {
        message: "Password does'not matches with confirm password",
        success: false,
        error: "Password does'not matches with confirm password",
      });
    } else {
      let user = await User.create(req.body);
      return res.json(200, {
        message:
          "Successfully registered and signed in to your account.Here is your token",
        success: true,
        data: {
          token: jwt.sign(user.toJSON(), "secret", { expiresIn: "1000000" }),
          user: {
            name: user.name,
            _id: user._id,
            email: user.email,
            cart: [],
          },
        },
      });
    }
  } catch (err) {
    // console.log("Error in creating user", err);
    return res.json(401, {
      message: "Error in crearting user pls try again",
      error: "Server error",
    });
  }
};
