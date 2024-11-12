const { Router } = require("express");
const loginController = require("../controllers/loginController");
const validateEmail = require("../middlewares/validateEmail");

const loginRouter = Router();

loginRouter.get("/login", validateEmail, loginController.userLogin);
loginRouter.get("/logout", loginController.userLogout);

module.exports = loginRouter;
