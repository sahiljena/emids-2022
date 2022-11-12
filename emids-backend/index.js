const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const pdf = require("html-pdf");
const mongoString = process.env.DATABASE_URL;

const pdfTemplate = require("./prescription");
const app = express();

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const patient = require("./routes/patient");
const doctor = require("./routes/doctor");

app.use("/api/patient", patient);
app.use("/api/doctor", doctor);

app.post("/pdf", (req, res) => {
  console.log(req.body);
  var options = {
    format: "A3",
  };
  pdf
    .create(pdfTemplate(req.body), options)
    .toFile("Prescription.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
      }

      res.send(Promise.resolve());
    });
});

app.get("/fpdf", (req, res) => {
  res.sendFile(`${__dirname}/Prescription.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
