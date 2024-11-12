const { Router } = require("express");

const userRouter = require("../routes/userRouter")
const orderRouter = require("./orderRouter");
const loginRouter = require("./loginRouter");

const router = Router();

router.use("/users", userRouter)
router.use("/orders", orderRouter)
router.use("/log", loginRouter)

module.exports = router;