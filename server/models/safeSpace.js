const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SafeSpaceSchema = new Schema({
  name: String,
  address: String,
  housingCapacity: Number,
  occupants: {
    type: Number,
    default: 0
  },
  canShare: String,
  registerDate: {
    type: Date,
    default: Date.now
  },
});

let SafeSpace = mongoose.model("SafeSpace", SafeSpaceSchema);

module.exports = SafeSpace;