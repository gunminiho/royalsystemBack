const express = require("express");
const server = express();
require("dotenv").config();
const routes = require("./routes/index");

const { PORT } = process.env || 3000;

server.use("/", routes);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});