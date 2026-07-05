const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

console.log("KEYCLOAK_URL:", process.env.KEYCLOAK_URL);
console.log("KEYCLOAK_REALM:", process.env.KEYCLOAK_REALM);
const client = jwksClient({
    jwksUri: `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/certs`
});

function getKey(header, callback) {

    client.getSigningKey(header.kid, (err, key) => {

        if (err) {
            return callback(err);
        }

        callback(null, key.getPublicKey());

    });

}

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {

        return res.status(401).json({
            success: false,
            message: "Bearer token missing"
        });

    }

    const token = authHeader.split(" ")[1];

    jwt.verify(
        token,
        getKey,
        {
            algorithms: ["RS256"],
            issuer: `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}`
        },
        (err, decoded) => {

            if (err) {

    console.error("JWT Verification Error:", err);

    return res.status(401).json({
        success: false,
        message: err.message
    });

}

            req.user = decoded;
            console.log("Decoded User:");
            console.log(decoded);

            next();

        }
    );

};