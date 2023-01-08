const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const PORT = "3000";

const app = express();
app.use(cors());
app.use(express.json());

connectDB.connectDB();

app.get("/", (req, res) => {
  res.send("welcome to my node");
});

const prize = require("./routes/prize");
app.use("/prize", prize);

app.listen(PORT, () =>
  console.log(`listening on port ${PORT} => http://localhost:${PORT}`)
);
