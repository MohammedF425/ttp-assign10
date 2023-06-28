const { Sequelize } = require("sequelize");
const { name } = require("../../package.json");
name === 'lab'

const db = new Sequelize(`postgres://localhost:5432/${name}`, {

  logging: false,
});

module.exports = db;


// const express = require("express");
// const router = express.Router();
// const { Pool } = require("pg");

// const pool = new Pool({
//     host: "localhost",
//     port: 5432,
//     user: "Fadel",
//     password: "", //the password will be deleted when posted on git
//     database: "lab"
// });

// router.get('/', async (req, res) => {
//     try {
//         const results = await pool.query('SELECT * FROM course');
//         res.json(results.rows);

//     } catch (err) {
//         console.error(err);
//         res.send("error");
//     }
// });

// // router.post('/', async (req, res) => {
// //     try {
// //         console.log(req.body);
// //         const {id, name, section, favorite_sub} = req.body;
// //         const newStudent = await pool.query(
// //             'INSERT INTO student (id, name, section, favorite_sub) VALUES ($1, $2, $3, $4) RETURNING *',
// //             [id, name,section, favorite_sub]
// //         );
// //         res.json(newStudent.rows[0]);
// //     } catch (err){
// //         console.error(err);
// //         res.send("error");
// //     }
// // });
// module.exports = router;