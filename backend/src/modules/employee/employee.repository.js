const db = require("../../config/db");

exports.getAllEmployees = (filters) => {

    return new Promise((resolve, reject) => {

        let query = `
            SELECT
                e.employee_id,
                e.first_name,
                e.last_name,
                e.email,
                e.designation,
                e.status,
                e.created_at,
                e.updated_at,
                d.department_id,
                d.department_name
            FROM employees e
            LEFT JOIN departments d
                ON e.department_id = d.department_id
            WHERE 1 = 1
        `;

        const values = [];

        // Filter by Status
        if (filters.status) {
            query += ` AND e.status = ?`;
            values.push(filters.status);
        }

        // Filter by Department Name
        if (filters.department) {
            query += ` AND d.department_name = ?`;
            values.push(filters.department);
        }

        // Filter by Designation
        if (filters.designation) {
            query += ` AND e.designation = ?`;
            values.push(filters.designation);
        }

        query += ` ORDER BY e.employee_id`;

        db.query(query, values, (err, results) => {

            if (err) {
                return reject(err);
            }

            resolve(results);

        });

    });

};

exports.createEmployee = (employee) => {

    return new Promise((resolve, reject) => {

        const query = `
            INSERT INTO employees
            (
                first_name,
                last_name,
                email,
                department_id,
                designation,
                status
            )
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        db.query(
            query,
            [
                employee.first_name,
                employee.last_name,
                employee.email,
                employee.department_id,
                employee.designation,
                employee.status
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

exports.findEmployeeByEmail = (email) => {

    return new Promise((resolve, reject) => {

        const query = `
            SELECT *
            FROM employees
            WHERE email = ?
        `;

        db.query(
            query,
            [email],
            (err, results) => {

                if (err) {
                    return reject(err);
                }

                resolve(results);

            }
        );

    });

};

exports.findEmployeeById = (employeeId) => {

    return new Promise((resolve, reject) => {

        const query = `
            SELECT *
            FROM employees
            WHERE employee_id = ?
        `;

        db.query(
            query,
            [employeeId],
            (err, results) => {

                if (err) {
                    return reject(err);
                }

                resolve(results);

            }
        );

    });

};
exports.updateEmployee = (employeeId, employee) => {

    return new Promise((resolve, reject) => {

        const query = `
            UPDATE employees
            SET
                first_name = ?,
                last_name = ?,
                email = ?,
                department_id = ?,
                designation = ?,
                status = ?
            WHERE employee_id = ?
        `;

        db.query(
            query,
            [
                employee.first_name,
                employee.last_name,
                employee.email,
                employee.department_id,
                employee.designation,
                employee.status,
                employeeId
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

exports.deleteEmployee = (employeeId) => {

    console.log("Repository Started");

    return new Promise((resolve, reject) => {

        const query = `
            DELETE FROM employees
            WHERE employee_id = ?
        `;

        console.log(query);
        console.log(employeeId);

        db.query(
            query,
            [employeeId],
            (err, result) => {

                console.log("MySQL Callback Executed");

                if (err) {

                    console.log(err);

                    return reject(err);

                }

                console.log(result);

                resolve(result);

            }

        );

    });

};