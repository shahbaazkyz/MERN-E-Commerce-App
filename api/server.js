const express = require("express");
const products = require("./data/products.js");
const connectDB = require("./config/db");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

connectDB();

const port = process.env.PORT;

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/product/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product._id === productId);
  if (product) {
    return res.json(product);
  } else {
    res.status(404).json({
      message: "Product not found",
    });
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}!`));
