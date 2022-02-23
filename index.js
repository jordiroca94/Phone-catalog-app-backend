const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const phonesRoute = require("./routes/phones");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database connection successful"))
  .catch((err) => {
    console.log(err);
  });

  app.use(cors())

app.use(express.json());
app.use("/api/phones", phonesRoute);

app.listen(process.env.PORT || 3005, () => {
  console.log("Backend is running on port 3005");
});
