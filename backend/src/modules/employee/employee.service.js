const employeeRepository = require("./employee.repository");
const AppError = require("../../utils/AppError");

// ==========================
// GET ALL EMPLOYEES
// ==========================
exports.getAllEmployees = async () => {

    return await employeeRepository.getAllEmployees();

};

// ==========================
// CREATE EMPLOYEE
// ==========================
exports.createEmployee = async (employee) => {

    // Required Field Validation

    if (!employee.first_name) {
        throw new AppError("First name is required", 400);
    }

    if (!employee.last_name) {
        throw new AppError("Last name is required", 400);
    }

    if (!employee.email) {
        throw new AppError("Email is required", 400);
    }

    if (!employee.department_id) {
        throw new AppError("Department is required", 400);
    }

    if (!employee.designation) {
        throw new AppError("Designation is required", 400);
    }

    // Duplicate Email Validation

    const existingEmployee =
        await employeeRepository.findEmployeeByEmail(employee.email);

    if (existingEmployee.length > 0) {
        throw new AppError(
            "Employee with this email already exists",
            409
        );
    }

    return await employeeRepository.createEmployee(employee);

};

// ==========================
// UPDATE EMPLOYEE
// ==========================
exports.updateEmployee = async (employeeId, employee) => {

    // Check Employee Exists

    const existingEmployee =
        await employeeRepository.findEmployeeById(employeeId);

    if (existingEmployee.length === 0) {
        throw new AppError(
            "Employee not found",
            404
        );
    }

    // Required Field Validation

    if (!employee.first_name) {
        throw new AppError("First name is required", 400);
    }

    if (!employee.last_name) {
        throw new AppError("Last name is required", 400);
    }

    if (!employee.email) {
        throw new AppError("Email is required", 400);
    }

    if (!employee.department_id) {
        throw new AppError("Department is required", 400);
    }

    if (!employee.designation) {
        throw new AppError("Designation is required", 400);
    }

    // Duplicate Email Validation

    const employeeWithSameEmail =
        await employeeRepository.findEmployeeByEmail(employee.email);

    if (
        employeeWithSameEmail.length > 0 &&
        employeeWithSameEmail[0].employee_id != employeeId
    ) {
        throw new AppError(
            "Employee with this email already exists",
            409
        );
    }

    // Update Employee

    return await employeeRepository.updateEmployee(
        employeeId,
        employee
    );

};