const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const pokeRouter = require('./routes/pokelist');
const userRouter = require('./routes/user');





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))



app.use('/', pokeRouter);
app.use('/user', userRouter);


app.listen(6000, ()=>{
    console.log("Server on")
})
