const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const journalRouter = require("./routes/journalRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.static(`${__dirname}/client/build`));

app.use("/api/v1/journals", journalRouter);
app.use("/api/v1/users", userRouter);

//Frontend React Routes
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

module.exports = app;
