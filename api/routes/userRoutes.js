const router = require("express").Router();
const { authUser, getUserProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/login", authUser);
router.get("/profile", protect, getUserProfile);

module.exports = router;
