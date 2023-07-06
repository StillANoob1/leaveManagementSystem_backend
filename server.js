const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors =require('cors')
const app = express();
const userRouter = require("./routes/userRoute")
const leaveRouter= require("./routes/leaveRoutes")

const port = process.env.PORT || 8000

app.use(cors({ origin:true , credentials:true }));
app.use(express.json());
app.use(userRouter)
app.use(leaveRouter)

const connect =()=>{
    mongoose.connect(process.env.MONGO_DB).then(()=>{
        console.log("database Connected");
    }).catch((err)=>{
        console.log(err);
    })
}


app.listen(port,()=>{
    connect();
    console.log(`server is listining at port ${port}`);
})