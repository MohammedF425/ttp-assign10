const express = require("express");
const router = express.Router();
const { Deparment } = require("../db/models");

// Root here is localhost:8080/api/department/

router.get("/", async (req, res, next) => {
  try {
    const allDeparments = await Deparment.findAll();

    allDepartments
      ? res.status(200).json(allDeparments) 
      : res.status(404).send("Deparments List Not Found"); 
  } catch (error) {
    next(error);
  }
});

module.exports = router;
