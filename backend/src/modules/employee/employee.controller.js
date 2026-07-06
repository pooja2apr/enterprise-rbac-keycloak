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

        const result = await employeeService.createEmployee(req.body);

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
            req.body
        );

        res.status(200).json({

            success: true,

            message: "Employee updated successfully"

        });

    } catch (error) {

        next(error);

    }

};