const dashboardService = require("./dashboard.service");

exports.getDashboardStatistics = async (req, res, next) => {

    try {

        const dashboardData =
            await dashboardService.getDashboardStatistics();

        res.status(200).json({

            success: true,

            data: dashboardData

        });

    } catch (error) {

        next(error);

    }

};