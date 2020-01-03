const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const serverless = require("serverless-http");
const router = express.Router()

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
// app.use("/api/v1/docs", require("./routes/docs"));



app.use("/.netlify/functions/server", require("./routes/docs"));
const PORT = process.env.PORT || 5000;

// app.listen(PORT, () =>
//   console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode.`)
// );

module.exports = app;
module.exports.handler = serverless(app);