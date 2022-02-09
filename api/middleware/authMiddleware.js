const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  const reqToken = req.headers.authorization;
  if (reqToken && reqToken.startsWith("Bearer")) {
    try {
      token = reqToken.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Invalid token");
    }
  }

  if (!reqToken) {
    res.status(401);
    throw new Error("No token provided");
  }
});

module.exports = {
  protect,
};
