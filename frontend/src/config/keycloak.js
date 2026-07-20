import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "aarvee-realm",
    clientId: "enterprise-rbac-client"
});

export default keycloak;