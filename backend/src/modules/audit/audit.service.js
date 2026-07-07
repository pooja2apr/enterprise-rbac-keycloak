const auditRepository = require("./audit.repository");

exports.logAction = async (auditData) => {

    return await auditRepository.logAction(auditData);

};