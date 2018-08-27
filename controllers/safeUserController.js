let db = require("../models");

// GET /api/safeUsers

const getSafeUsers = (req, res) => {
    db.SafeUser.find({}, (err, foundUsers) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(foundUsers);
    })
}

let createSafeUser = (req, res) =>{
    db.SafeUser.create(req.body, (err, createUser)=>{
        if(err){
            console.log(err);
            return
        }
        res.json(createUser)
    })
}

module.exports = {
    getSafeUsers: getSafeUsers,
    createSafeUser: createSafeUser
}