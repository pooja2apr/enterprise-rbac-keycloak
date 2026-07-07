const employeeService = require("./employee.service");

exports.getAllEmployees = async (req, res) => {

    try {

        const employees = await employeeService.getAllEmployees();

        res.status(200).json({
            success: true,
            data: employees
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch employees"
        });

    }

};

exports.createEmployee = async (req, res, next) => {

    try {

        const result = await employeeService.createEmployee(req.body,req.user,
    req.ip);

        res.status(201).json({

            success: true,

            message: "Employee created successfully",

            employeeId: result.insertId

        });

    } catch (error) {

        next(error);

    }

};

exports.updateEmployee = async (req, res, next) => {

    try {

        const employeeId = req.params.id;

        await employeeService.updateEmployee(
    employeeId,
    req.body,
    req.user,
    req.ip
);
        res.status(200).json({

            success: true,

            message: "Employee updated successfully"

        });

    } catch (error) {

        next(error);

    }

};

exports.deleteEmployee = async (req, res, next) => {

    console.log("1. Entered Controller");

    try {

        const employeeId = req.params.id;

        console.log("2. Employee ID:", employeeId);

        await employeeService.deleteEmployee(employeeId,
    req.user,
    req.ip);

        console.log("3. Service Completed");

        res.status(200).json({
            success: true,
            message: "Employee deleted successfully"
        });

        console.log("4. Response Sent");

    } catch (error) {

        console.log("5. Error:", error);

        next(error);

    }

};