const Journal = require("../models/Journal");

exports.getAllJournals = async (req, res) => {
  try {
    const journals = await Journal.find();
    res.status(200).json({
      status: "success",
      results: journals.length,
      data: {
        journals
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.createJournal = (req, res) => {
  res.status(500).json({
    status: "fail",
    message: "This route is not yet defined"
  });
};

exports.getJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        journal
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.updateJournal = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined"
  });
};

exports.deleteJournal = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined"
  });
};
