const mongoose = require("mongoose");
const chalk = require("chalk");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.bgGreen.white.bold(`MongoDB connected: ${conn.connection.host}`));
  } catch (error) {
    console.log(chalk.red("Error", error));
    process.exit(1);
  }
};

module.exports = connectDB;
