const express = require("express");
const connectDB = require("./config/db");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

connectDB();

const port = process.env.PORT;

app.use("/api/products", require("./routes/productRoutes"));

app.listen(port, () => console.log(`Server is running on port ${port}!`));
