let perrecords = require("mongoose");

let personal_record = new perrecords.Schema({
    height: { type: String, required: true },
    weight: { type: String, required: true },
    Bmi: { type: String, required: true },
    Category: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = perrecords.model("PersonalRecord", personal_record);
