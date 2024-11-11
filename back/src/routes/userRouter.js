const { Router } = require("express");
const userController = require("../controllers/userController");
const validateId = require("../middlewares/validateId");

const userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/byName", userController.getUserByName)
userRouter.get("/:id", validateId, userController.getUserById)
userRouter.put("/addOrder", userController.addOrder)
userRouter.post("/", userController.createUser);

module.exports = userRouter;
