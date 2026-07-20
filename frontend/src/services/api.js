import axios from "axios";
import keycloak from "../config/keycloak";

const api = axios.create({

    baseURL: "http://localhost:5000/api"

});

api.interceptors.request.use(

    async (config) => {

        if (keycloak.authenticated) {

            try {

                await keycloak.updateToken(30);

                config.headers.Authorization =
                    `Bearer ${keycloak.token}`;

            }

            catch (error) {

                console.error("Token refresh failed", error);

                keycloak.logout();

            }

        }

        return config;

    },

    (error) => Promise.reject(error)

);

export default api;