const mongoose = require("mongoose");

const { MONGODB_URL } = process.env;

module.exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB connection Successful"))
    .catch((error) => {
      console.log("DB connection Failed");
      console.log(error);
      process.exit(1);
    });
};
