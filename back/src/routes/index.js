const { Router } = require("express");

const userRouter = require("../routes/userRouter")
const orderRouter = require("./orderRouter");

const router = Router();

router.use("/users", userRouter)
router.use("/orders", orderRouter)

module.exports = router;