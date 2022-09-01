const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const pokemonQueries = require("../controllers/pokemon");
const { verifyToken, TOKEN_SECRET } = require("../middlewares/validate-jwt");

router.use("/", verifyToken);

router.post("/", async (req, resp) => {
  const body = req.body;
  const newPokemon = await pokemonQueries.createPokemon(body);
  resp.json("success!");
});

router.get("/", (req, resp) => {});
module.exports = router;
