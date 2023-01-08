const prizeModel = require("../models/prizeModel");

const momo = {
  checkMomo: async (req, res, next) => {
    const allPrize = await prizeModel.findOne({ momo: req.body.momo });
    if (allPrize) {
      return res.status(200).json({ mess: "you using number momo before" });
    }
    next();
    // return res.send("you using number momo before");
  },
};

module.exports = momo;
