require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/authRoutes");
const trackRoutes = require("./Routes/trackRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://admin:admin@cluster0-trzui.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo istance");
});

mongoose.connection.on("error", (err) => {
  console.log("Error occured : ", err);
});
app.get("/", requireAuth, (req, res) => {
  res.send(`your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
