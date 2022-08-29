const express = require("express");
const userQueries = require("../controllers/user");
const router = express.Router();

router.get("/auth", async (req, resp) => {
  const mail = req.body;
  const password = req.body;
  const user = await userQueries.getUserByMail(mail);
  resp.json(user);
});

router.post("/register", async (req, resp) => {
  const mail = req.body;
  const password = req.body;
  const newUser = await userQueries.createUser(body);
  resp.json(newUser);
});

module.exports = router;
