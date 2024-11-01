const { Router } = require("express");
const { postController } = require("../controllers");

const postRouter = Router();

postRouter.get("/", postController);

module.exports = postRouter;