const mongoose = require('mongoose');
require('dotenv').config(); // make sure this is here if you're using dotenv

const mongoURI = process.env.MONGO_URI;

const connection = mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

module.exports = connection;
