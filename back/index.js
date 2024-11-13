const app = require("./src/server");
const dbCon = require("./src/config/dbCon");
require("dotenv").config();

const port = process.env.PORT;

dbCon().then((res) => {
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
});
