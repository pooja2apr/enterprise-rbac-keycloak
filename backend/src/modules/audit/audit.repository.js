const db = require("../../config/db");

exports.logAction = (audit) => {

    return new Promise((resolve, reject) => {

        const query = `
            INSERT INTO audit_logs
            (
                username,
                action,
                resource,
                status,
                ip_address
            )
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
            query,
            [
                audit.username,
                audit.action,
                audit.resource,
                audit.status,
                audit.ip_address
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