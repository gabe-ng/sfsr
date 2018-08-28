const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SafeSpaceSchema = new Schema({
  address: String,
  housingCapacity: Number,
  occupants: {
    type: Number,
    default: 0
  },
  canShare: {
    type: String,
    default: "Everything"
  },
  registerDate: {
    type: Date,
    default: Date.now
  },
});

let SafeSpace = mongoose.model("SafeSpace", SafeSpaceSchema);

module.exports = SafeSpace;