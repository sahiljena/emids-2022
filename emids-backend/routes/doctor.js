const express = require("express");
const Doctor = require("../models/doctor");
const router = express.Router();

router.post("/new", (req, res) => {
  // create a new doctor instance and collect the data
  const doctor = new Doctor({
    name: req.body.name,
    degree: req.body.degree,
    address: req.body.address,
    specialization: req.body.specialization,
    registrationNumber: req.body.registrationNumber,
  });
  // save the new doctor
  doctor
    .save()
    // return success if the doctor is added to the database successfully
    .then((result) => {
      res.status(201).send({
        code: "DOCTOR_CREATED",
        message: "Doctor Added Successfully",
        result,
      });
    })
    // catch error if the doctor wasn't added successfully to the database
    .catch((error) => {
      res.status(500).send({
        code: "DOCTOR_NOT_ADDED",
        message: "Error creating doctor",
        error,
      });
    });
});

router.get("/find", async (req, res) => {
  const query = req.query.q;
  const regex = new RegExp(`^${query}`, "i");
  const doctor = await Doctor.find({ name: regex });
  res.status(200).send({
    doctors: doctor,
    n: doctor.length,
  });
});

module.exports = router;
