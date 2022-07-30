const express = require("express");
const connect = require("./config/db");
const shoesModel = require("./models/shoes.model");
const app = express();
const { signup, login } = require("./controllers/User.controller");
const { body, validationResult } = require("express-validator");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(
  "/signup",
  body("username").notEmpty().isString().isLength({ min: 3, max: 20 }),
  body("email").isEmail().notEmpty(),
  body("password").isLength({ min: 5, max: 20 }),

  signup
);
app.use(
  "/login",
  body("email").isEmail().notEmpty(),
  body("password").isLength({ min: 5, max: 20 }),
  login
);

app.get("/shoes", async (req, res) => {
  try {
    console.log(req.query);
    let sort = Number(req.query.sort);
    let filter = req.query.filter;
    console.log(typeof filter);
    const shoes = await shoesModel
      .find({ brand: `${filter}` })
      .limit(12)
      .skip(req.query.page)
      .sort({ price: `${sort}` })
      .lean()
      .exec();
    res.send(shoes);
  } catch (err) {
    console.log(err);
  }
});

app.get("/shoes/:id", async (req, res) => {
  try {
    let prod = await shoesModel.findOne({ _id: req.params.id });
    res.send(prod);
  } catch (err) {
    console.log(err);
  }
});

app.get("/", async (req, res) => {
  res.send("home page");
});
const port = process.env.PORT || 5000;
app.listen(port, async () => {
  try {
    await connect();
    console.log("Server Started on 5000");
  } catch (err) {
    console.log(err);
  }
});
