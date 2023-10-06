// Create web server application to handle comments

// Import modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// Import routes
const commentsRoutes = require("./routes/comments");

// Import models
const Comment = require("./models/comment");

// Create express app
const app = express();

// Connect to database
mongoose
  .connect("mongodb://localhost:27017/comments", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

// Use body-parser to parse JSON data
app.use(bodyParser.json());

// Use CORS to allow cross-origin requests
app.use(cors());

// Use routes
app.use("/comments", commentsRoutes);

// Export app
module.exports = app;