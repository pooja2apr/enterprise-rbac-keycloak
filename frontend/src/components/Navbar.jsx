import { Link } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import { hasRole, hasAnyRole } from "../utils/roleUtils";

function Navbar() {

    const { keycloak } = useKeycloak();

    return (

        <nav>

            <Link to="/dashboard">Dashboard</Link>

            {hasAnyRole(keycloak, ["admin", "hr", "manager"]) && (
                <>
                    {" | "}
                    <Link to="/employees">Employees</Link>
                </>
            )}

            {hasAnyRole(keycloak, ["admin", "hr"]) && (
                <>
                    {" | "}
                    <Link to="/departments">Departments</Link>
                </>
            )}

        </nav>

    );

}

export default Navbar;