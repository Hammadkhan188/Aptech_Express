let Functions={
    Home: async function(req,res){
        res.send("Home Page")
        res.end
    },

    Contact: async function(req,res){
        res.send("Contact Page")
        res.end
    },

    Feedback: async function(req,res){
        res.send("Feedback Page")
        res.end
    },

    Help: async function(req,res){
        res.send("Help Page")
        res.end
    },

    Faqs: async function(req,res){
        res.send("Faqs Page")
        res.end
    },

    PrivacyPolicy: async function(req,res){
        res.send("PrivacyPolicy Page")
        res.end
    }
}
module.exports = Functions
