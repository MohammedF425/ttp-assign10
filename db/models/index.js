const db = require("./db");

// Might not need it anymore
// require("./models");

module.exports = db;

// const express = require("express");
// const router = express.Router();

// router.use("/db", require("./db"));

// router.use((req, res, next) => {
//     const error = new Error("404 Not Found");
//     error.status = 404;
//     next();
// });

// module.exports = router;