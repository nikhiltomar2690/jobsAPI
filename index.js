const express = require("express");
const mongoose = require("mongoose");
const Job = require("./model/job.model.js");
const jobRoute = require("./routes/job.route.js");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();

// middlewares
// allow the app to send json in request as it cannot be done directly
app.use(express.json());
// accept other types of data also
app.use(express.urlencoded({ extended: false }));
// we also use nodemon in this server to reflect the changes in server so that we do not need to restart the server each time.

// setting up the routes
app.use("/api/jobs", jobRoute);

mongoose
  .connect(
    `mongodb+srv://devsunite2024:${process.env.MONGO_PASSWORD}@jobsapi.jnwqiy9.mongodb.net/Node-API?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("JobsAPI is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection to MongoDB failed");
  });

app.get("/", (req, res) => {
  res.send("JobsAPI updated");
});
