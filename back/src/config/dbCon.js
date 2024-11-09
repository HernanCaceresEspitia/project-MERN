const mongoose = require("mongoose");

const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://projectmgray:njk93Cg1zFsXADNw@proyecto-mern.dqdy7.mongodb.net/"
  );
};

module.exports = dbCon;
