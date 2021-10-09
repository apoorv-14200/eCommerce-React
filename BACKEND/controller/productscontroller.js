const Product = require("../models/product");
const User = require("../models/user");

module.exports.getProducts = async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const type = req.params.type;
  try {
    let matchedProducts = await Product.find({ type: type }).populate(
      "user",
      "name email _id"
    );
    return res.json(200, {
      success: true,
      message: `Successfully fetched products for type=${type}`,
      products: matchedProducts,
    });
  } catch (err) {
    return res.json(200, {
      success: false,
      error: `Internal Server Error ${err}`,
    });
  }
};

module.exports.addProduct = async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);
  try {
    let user = await User.findOne({ user: req.body.user });
    if (!user) {
      res.json(200, {
        success: false,
        error: "Unauthorized User",
      });
    }
    let product = await Product.create(req.body);

    return res.json(200, {
      success: true,
      product: product,
      message: `Successfully added product`,
    });
  } catch (err) {
    return res.json(200, {
      success: false,
      error: `Internal Server Error ${err}`,
    });
  }
};
