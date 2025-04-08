let usersmodel = require("mongoose");

let user_collections = new usersmodel.Schema({
    u_name: { type: String, required: true },
    u_email: { type: String, required: true },
    u_password: { type: String, required: true },
    u_gender: { type: String, required: true },
    u_address: { type: String, required: true },
    u_age: { type: Number, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = usersmodel.model("UserModel", user_collections);
