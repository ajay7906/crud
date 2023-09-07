const express = require('express')
const app = express();
const PORT =  process.env.port || 5000;
const mongoose = require('mongoose');
const {mongoUrl} = require('./key')
const cors = require('cors')
app.use(cors())

require('./model/model')

app.use(express.json())
//routes
 app.use(require('./routes/auth'))



mongoose.connect(mongoUrl)
mongoose.connection.on("connected", ()=>{
    console.log("successful connected to mongo");
})
mongoose.connection.on("error", ()=>{
    console.log("not connected to mongo");
})
app.listen(PORT, ()=>{
    console.log("serveer is runnig on"+PORT);
})