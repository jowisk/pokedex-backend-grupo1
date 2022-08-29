const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const { verifyToken, TOKEN_SECRET } = require("../middlewares/validate-jwt");

router.use("/", verifyToken);

router.post("/", (req, resp) => {
  const token = req.header("auth-token");
  resp.json("success!");
});

module.exports = router;
