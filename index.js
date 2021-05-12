require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

app.all("*", (req, res) => {
  console.log("Using Route : app.all");
  res.status(400).json("Page Not Found");
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
