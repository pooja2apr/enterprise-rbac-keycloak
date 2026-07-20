import Navbar from "../components/Navbar";
import { useKeycloak } from "@react-keycloak/web";
import { getRoles } from "../utils/roleUtils";

function Dashboard() {

    const { keycloak } = useKeycloak();

    const roles = getRoles(keycloak).filter(role =>
        ![
            "offline_access",
            "uma_authorization",
            "default-roles-aarvee-realm"
        ].includes(role)
    );

    return (

        <>
            <Navbar />

            <h2>Dashboard</h2>

            <p>
                <strong>User:</strong> {keycloak.tokenParsed?.preferred_username}
            </p>

            <p>
                <strong>Email:</strong> {keycloak.tokenParsed?.email}
            </p>

            <p>
                <strong>Roles:</strong> {roles.join(", ")}
            </p>

        </>

    );

}

export default Dashboard;