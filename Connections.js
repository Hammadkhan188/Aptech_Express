let mongo = require("mongoose");
require("dotenv").config();

let db = process.env.DB_URL

let db_func = async function(){
    mongo.connect(db).then(()=>{
        console.log("Connection has been built")
    }).catch((e)=>{
        console.log(e)
    })
}
module.exports = db_func