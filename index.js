let expr = require("express");
let ro= require("./Route/routes");
let db =require("./Connections");
require("dotenv").config();

let myapp = expr()

myapp.use("/ali/",ro);

db().then(()=>{
    myapp.listen(process.env.PORT,()=>{
        console.log(`Server Started At http://localhost:${process.env.PORT}`)
    })
}).catch((e)=>{
    console.log(e)
})