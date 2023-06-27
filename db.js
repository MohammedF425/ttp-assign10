const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "Fadel",
    password: "momofadel425",
    database: "lab"
});

module.exports = pool;
