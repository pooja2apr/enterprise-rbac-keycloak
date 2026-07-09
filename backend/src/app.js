const express = require("express");
const cors = require("cors");

const dashboardRoutes =
require("./modules/dashboard/dashboard.routes");

const employeeRoutes =
require("./modules/employee/employee.route");

const departmentRoutes =
require("./modules/department/department.route");

const errorHandler =
require("./middleware/errorHandler");

require("dotenv").config();
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);

app.get("/", (req, res) => {

    res.json({
        message: "Enterprise RBAC Backend Running"
    });

});

app.use(errorHandler);

module.exports = app;