const User = require("../models/user");
const Product = require("../models/product");
const CartItem = require("../models/cartitem");
const jwt = require("jsonwebtoken");

module.exports.getCart = async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("received");
  try {
    let user = await User.findOne({ _id: req.user._id }).populate({
      path: "cart",
      populate: {
        path: "product",
      },
    });
    let cart = user.cart;
    return res.json(200, {
      success: true,
      cart: cart,
    });
  } catch (err) {
    return res.json(200, {
      success: false,
      error: `Internal Server Error ${err}`,
    });
  }
};

module.exports.addToCart = async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    let user = await User.findOne({ _id: req.user._id });
    let q = req.query.qty;
    if (q == 0) {
      q = 1;
    }
    let newcartItem = await CartItem.create({
      product: req.query.product,
      qty: q,
    });
    user.cart.push(newcartItem._id);
    user.save();
    // let newUser = await User.findOne({ _id: req.user._id }).populate({
    //   path: "cart",
    //   populate: {
    //     path: "product",
    //   },
    // });
    let item = await CartItem.findOne({ _id: newcartItem._id }).populate(
      "product"
    );
    return res.json(200, {
      success: true,
      item: item,
      // user: newUser,
      // token: jwt.sign(user.toJSON(), "secret", { expiresIn: "1000000" }),
    });
  } catch (err) {
    return res.json(200, {
      success: false,
      error: `Internal Server Error ${err}`,
    });
  }
};

module.exports.removeItem = async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  let id = req.query.id;
  try {
    let item = await CartItem.findOne({ _id: id });
    let user = await User.findOne({ _id: req.user._id });
    user.cart.pull(item._id);
    item.remove();
    return res.json(200, {
      message: "success",
      success: true,
      // user: newUser,
      // token: jwt.sign(user.toJSON(), "secret", { expiresIn: "1000000" }),
    });
  } catch (err) {
    return res.json(201, {
      error: `Server Error ${err}`,
      success: false,
    });
  }
};

module.exports.decreaseItemcount = async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  let id = req.query.id;
  try {
    let item = await Product.findOne({ _id: id });
    item.qty = item.qty - 1;
    if (item.qty < 0) {
      item.qty = 0;
    }
    item.save();
    let newUser = await User.findOne({ _id: req.user._id }).populate({
      path: "cart",
      populate: {
        path: "product",
      },
    });
    return res.json(200, {
      message: "success",
      success: true,
      user: newUser,
    });
  } catch (err) {
    return res.json(201, {
      error: `Server Error ${err}`,
      success: false,
    });
  }
};

module.exports.increaseItemcount = async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  let id = req.query.id;
  try {
    let item = await CartItem.findOne({ _id: id });
    item.qty += 1;
    item.save();
    let newUser = await User.findOne({ _id: req.user._id }).populate({
      path: "cart",
      populate: {
        path: "product",
      },
    });
    return res.json(200, {
      message: "success",
      success: true,
      user: newUser,
    });
  } catch (err) {
    return res.json(201, {
      error: `Server Error ${err}`,
      success: false,
    });
  }
};
