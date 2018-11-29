let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
// let morgan = require("morgan");
let app = express();

app.use(express.static(path.join(__dirname, "dist", "fh")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(morgan("dev"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "fh", "index.html"));
});

// let port = 3001 || process.env.PORT;
app.listen(process.env.PORT || 3000, "0.0.0.0", err => {
  if (err) throw new Error("Something went wrong!!!");
  console.log("started node server");
});
