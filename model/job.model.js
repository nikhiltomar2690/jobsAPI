const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter Job Title"],
    },
    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    applylink: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Number,
      default: Date.now,
    },
    role: {
      type: String,
      required: true,
    },
    applicationDeadline: {
      type: String,
      required: true,
    },
    jobTag: {
      type: String,
    },
    companyLogo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
