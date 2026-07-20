import { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";

import Navbar from "../components/Navbar";
import api from "../services/api";
import { hasRole, hasAnyRole } from "../utils/roleUtils";

function Employees() {

    const { keycloak } = useKeycloak();

    const [employees, setEmployees] = useState([]);

    const [editingEmployee, setEditingEmployee] = useState(null);
    const [departments, setDepartments] = useState([]);

    const [showCreateForm, setShowCreateForm] = useState(false);

const [newEmployee, setNewEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    department_id: "",
    designation: "",
    status: "ACTIVE"
});

    useEffect(() => {
        fetchDepartments();
        fetchEmployees();

    }, []);

    const fetchDepartments = async () => {

    try {

        const response = await api.get("/departments");

        setDepartments(response.data.data);

    } catch (error) {

        console.error(error);

    }

};

    const fetchEmployees = async () => {

        try {

            const response = await api.get("/employees");

            setEmployees(response.data.data);

        } catch (error) {

            console.error(error);

        }

    };
    const deleteEmployee = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {

        await api.delete(`/employees/${id}`);

        alert("Employee deleted successfully.");

        fetchEmployees();

    } catch (error) {

        console.error(error);

        alert("Failed to delete employee.");

    }

};

const updateEmployee = async () => {

    try {

        await api.put(
            `/employees/${editingEmployee.employee_id}`,
            editingEmployee
        );

        alert("Employee updated successfully.");

        fetchEmployees();

        setEditingEmployee(null);

    } catch (error) {

        console.error(error);

        alert("Failed to update employee.");

    }

};

const createEmployee = async () => {

    try {

        await api.post(
            "/employees",
            newEmployee
        );

        alert("Employee created successfully.");

        fetchEmployees();

        setNewEmployee({
            first_name: "",
            last_name: "",
            email: "",
            department_id: "",
            designation: "",
            status: "ACTIVE"
        });

        setShowCreateForm(false);

    } catch (error) {

        console.error(error);

        alert("Failed to create employee.");

    }

};

    return (

        <>
            <Navbar />

            <h2>Employees</h2>

            {hasAnyRole(keycloak, ["admin", "hr"]) && (
                <button onClick={() => setShowCreateForm(true)}>
    Create Employee
</button>
            )}

            <table border="1" cellPadding="8">

                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {employees.map((employee) => (

                        <tr key={employee.employee_id}>

                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.department_name}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.status}</td>

                            <td>

    {hasAnyRole(keycloak, ["admin", "hr"]) && (
        <button
    onClick={() => setEditingEmployee(employee)}
>
    Edit
</button>
    )}

    {hasRole(keycloak, "admin") && (
        <button
            onClick={() => deleteEmployee(employee.employee_id)}
        >
            Delete
        </button>
    )}

</td>

                        </tr>

                    ))}

                </tbody>

            </table>
            {showCreateForm && (

    <div>

        <h2>Create Employee</h2>

        <div>

            <label>First Name</label>

            <br />

            <input
                type="text"
                value={newEmployee.first_name}
                onChange={(e) =>
                    setNewEmployee({
                        ...newEmployee,
                        first_name: e.target.value
                    })
                }
            />

        </div>

        <br />

        <div>

            <label>Last Name</label>

            <br />

            <input
                type="text"
                value={newEmployee.last_name}
                onChange={(e) =>
                    setNewEmployee({
                        ...newEmployee,
                        last_name: e.target.value
                    })
                }
            />

        </div>

        <br />

        <div>

            <label>Email</label>

            <br />

            <input
                type="email"
                value={newEmployee.email}
                onChange={(e) =>
                    setNewEmployee({
                        ...newEmployee,
                        email: e.target.value
                    })
                }
            />

        </div>

        <br />

        <div>

            <label>Designation</label>

            <br />

            <input
                type="text"
                value={newEmployee.designation}
                onChange={(e) =>
                    setNewEmployee({
                        ...newEmployee,
                        designation: e.target.value
                    })
                }
            />

        </div>

        <br />

        <div>

            <label>Department</label>

            <br />

            <select
                value={newEmployee.department_id}
                onChange={(e) =>
                    setNewEmployee({
                        ...newEmployee,
                        department_id: Number(e.target.value)
                    })
                }
            >

                <option value="">Select Department</option>

                {departments.map((department) => (

                    <option
                        key={department.department_id}
                        value={department.department_id}
                    >
                        {department.department_name}
                    </option>

                ))}

            </select>

        </div>

        <br />

        <div>

            <label>Status</label>

            <br />

            <select
                value={newEmployee.status}
                onChange={(e) =>
                    setNewEmployee({
                        ...newEmployee,
                        status: e.target.value
                    })
                }
            >
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
            </select>

        </div>

        <br />

       <button
    onClick={createEmployee}
>
    Save Employee
</button>

    </div>

)}
            {editingEmployee && (

    <div>

        <h2>Edit Employee</h2>

        <p>Employee ID: {editingEmployee.employee_id}</p>

       <div>

    <label>First Name</label>

    <br />

    <input
        type="text"
        value={editingEmployee.first_name}
        onChange={(e) =>
            setEditingEmployee({
                ...editingEmployee,
                first_name: e.target.value
            })
        }
    />

</div>

        <div>

    <label>Last Name</label>

    <br />

    <input
        type="text"
        value={editingEmployee.last_name}
        onChange={(e) =>
            setEditingEmployee({
                ...editingEmployee,
                last_name: e.target.value
            })
        }
    />

</div>
<div>

    <label>Email</label>

    <br />

    <input
        type="email"
        value={editingEmployee.email}
        onChange={(e) =>
            setEditingEmployee({
                ...editingEmployee,
                email: e.target.value
            })
        }
    />

</div>
<div>

    <label>Designation</label>

    <br />

    <input
        type="text"
        value={editingEmployee.designation}
        onChange={(e) =>
            setEditingEmployee({
                ...editingEmployee,
                designation: e.target.value
            })
        }
    />

</div>
<div>

    <label>Status</label>

    <br />

    <select
        value={editingEmployee.status}
        onChange={(e) =>
            setEditingEmployee({
                ...editingEmployee,
                status: e.target.value
            })
        }
    >
        <option value="ACTIVE">ACTIVE</option>
        <option value="INACTIVE">INACTIVE</option>
    </select>

</div>
<div>

    <label>Department</label>

    <br />

    <select
        value={editingEmployee.department_id}
        onChange={(e) =>
            setEditingEmployee({
                ...editingEmployee,
                department_id: Number(e.target.value)
            })
        }
    >

        {departments.map((department) => (

            <option
                key={department.department_id}
                value={department.department_id}
            >
                {department.department_name}
            </option>

        ))}

    </select>

</div>
<button
    onClick={updateEmployee}
>
    Update Employee
</button>
    </div>

)}

        </>

    );

}

export default Employees;