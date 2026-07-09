const departmentService = require("./department.service");

// ==========================
// GET ALL DEPARTMENTS
// ==========================
exports.getAllDepartments = async (req, res, next) => {

    try {

        const departments =
            await departmentService.getAllDepartments();

        res.status(200).json({

            success: true,

            data: departments

        });

    } catch (error) {

        next(error);

    }

};

// ==========================
// CREATE DEPARTMENT
// ==========================
exports.createDepartment = async (req, res, next) => {

    try {

        const result =
            await departmentService.createDepartment(
                req.body,
                req.user,
                req.ip
            );

        res.status(201).json({

            success: true,

            message: "Department created successfully",

            departmentId: result.insertId

        });

    } catch (error) {

        next(error);

    }

};

// ==========================
// UPDATE DEPARTMENT
// ==========================
exports.updateDepartment = async (req, res, next) => {

    try {

        const departmentId = req.params.id;

        await departmentService.updateDepartment(

            departmentId,

            req.body,

            req.user,

            req.ip

        );

        res.status(200).json({

            success: true,

            message: "Department updated successfully"

        });

    } catch (error) {

        next(error);

    }

};

// ==========================
// DELETE DEPARTMENT
// ==========================
exports.deleteDepartment = async (req, res, next) => {

    try {

        const departmentId = req.params.id;

        await departmentService.deleteDepartment(

            departmentId,

            req.user,

            req.ip

        );

        res.status(200).json({

            success: true,

            message: "Department deleted successfully"

        });

    } catch (error) {

        next(error);

    }

};