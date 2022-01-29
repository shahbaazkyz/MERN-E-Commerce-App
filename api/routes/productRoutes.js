const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// * @desc    Get all products
// * @route   GET api/products
// * @access  Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);

module.exports = router;
