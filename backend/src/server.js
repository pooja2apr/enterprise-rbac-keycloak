
require("dotenv").config();
console.log(process.env.KEYCLOAK_URL);
console.log(process.env.KEYCLOAK_REALM);
const app = require("./app");



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});