let heathi = require("mongoose");

let Health_Info = new heathi.Schema({
    Bp: { type: String, required: true },
    Sugar: { type: String, required: true },
    HeartRate: { type: String, required: true },
    collestrol: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = heathi.model("healthInfo", Health_Info);
