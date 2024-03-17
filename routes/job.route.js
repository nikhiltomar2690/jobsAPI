const express = require("express");
const Job = require("../model/job.model.js");
const router = express.Router();

// this brings all the functions from the controller folder and
// and then destructure them.
// then acc to the route accessed by the developer the data is returned
const {
  getJobs,
  deleteJob,
  postJob,
  updateJob,
  getJob,
  getFilteredJobs,
} = require("../controllers/job.controller.js");

// contains all the routes to the API
router.get("/", getJobs);
router.get("/search", getFilteredJobs);
router.get("/:id", getJob);
router.delete("/:id", deleteJob);
router.post("/", postJob);
router.put("/:id", updateJob);

module.exports = router;
