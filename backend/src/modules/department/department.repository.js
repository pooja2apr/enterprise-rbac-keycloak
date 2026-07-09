const db = require("../../config/db");

exports.getAllDepartments = () => {

    return new Promise((resolve, reject) => {

        const query = `
            SELECT *
            FROM departments
            ORDER BY department_name
        `;

        db.query(query, (err, results) => {

            if (err) {
                return reject(err);
            }

            resolve(results);

        });

    });

};

exports.findDepartmentByName = (departmentName) => {

    return new Promise((resolve, reject) => {

        const query = `
            SELECT *
            FROM departments
            WHERE department_name = ?
        `;

        db.query(
            query,
            [departmentName],
            (err, results) => {

                if (err) {
                    return reject(err);
                }

                resolve(results);

            }
        );

    });

};

exports.findDepartmentById = (departmentId) => {

    return new Promise((resolve, reject) => {

        const query = `
            SELECT *
            FROM departments
            WHERE department_id = ?
        `;

        db.query(
            query,
            [departmentId],
            (err, results) => {

                if (err) {
                    return reject(err);
                }

                resolve(results);

            }
        );

    });

};
exports.createDepartment = (department) => {

    return new Promise((resolve, reject) => {

        const query = `
            INSERT INTO departments
            (
                department_name
            )
            VALUES (?)
        `;

        db.query(
            query,
            [
                department.department_name
            ],
            (err, result) => {

                if (err) {
                    return reject(err);
                }

                resolve(result);

            }
        );

    });

};
exports.updateDepartment = (
    departmentId,
    department
) => {

    return new Promise((resolve, reject) => {

        const query = `
            UPDATE departments
            SET department_name = ?
            WHERE department_id = ?
        `;

        db.query(
            query,
            [
                department.department_name,
                departmentId
            ],
            (err, result) => {

                if (err) {
                    return reject(err);
                }

                resolve(result);

            }
        );

    });

};
exports.deleteDepartment = (departmentId) => {

    return new Promise((resolve, reject) => {

        const query = `
            DELETE FROM departments
            WHERE department_id = ?
        `;

        db.query(
            query,
            [departmentId],
            (err, result) => {

                if (err) {
                    return reject(err);
                }

                resolve(result);

            }
        );

    });

};