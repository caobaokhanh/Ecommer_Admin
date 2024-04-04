const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

routes(app);

console.log("Ket qua user", process.env.DB_USER);
console.log("Ket qua password", process.env.DB_PASS);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ecomdb.9tsmcvr.mongodb.net/`
  )
  .then(() => {
    console.log("Connect DB Success!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("server is running in port: ", +port);
});
