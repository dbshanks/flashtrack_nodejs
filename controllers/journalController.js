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

exports.createJournal = async (req, res) => {
  try {
    const newJournal = await Journal.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newJournal
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
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

exports.updateJournal = async (req, res) => {
  try {
    const journal = await Journal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
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

exports.deleteJournal = async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};
