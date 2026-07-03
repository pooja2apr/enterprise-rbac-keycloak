const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./config/db"); 
const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.json({
        message: "Enterprise RBAC Backend Running"
    });
});

module.exports = app;