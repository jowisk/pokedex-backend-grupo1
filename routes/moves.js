const express = require("express");
const movesQueries = require("../controllers/moves");
const router = express.Router();

// para todos los movimientos
router.get("/", async (req, resp) => {
  const moves = await movesQueries.getMoves();
  console.log("moves:", moves);
  resp.json(moves);
});

module.exports = router;
