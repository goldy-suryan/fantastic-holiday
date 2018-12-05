let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let nodemailer = require("nodemailer");
let morgan = require("morgan");
let app = express();
let config = require("./server/config.json");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.username,
    pass: config.password
  }
});

//Middlewares

app.use(express.static(path.join(__dirname, "dist", "fh")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.disable("x-powered-by");
app.use((req, res, next) => {
  res.header("Allow-Access-Control-Origin", "*");
  res.header(
    "Allow-Access-Control-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, PATCH, GET");
    res.status(200).json({});
  }
  next();
});

// Routes

app.post("/get-booking", (req, res) => {
  let { name, email, description } = req.body;
  if (!name || !email || !description) {
    res.status(200).json({ message: "Feilds should not empty" });
    return;
  }
  let mailOptions = {
    to: "fantasticholidaysops1@gmail.com",
    subject: "Booking",
    html: `name: ${name}, email: ${email}, description: ${description}`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({
        message: "Sent successfully, will get in touch with you",
        response: info.response
      });
    }
  });
});

app.post("/subscribe", (req, res) => {
  let subscriber = req.body.email;
  if (!subscriber) {
    res.status(200).json({ message: "Please provide valid email address" });
    return;
  }
  let mailOptions = {
    to: "fantasticholidaysops1@gmail.com",
    subject: "Subscriber",
    html: `email: ${subscriber}`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Subscribed successfully" });
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "fh", "index.html"));
});

// Error Handeling

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message
    }
  });
});

// Server
app.listen(process.env.PORT || 3000, "0.0.0.0", err => {
  if (err) throw new Error("Something went wrong!!!");
  console.log("started node server");
});
