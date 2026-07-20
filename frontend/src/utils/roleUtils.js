export const getRoles = (keycloak) => {
    return keycloak.tokenParsed?.realm_access?.roles || [];
};

export const hasRole = (keycloak, role) => {
    return getRoles(keycloak).includes(role);
};

export const hasAnyRole = (keycloak, roles) => {
    return roles.some(role => hasRole(keycloak, role));
};