const express = require("express");

const router = express.Router();

const verifyToken = require("../../middleware/verifyToken");
const authorizeRoles = require("../../middleware/authorizeRoles");
const dashboardController = require("./dashboard.controller");

router.get(
    "/",
    verifyToken,
    authorizeRoles("admin"),
    dashboardController.getDashboard
);

module.exports = router;