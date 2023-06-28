const express = require("express");
const router = express.Router();
const { Staff } = require("../db/models");

// Root here is localhost:8080/api/staff/

router.get("/", async (req, res, next) => {
  try {
    const allStaffs = await Staff.findAll();

    allShoppers
      ? res.status(200).json(allStaffs) 
      : res.status(404).send("Staffs List Not Found"); 
  } catch (error) {
    next(error);
  }
});

module.exports = router;
