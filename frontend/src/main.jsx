import React from "react";
import ReactDOM from "react-dom/client";
import { ReactKeycloakProvider } from "@react-keycloak/web";

import App from "./App";
import keycloak from "./config/keycloak";
import "./index.css";

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <ReactKeycloakProvider
            authClient={keycloak}
            initOptions={{
                onLoad: "login-required",
                checkLoginIframe: false
            }}
        >
            <App />
        </ReactKeycloakProvider>
    </React.StrictMode>
);