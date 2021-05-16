const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  console.log("Using Route : /characters");
  try {
    const response = await axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MY_MARVEL_API}`
      )
      .find()
      .limit(20);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
