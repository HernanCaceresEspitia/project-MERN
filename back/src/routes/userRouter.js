const { Router } = require("express");
const userController = require("../controllers/userController");
const validateUser = require("../middlewares/validateUser");

const userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/byName", userController.getUserByName)
userRouter.get("/:id", userController.getUserById)
userRouter.put("/addVehicle", userController.addVehicleToUser)
userRouter.post("/", userController.createUser);

module.exports = userRouter;
