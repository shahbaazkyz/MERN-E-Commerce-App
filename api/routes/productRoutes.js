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
// * @desc    Get Single product
// * @route   GET api/product
// * @access  Public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({
        message: "Product not found",
      });
    }
  })
);

module.exports = router;
