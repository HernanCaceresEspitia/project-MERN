const validateUser = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    console.log("Nombre no válido");
    return res.status(400).json({
      error: "Falta el nombre",
    });
  } else {
    console.log("Nombre correcto");
    next();
  }
};

module.exports = validateUser;
