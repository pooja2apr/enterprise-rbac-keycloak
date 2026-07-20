# Project Log

## Day 1 – Keycloak Setup

Completed:

* Installed Keycloak
* Created aarvee-realm
* Configured enterprise-rbac-client
* Created realm roles
* Created test users
* Assigned roles
* Exported realm configuration
* Captured Keycloak screenshots

---

## Day 2 – Backend Foundation

Completed:

* Initialized Node.js backend
* Configured Express.js
* Connected MySQL database
* Created database schema
* Added sample data
* Organized backend project structure
* Updated README documentation

Next Steps:

* Implement JWT validation using Keycloak JWKS
* Build verifyToken middleware
* Create first protected API
## Day 3
* JWT authentication
* JWKS integration
* Token validation

## Day 4
* RBAC authorization middleware
* Protected dashboard endpoint
* Admin role validation

## Day 5 – Employee Management & Enterprise Error Handling

Completed:

### Employee Management

* Implemented Create Employee API
* Added required field validation
* Added duplicate email validation
* Implemented Update Employee API
* Added employee existence validation before update
* Added duplicate email validation during update
* Protected Employee APIs using RBAC

### Enterprise Architecture

* Implemented centralized error handling middleware
* Created custom AppError class
* Replaced controller-level error responses with global error handling
* Standardized HTTP status codes (400, 404, 409, 500)
* Improved controller structure using `next(error)`

### Business Logic

* Applied business validations in the Service layer
* Kept database operations isolated in the Repository layer
* Improved separation of concerns across Controller, Service, and Repository

### Testing

Successfully tested:

* Employee creation
* Employee update
* Required field validation
* Duplicate email validation
* Employee not found (404)
* Authorization using Admin role
* Global error handling

---

Next Steps:

* Implement Delete Employee API
* Add Audit Logging
* Create additional Keycloak users (HR, Manager, Employee)
* Build React frontend with role-based UI

## Day 6 – Employee CRUD & Enterprise Audit Logging

Completed:

* Implemented Delete Employee API
* Completed Employee CRUD module
* Built reusable Audit module
* Created audit_logs table
* Implemented Audit Repository and Service
* Integrated audit logging with Create Employee API
* Integrated audit logging with Update Employee API
* Integrated audit logging with Delete Employee API
* Captured authenticated Keycloak username in audit logs
* Captured client IP address in audit logs
* Verified audit entries in MySQL

## Day 7 – Department Module & SQL JOIN

Completed:

### Department Module

* Implemented Department CRUD APIs
* Created Department Repository layer
* Created Department Service layer
* Created Department Controller layer
* Configured Department Routes
* Added required field validation
* Added duplicate department validation
* Protected Department APIs using RBAC

### Database Enhancements

* Created departments table
* Established relationship between employees and departments
* Implemented SQL JOIN between employees and departments
* Enhanced Employee API to return department details
* Improved API response for frontend consumption

### Testing

Successfully tested:

* Department Create API
* Department Update API
* Department Delete API
* Department List API
* Employee API with Department JOIN
* Authorization using Admin role

---

Next Steps:

* Build Dashboard Statistics API
* Add Employee Filtering
* Implement Pagination
* Start React frontend

## Day 8 – Dashboard & Dynamic Filtering

Completed:

### Dashboard Module

* Implemented Dashboard Repository
* Implemented Dashboard Service
* Implemented Dashboard Controller
* Built Dashboard Statistics API
* Added employee count using SQL COUNT()
* Added active employee count
* Added inactive employee count
* Added department count

### Employee Filtering

* Implemented dynamic employee filtering
* Added filtering by status
* Added filtering by department
* Added filtering by designation
* Built dynamic SQL query generation
* Used parameterized queries to prevent SQL injection
* Learned dynamic WHERE clause construction using `WHERE 1 = 1`

### Architecture

* Maintained Controller → Service → Repository architecture
* Kept business logic in Service layer
* Kept SQL logic in Repository layer

### Testing

Successfully tested:

* Dashboard Statistics API
* Employee filtering by status
* Employee filtering by department
* Employee filtering by designation
* Combined filters
* SQL JOIN with filters

---
## Day 9 – React Frontend Integration & Role-Based Employee Management

Completed:

### React Frontend

* Initialized React application using Vite
* Configured React Router
* Created application structure
* Implemented Dashboard page
* Implemented Employees page
* Implemented Departments page
* Built reusable Navbar component

### Keycloak Integration

* Configured React Keycloak Provider
* Integrated Keycloak authentication
* Implemented secure login
* Implemented logout functionality
* Protected React application using Keycloak
* Displayed authenticated username
* Displayed authenticated email
* Displayed assigned realm roles

### Axios Integration

* Created reusable Axios instance
* Automatically attached JWT access token to every API request
* Connected React frontend with protected backend APIs

### Employee Management UI

* Displayed employee list from backend API
* Implemented Create Employee form
* Connected Create Employee API
* Implemented Edit Employee form
* Connected Update Employee API
* Implemented Delete Employee functionality
* Automatically refreshed employee list after Create, Update and Delete operations

### Role-Based UI

* Displayed Create Employee button only for Admin and HR roles
* Displayed Edit button only for Admin and HR roles
* Displayed Delete button only for Admin role
* Restricted frontend actions based on Keycloak roles

### Testing

Successfully tested:

* Keycloak Login
* JWT Authentication
* Protected React Routes
* Employee List API
* Employee Create
* Employee Update
* Employee Delete
* Role-Based UI
* React to Backend Integration
* Audit Logging

---

Next Steps:

* Department Management UI
* Audit Log UI
* Dashboard Statistics Integration
* Employee Search & Pagination
* Improve UI Styling
* Update GitHub Documentation
* Publish Medium Article
