const express = require("express");
const router = express.Router();
const {
  getAllJournals,
  createJournal,
  getJournal,
  updateJournal,
  deleteJournal
} = require("../controllers/journalController");

router.param("id", (req, res, next, val) => {
  console.log(`Journal Id is ${val}`);
  next();
});

router
  .route("/")
  .get(getAllJournals)
  .post(createJournal);

router
  .route("/:id")
  .get(getJournal)
  .patch(updateJournal)
  .delete(deleteJournal);

module.exports = router;
