const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");

//* Create user model
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.checkPassword = async function (pass) {
  return await bcryptjs.compare(pass, this.password);
};


const User = mongoose.model("User", userSchema);

module.exports = User;
