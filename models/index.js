const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGOD_URI || "mongodb://localhost:27017/project3",
  { useNewUrlParser: true }
);

let SafeUser = require("./safeUser");
let SafeSpace = require("./safeSpace");


module.exports = {
    SafeUser: SafeUser,
    SafeSpace: SafeSpace,
};