const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verifyToken, TOKEN_SECRET } = require("../middlewares/validate-jwt");

const userController = require("../controllers/user");
const { response } = require("express");

const router = express.Router();

//localhost:4000/auth/register
router.post("/register", async (req, resp) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  const newUser = {
    ...req.body,
    password,
  };
  const response = await userController.createUser(newUser);
  resp.json({
    success: true,
    response,
  });
});
//localhost:4000/auth/login
router.post("/login", async (req, resp) => {
  const user = await userController.findUser(req.body.mail);
  if (!user) {
    resp.json({
      error: "User not found",
    });
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);

  if (!validPass) {
    return resp.json({
      error: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      name: user.mail,
      password: user.password,
    },
    TOKEN_SECRET
  );

  resp.json({
    data: "Success!",
    token,
  });
});

module.exports = router;
