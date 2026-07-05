const express = require("express");
const cors = require("cors");
const dashboardRoutes =
require("./modules/dashboard/dashboard.routes");
require("dotenv").config();

require("./config/db"); 
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Enterprise RBAC Backend Running"
    });
});

module.exports = app;