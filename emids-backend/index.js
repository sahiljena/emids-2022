const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pdf = require("html-pdf");

const pdfTemplate = require("./prescription");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
