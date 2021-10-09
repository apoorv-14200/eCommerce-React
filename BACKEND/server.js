import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import data from "./products.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(passport.initialize());

const db = require("./config/mongoose");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", function (req, res) {
  res.send("<h1>Apoorv Jain</h1>");
});

app.get("/api/products", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const prods = await Product.find({
    dbType: "Products",
    type: req.headers.type,
  });
  res.send(prods);
});

app.post("/add-user", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const checkUser = Product.find({ dbType: "Users", email: req.headers.email });
  if (checkUser.length > 0) {
    res.send("ERROR_USER_EXISTS");
  } else {
    const newUser = new Product({
      dbType: "Users",
      email: req.headers.email,
      name: req.headers.name,
      password: req.headers.password,
    });
    newUser.save();

    res.send("USER_SAVED");
  }
  // console.log(req.headers);
  // res.send('Hello');
});

app.get("/api/products/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let tempId = new String();
  for (let i = 14; i < req.url.length; ++i) {
    tempId += req.url[i];
  }
  const id = parseInt(tempId, 10);
  console.log(id);

  Product.find({ id: id }).then((data) => res.send(data));
  // res.send(resToSend);
});

app.post("/cart/products/remove", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  await Product.remove({ id: req.headers.id, dbType: "Cart" });
  const prods = await Product.find({ dbType: "Cart" });
  res.send(prods);
  // res.send('Cart Item Removed');
});

app.get("/cart/products", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const prods = await Product.find({ dbType: "Cart" });
  res.send(prods);
});

app.post("/cart/:id/:quantity", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  let tempId = new String();
  let i = 0;
  for (i = 6; req.url[i] !== "/"; ++i) {
    tempId += req.url[i];
  }

  i++;
  let tempQuantity = new String();
  for (; i < req.url.length; ++i) {
    tempQuantity += req.url[i];
  }

  const prod = await Product.find({ id: tempId, dbType: "Products" });

  const currItem = new Product({
    dbType: "Cart",
    id: tempId,
    quantity: tempQuantity,
    title: prod[0].title,
    price: prod[0].price,
    img: prod[0].img,
  });
  await currItem.save();
  // console.log(tempId + ' ' + tempQuantity);
  // console.log(prod[0]);
  res.send("Successfully saved to DB");
});

app.post("/add-product", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const newProduct = new Product({
    dbType: "Products",
    id: req.headers.id,
    title: req.headers.title,
    price: req.headers.price,
    img: req.headers.img,
    type: req.headers.type,
  });
  await newProduct.save();
  res.send(req.headers);
});

app.listen(5000, () => console.log("Server started"));
