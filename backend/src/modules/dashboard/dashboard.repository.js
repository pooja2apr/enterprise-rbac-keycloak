const db = require("../../config/db");

// Total Employees
exports.getTotalEmployees = () => {
    return new Promise((resolve, reject) => {

        const query = `
            SELECT COUNT(*) AS totalEmployees
            FROM employees
        `;

        db.query(query, (err, results) => {

            if (err) {
                return reject(err);
            }

            resolve(results[0]);

        });

    });
};

// Active Employees
exports.getActiveEmployees = () => {
    return new Promise((resolve, reject) => {

        const query = `
            SELECT COUNT(*) AS activeEmployees
            FROM employees
            WHERE status = 'ACTIVE'
        `;

        db.query(query, (err, results) => {

            if (err) {
                return reject(err);
            }

            resolve(results[0]);

        });

    });
};

// Inactive Employees
exports.getInactiveEmployees = () => {
    return new Promise((resolve, reject) => {

        const query = `
            SELECT COUNT(*) AS inactiveEmployees
            FROM employees
            WHERE status = 'INACTIVE'
        `;

        db.query(query, (err, results) => {

            if (err) {
                return reject(err);
            }

            resolve(results[0]);

        });

    });
};

// Total Departments
exports.getTotalDepartments = () => {
    return new Promise((resolve, reject) => {

        const query = `
            SELECT COUNT(*) AS totalDepartments
            FROM departments
        `;

        db.query(query, (err, results) => {

            if (err) {
                return reject(err);
            }

            resolve(results[0]);

        });

    });
};