const mongoose = require("mongoose");

const subcriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscriberToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscriber", subcriberSchema);
