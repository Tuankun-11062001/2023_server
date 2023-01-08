const PrizeModel = require("../models/prizeModel");

const prizeController = {
  getAll: async (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let perPage = 5;
    let start = (page - 1) * perPage;
    let end = page * perPage;
    const all = await PrizeModel.find({});
    const pagition = all.slice(start, end);

    res.send(pagition);
  },

  createPrize: async (req, res) => {
    const body = req.body;
    const newPrize = new PrizeModel(body);
    await newPrize.save();
    res.status(200).send(newPrize);
  },

  deletePrize: async (req, res) => {
    await PrizeModel.deleteOne({ id: req.params.id });
    res.send("deleted");
  },
};

module.exports = prizeController;
