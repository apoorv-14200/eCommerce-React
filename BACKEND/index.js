const bodyParser = require("body-parser");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const passportjwt = require("./config/passport-jwt-strategy");
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
app.use("/api", require("./routes/api"));

app.get("/", function (req, res) {
  return res.send("<h1>Backend Running</h1>");
});

app.listen(4000, () => console.log("listening on port 4000"));
