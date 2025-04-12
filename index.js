let expr = require("express");
let ro = require("./Route/routes");
let db = require("./Connections");
let user = require("./Collections/User");
let healthInfo = require("./Collections/HealthInfo");
let personalRecord = require("./Collections/PersonalRecord");

require("dotenv").config();

// Add User
let add_data = async function () {
    try {
        await user.create({
            u_name: "Ali",
            u_email: "Ali@gmail.com",
            u_password: "123",
            u_gender: "Male",
            u_address: "lala",
            u_age: 19
        });
        console.log("User Created Successfully");
    } catch (error) {
        console.log(error);
    }
};

// Add Personal Record
let PersonalRecords = async function () {
    try {
        await personalRecord.create({
            height: "5'1",
            weight: "50",
            Bmi: "12",
            Category: "haha"
        });
        console.log("Personal Record Created Successfully");
    } catch (error) {
        console.log(error);
    }
};

// Add Health Info
let HealthInfo = async function () {
    try {
        await healthInfo.create({
            Bp: "100",
            Sugar: "150",
            HeartRate: "50",
            collestrol: "yya"
        });
        console.log("Health Info Created Successfully");
    } catch (error) {
        console.log(error);
    }
};

let myapp = expr();

myapp.use(expr.json())

myapp.use("/ali/", ro);



db().then(() => {
    // add_data();
    // PersonalRecords();
    // HealthInfo();
    myapp.listen(process.env.PORT, () => {
        console.log(`Server Started At http://localhost:${process.env.PORT}`);
    });
}).catch((e) => {
    console.log(e);
});
