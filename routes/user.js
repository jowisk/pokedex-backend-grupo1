const express = require("express");
const { verifyToken } = require("../middlewares/validate-jwt");

const router = express.Router();

router.use("/", verifyToken);

router.get("/", (req, res) => {
  res.send("hola");
});

module.exports = router;
