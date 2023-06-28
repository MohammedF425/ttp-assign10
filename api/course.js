const express = require("express");
const router = express.Router();
const { Course } = require("../db/models");

// Root here is localhost:8080/api/course/

router.get("/", async (req, res, next) => {
  try {
    const allCourses = await Course.findAll();

    allCourses
      ? res.status(200).json(allCourses) 
      : res.status(404).send("Courses List Not Found"); 
  } catch (error) {
    next(error);
  }
});

module.exports = router;
