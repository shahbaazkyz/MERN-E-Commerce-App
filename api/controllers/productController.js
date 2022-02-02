const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

module.exports = {
  getAllProducts,
  getSingleProduct,
};
