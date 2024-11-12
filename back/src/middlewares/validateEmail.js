const User = require("../models/User");

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "El email es requerido" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Usuario o contraseña incorrectos" });
    }
    next();
  } catch (error) {
    console.error("Error al validar el email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = validateEmail;
