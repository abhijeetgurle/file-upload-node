const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = 4000;

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/upload", (req, res) => {
  const file = req.files.file;
  const temp = JSON.parse(file.data.toString());
  console.log(temp);
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running successfully on ${PORT}`);
});
