const express = require("express");

const router = express.Router();

const verifyToken = require("../../middleware/verifyToken");
const authorizeRoles = require("../../middleware/authorizeRoles");

const departmentController = require("./department.controller");

// ==========================
// GET ALL DEPARTMENTS
// ==========================
router.get(
    "/",
    verifyToken,
    authorizeRoles("admin", "hr", "manager"),
    departmentController.getAllDepartments
);

// ==========================
// CREATE DEPARTMENT
// ==========================
router.post(
    "/",
    verifyToken,
    authorizeRoles("admin"),
    departmentController.createDepartment
);

// ==========================
// UPDATE DEPARTMENT
// ==========================
router.put(
    "/:id",
    verifyToken,
    authorizeRoles("admin"),
    departmentController.updateDepartment
);

// ==========================
// DELETE DEPARTMENT
// ==========================
router.delete(
    "/:id",
    verifyToken,
    authorizeRoles("admin"),
    departmentController.deleteDepartment
);

module.exports = router;