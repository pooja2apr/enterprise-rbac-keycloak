const departmentRepository = require("./department.repository");
const auditService = require("../audit/audit.service");
const AppError = require("../../utils/AppError");

// ==========================
// GET ALL DEPARTMENTS
// ==========================
exports.getAllDepartments = async () => {

    return await departmentRepository.getAllDepartments();

};

// ==========================
// CREATE DEPARTMENT
// ==========================
exports.createDepartment = async (
    department,
    user,
    ipAddress
) => {

    // Required Field Validation

    if (!department.department_name) {

        throw new AppError(
            "Department name is required",
            400
        );

    }

    // Duplicate Validation

    const existingDepartment =
        await departmentRepository.findDepartmentByName(
            department.department_name
        );

    if (existingDepartment.length > 0) {

        throw new AppError(
            "Department already exists",
            409
        );

    }

    // Create Department

    const result =
        await departmentRepository.createDepartment(
            department
        );

    // Audit Logging

    await auditService.logAction({

        username: user.preferred_username,

        action: "CREATE",

        resource: "Department",

        status: "SUCCESS",

        ip_address: ipAddress

    });

    return result;

};

// ==========================
// UPDATE DEPARTMENT
// ==========================
exports.updateDepartment = async (
    departmentId,
    department,
    user,
    ipAddress
) => {

    // Check Department Exists

    const existingDepartment =
        await departmentRepository.findDepartmentById(
            departmentId
        );

    if (existingDepartment.length === 0) {

        throw new AppError(
            "Department not found",
            404
        );

    }

    // Required Validation

    if (!department.department_name) {

        throw new AppError(
            "Department name is required",
            400
        );

    }

    // Duplicate Validation

    const duplicateDepartment =
        await departmentRepository.findDepartmentByName(
            department.department_name
        );

    if (
        duplicateDepartment.length > 0 &&
        duplicateDepartment[0].department_id != departmentId
    ) {

        throw new AppError(
            "Department already exists",
            409
        );

    }

    // Update Department

    await departmentRepository.updateDepartment(
        departmentId,
        department
    );

    // Audit Logging

    await auditService.logAction({

        username: user.preferred_username,

        action: "UPDATE",

        resource: "Department",

        status: "SUCCESS",

        ip_address: ipAddress

    });

};

// ==========================
// DELETE DEPARTMENT
// ==========================
exports.deleteDepartment = async (
    departmentId,
    user,
    ipAddress
) => {

    // Check Department Exists

    const existingDepartment =
        await departmentRepository.findDepartmentById(
            departmentId
        );

    if (existingDepartment.length === 0) {

        throw new AppError(
            "Department not found",
            404
        );

    }

    // Delete Department

    await departmentRepository.deleteDepartment(
        departmentId
    );

    // Audit Logging

    await auditService.logAction({

        username: user.preferred_username,

        action: "DELETE",

        resource: "Department",

        status: "SUCCESS",

        ip_address: ipAddress

    });

};