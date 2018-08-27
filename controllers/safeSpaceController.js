const db = require('../models');

const getSafeSpace = (req, res) => {
    db.SafeSpace.find({}, (err,foundSafeSpace) => {
        if (err) {
            console.log(err)
            return;
        }
        res.json(foundSafeSpace)
    })
}

module.exports = {
    getSafeSpace:getSafeSpace,
}