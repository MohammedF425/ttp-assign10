// const express = require("express");
// const db = require("./db/models");
// const PORT = 8083;

// const app = express();

// // Mount on API
// app.use("/api", require("./api"));

// // Syncing DB Function
// const syncDB = () => db.sync();

// // Run server function
// const serverRun = () => {
//   app.listen(PORT, () => {
//     console.log(`Live on port: ${PORT}`);
//   });
// };

// syncDB();
// serverRun();

// module.exports = app;

const express = require("express");
const PORT = 8081;
const app = express();

app.use(express.json());
app.use("/api", require("./api"));

const serverRun = () => {
    const server = app.listen(PORT, () => {
        console.log(`Live on port: ${PORT}`);
    });
};
serverRun();