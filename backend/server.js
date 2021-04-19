const express = require("express");
const user = require("./routes/user");
const connectDB = require("./config/connectDB");

const app = express();
app.use(express.json());

app.use("/user", user);
connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server running on port ${PORT}`)
);
