const Job = require("../model/job.model");

// get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get filtered jobs
const getFilteredJobs = async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm; // Extracting the search term from the query parameters

    const jobs = await Job.find({
      $or: [
        { title: { $regex: new RegExp(searchTerm, "i") } }, // Search in the "title" field
        { company: { $regex: new RegExp(searchTerm, "i") } }, // Search in the "company" field
        { description: { $regex: new RegExp(searchTerm, "i") } }, // Search in the "description" field
        { skills: { $regex: new RegExp(searchTerm, "i") } }, // Search in the "skills" field
        { location: { $regex: new RegExp(searchTerm, "i") } }, // Search in the "location" field
        { salary: { $regex: new RegExp(searchTerm, "i") } }, // Search in the "salary" field
        { applylink: { $regex: new RegExp(searchTerm, "i") } }, // Search in the "applylink" field
        { type: { $regex: new RegExp(searchTerm, "i") } }, // Search in the "type" field
        { role: { $regex: new RegExp(searchTerm, "i") } }, // Search in the "role" field
        { applicationDeadline: { $regex: new RegExp(searchTerm, "i") } }, // Search in the "applicationDeadline" field
        // Add more fields as needed
      ],
    });

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get selected job
const getJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job doesn't exist" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a job
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndUpdate(id, req.body);

    if (!job) return res.status(404).json({ message: "Job not Found" });

    const updatedJob = await Job.findById(id);
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// post a new job
const postJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a selected job with specific id
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndDelete(id);

    if (!job) res.status(404).json({ message: "Job Not Found" });

    res.status(200).json({ message: "Job deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getJobs,
  deleteJob,
  postJob,
  updateJob,
  getJob,
  getFilteredJobs,
};
