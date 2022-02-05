const router = require("express").Router();
const {
  getSingleProduct,
  getAllProducts,
} = require("../controllers/productController");

//* Method 1
router.route("/").get(getAllProducts);

//* Method 2
router.get("/:id", getSingleProduct);

module.exports = router;
