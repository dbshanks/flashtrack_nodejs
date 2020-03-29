const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = require("./app");

const connectDB = require("./database/db");
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
