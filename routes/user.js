const express = require("express");
const userQueries = require("../controllers/user");
const router = express.Router();

// para un solo usuario
router.get("/auth", async (req, resp) => {
  const mail = req.body;
  const password = req.body;
  const user = await userQueries.getUserByMail(mail);
  resp.json(user);
});

// para crear un usuario
router.post("/register", async (req, resp) => {
  const mail = req.body;
  const password = req.body;
  const newUser = await userQueries.createUser(body);
  resp.json(newUser);
});

module.exports = router;
