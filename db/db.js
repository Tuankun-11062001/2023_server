const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://june:june@cluster0.lmzz2gh.mongodb.net/2023?retryWrites=true&w=majority"
    );
    console.log("server is going");
  } catch (error) {
    console.log("database is error :", error);
  }
};

module.exports = { connectDB };
