const { Router } = require("express");
const vehicleController = require("../controllers/vehicleController");

const vehicleRouter = Router();

vehicleRouter.get("/", vehicleController.getAllVehicles)
vehicleRouter.post("/", vehicleController.createVehicle)

module.exports = vehicleRouter;