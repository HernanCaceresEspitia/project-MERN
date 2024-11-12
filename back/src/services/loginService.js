const User = require("../models/User");

module.exports = {
  userLogin: async (email, password) => {
    const user = await User.findOne({ email });
    if  (user.email === email && user.password === password) {
      user.isLogged = true;
      await user.save();
      const userNoPassword = user.toObject();
      delete userNoPassword.password;

      return userNoPassword;
    } else {
      return "Usuario o contraseña inválidos";
    }
  },

  userLogout: async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
      return "ID no válido";
    }
    user.isLogged = false;
    await user.save();
    return "Sesión cerrada exitosamente";
  },
};
