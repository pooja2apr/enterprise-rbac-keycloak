import { useKeycloak } from "@react-keycloak/web";

function Login() {

    const { keycloak } = useKeycloak();

    return (

        <div>

            <h2>Enterprise RBAC System</h2>

            <button onClick={() => keycloak.login()}>
                Login with Keycloak
            </button>

        </div>

    );

}

export default Login;