module.exports = (...allowedRoles) => {

    return (req, res, next) => {

        if (!req.user) {

            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            });

        }

        const userRoles = req.user.realm_access?.roles || [];

        const hasRole = allowedRoles.some(role =>
            userRoles.includes(role)
        );

        console.log("Allowed Roles:", allowedRoles);
        console.log("User Roles:", userRoles);
        console.log("Has Role:", hasRole);

        if (!hasRole) {

            return res.status(403).json({
                success: false,
                message: "Access denied"
            });

        }

        next();

    };

};