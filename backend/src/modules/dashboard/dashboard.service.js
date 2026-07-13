const dashboardRepository = require("./dashboard.repository");

exports.getDashboardStatistics = async () => {

    const totalEmployees =
        await dashboardRepository.getTotalEmployees();

    const activeEmployees =
        await dashboardRepository.getActiveEmployees();

    const inactiveEmployees =
        await dashboardRepository.getInactiveEmployees();

    const totalDepartments =
        await dashboardRepository.getTotalDepartments();

    return {

        totalEmployees: totalEmployees.totalEmployees,

        activeEmployees: activeEmployees.activeEmployees,

        inactiveEmployees: inactiveEmployees.inactiveEmployees,

        totalDepartments: totalDepartments.totalDepartments

    };

};