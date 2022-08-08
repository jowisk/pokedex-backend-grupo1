const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//traer distintas rutas - falta pensarlas con detalle
//login
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

//invocar las distintas rutas

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(4000, () => {
  console.log("Server on");
});
