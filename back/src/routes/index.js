const { Router } = require("express");

const userRouter = require("../routes/userRouter")
const postRouter = require("../routes/postsRoutes");
const vehicleRouter = require("./vehicleRouter");

const router = Router();

router.use("/users", userRouter)
router.use("/posts", postRouter)
router.use("/vehicles", vehicleRouter)

module.exports = router;