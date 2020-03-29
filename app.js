const express = require("express");
const morgan = require("morgan");
const journalRouter = require("./routes/journalRoutes");
const userRouter = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.static(`${__dirname}/client/build`));

//React Front End Route
app.get("/", (req, res) => {
  res.status(200).render("index.html");
});

app.use("/api/v1/journals", journalRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
