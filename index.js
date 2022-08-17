const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')


const pokeRouter = require('./routes/pokelist');
const userRouter = require('./routes/user');




app.use(cors('http://localhost:3000/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))



app.use('/', pokeRouter);
app.use('/user', userRouter);


app.listen(4000, ()=>{
    console.log("Server on")
})
