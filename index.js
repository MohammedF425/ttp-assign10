// importing pool
const pool = require("./db");
const express = require("express");
const app = express();
app.use(express.json());


// GET call| Gets/recieves all of the columns of the 'student' table
app.get("/*", async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM student");
    console.log("Doing GET call to get all data from 'student' table");
    res.json(results.rows);
  } catch (error) {
    console.error(error);
  }
});

//POST call| Posts/add a row of data to the 'department' table
app.post("/department", async (req, res) => {
  try {
    const { department_code, department_description } = req.body;
    console.log("Responding to Post");
    const update = await pool.query(
      "INSERT INTO department values('BIOL', 'Biology Department')",
      [department_code,department_description]
    );
    res.json(update.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

// Runs server
const PORT = 3013;
app.listen(PORT, () => {
  console.log("server has started on port 3013");
});