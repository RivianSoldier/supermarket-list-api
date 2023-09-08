const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const app = express();
app.use(express.json());
const port = 3000;

async function connectDatabase() {
  await mongoose.connect("mongodb://localhost:27017");
}

app.listen(port, () => {
  connectDatabase().catch((error) => {
    console.log(`Error connecting to database: ${error}`);
  });
  app.use("/", routes);
  console.log(`App is running at port ${port}`);
});
