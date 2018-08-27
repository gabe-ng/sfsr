const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SafeUserSchema = new Schema({
    name: String,
    location: String,
    birthday: String,
    hometown: String,
    registerDate: {
        type: Date,
        default: Date.now
    }
})

let SafeUser = mongoose.model("SafeUser", SafeUserSchema);

module.exports = SafeUser;