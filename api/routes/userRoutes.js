const router = require("express").Router();
const { authUser } = require("../controllers/userController");

router.post("/login", authUser);

module.exports = router;
