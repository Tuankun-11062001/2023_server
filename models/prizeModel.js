const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PrizeModel = new Schema({
  name: { type: String },
  linkFace: { type: String },
  prize: { type: String },
  sex: { type: String },
  momo: { type: String },
});

module.exports = mongoose.model("prize", PrizeModel);
