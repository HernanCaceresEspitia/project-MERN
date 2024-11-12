const loginService = require("../services/loginService");
const catchAsync = require("../Utils/catchAsync");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.userLogin(email, password);
  res.status(200).json(user);
};

const userLogout = async (req, res) => {
    const { userId } = req.body;
    const status = await loginService.userLogout(userId);
    res.status(200).json(status)
}

module.exports = {
  userLogin: catchAsync(userLogin),
  userLogout: catchAsync(userLogout),
};
