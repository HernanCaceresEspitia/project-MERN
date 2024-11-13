const mongoose = require("mongoose");
require("dotenv").config();

const dbHost = process.env.DB_HOST;
const dbCon = async () => {
  await mongoose.connect(dbHost);
};

module.exports = dbCon;
