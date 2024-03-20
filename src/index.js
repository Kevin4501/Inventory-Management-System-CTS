require("dotenv").config({ path: "src/.env" });
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRouters = require("../src/routers/authRoute")
const productRoutes = require("../src/routers/productRoutes")
const cors = require("cors");

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/users", authRouters )
app.use("/api/shopping" , productRoutes )
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));



app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
