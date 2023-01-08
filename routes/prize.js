const prizeRoute = require("express").Router();
const prizeController = require("../controllers/prizeController");
const momoCheck = require("../verifyMomo/momo");

prizeRoute.get("/all", prizeController.getAll);
prizeRoute.post("/create", momoCheck.checkMomo, prizeController.createPrize);
prizeRoute.delete("/delete/:id", prizeController.deletePrize);

module.exports = prizeRoute;
