const express = require("express");

const router = express.Router();

const verifyToken = require("../../middleware/verifyToken");
const authorizeRoles = require("../../middleware/authorizeRoles");

const employeeController = require("./employee.controller");

router.get(
    "/",
    verifyToken,
    authorizeRoles("admin", "hr", "manager"),
    employeeController.getAllEmployees
);

router.post(
    "/",
    verifyToken,
    authorizeRoles("admin", "hr"),
    employeeController.createEmployee
);

router.put(
    "/:id",
    verifyToken,
    authorizeRoles("admin", "hr"),
    employeeController.updateEmployee
);

router.delete(
    "/:id",
    verifyToken,
    authorizeRoles("admin"),
    employeeController.deleteEmployee
);

module.exports = router;