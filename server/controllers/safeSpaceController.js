const db = require('../models');

const getSafeSpace = (req, res) => {
    db.SafeSpace.find({}, (err, foundSafeSpace) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(foundSafeSpace)
    })
}

const createSafeSpace = (req, res) => {
    db.SafeSpace.create(req.body, (err, newSafeSpace) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(newSafeSpace);
    })
}

module.exports = {
    getSafeSpace: getSafeSpace,
    createSafeSpace: createSafeSpace,
}