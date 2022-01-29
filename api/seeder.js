const mongoose = require("mongoose");
const dotenv = require("dotenv");
const chalk = require("chalk");
const users = require("./data/users");
const products = require("./data/products");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log(chalk.bgGreen.inverse.bold("Data Imported Successfully"));
    process.exit();
  } catch (error) {
    console.error(chalk.red.inverse("Error in Importing Data"));
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log(chalk.bgRed.inverse.bold("Data Destroyed"));
    process.exit();
  } catch (error) {
    console.error(chalk.red.inverse("Error in Importing Data"));
    console.error(error);
    process.exit(1);
  }
};


if (process.argv[2] === "--import") {
    importData();
} else if (process.argv[2] === "--destroy") {
    destroyData();
}