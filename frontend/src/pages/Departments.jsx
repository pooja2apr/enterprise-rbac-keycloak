import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import api from "../services/api";

function Departments() {

    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        
        fetchDepartments();

    }, []);

    const fetchDepartments = async () => {

        try {

            const response = await api.get("/departments");

            setDepartments(response.data.data);

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <>
            <Navbar />

            <h2>Departments</h2>

            <ul>

                {departments.map((department) => (

                    <li key={department.department_id}>

                        {department.department_name}

                    </li>

                ))}

            </ul>

        </>

    );

}

export default Departments;