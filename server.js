require("dotenv").config();
const express = require("express");
const path = require("path");

require("./config/db");

const logger = require("./middleware/logger");
const limiter = require("./middleware/rateLimiter");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(logger);
app.use(limiter);

app.use("/", require("./routes/pageRoutes"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));

app.listen(process.env.PORT, () =>
  console.log("Server running on", process.env.PORT)
);
