require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  //Database connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    
  });
  const connection = mongoose.connection;
  connection
    .once("open", () => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("Connection Failed");
    });
}

module.exports = connectDB;