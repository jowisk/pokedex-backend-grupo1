const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SIGNATURE } = require("../controllers/user");

const userController = require("../controllers/user");
const { response } = require("express");

const router = express.router();

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  const newUser = {
    ...req.body,
    password,
  };
  const response = await userController.createUser(newUser);
  res.json({
    success: true,
    response,
  });
});

router.post("/login", async (req, res) => {
  const user = await userController.findUser(req.body.email);

  if (!user) {
    res.json({
      error: "User not found",
    });
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);

  if (!validPass) {
    return res.json({
      error: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      name: user.email,
      id: user.id,
    },
    SIGNATURE
  );

  res.json({
    data: "Success!",
    token,
  });
});

module.exports = router;
