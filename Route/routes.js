let exp = require("express")
let r =exp.Router();
let cont = require("../Logic/Functions");

r.get("/",cont.Home);
r.get("/C",cont.Contact);
r.get("/F",cont.Feedback);
r.get("/H",cont.Help);
r.get("/FA",cont.Faqs);
r.get("/PP",cont.PrivacyPolicy);

module.exports = r;