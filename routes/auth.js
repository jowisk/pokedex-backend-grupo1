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
  try {
    const user = await userController.findUser(req.body.mail);
    console.log("req.body.mail", req.body.mail);
    console.log("req.body.password", req.body.password);
    console.log("user", user);

    if (!user) {
      resp.status(400);
    }

    const validPass = await bcrypt.compareSync(
      req.body.password,
      user[0].password
    );

    if (!validPass) {
      return resp.status(400);
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
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
