
const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.user?.role; // Assuming `req.user` is populated by the `authenticate` middleware
         console.log(userRole)
        if (!userRole) {
            return res.status(403).json({ message: 'Forbidden: Role not found' });
        }

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: ' you are not Admin ' });
        }

        next();
    };
};

module.exports = roleMiddleware;
