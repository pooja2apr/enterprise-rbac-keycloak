# Enterprise Role-Based Access Control (RBAC) using Keycloak

## Overview

This project demonstrates an enterprise-grade Role-Based Access Control (RBAC) system using Keycloak for authentication and authorization.

The application follows modern Identity and Access Management (IAM) practices by implementing secure authentication with OpenID Connect (OIDC), JSON Web Tokens (JWT), and role-based authorization.

This project is being developed as a portfolio project to demonstrate enterprise IAM architecture, secure backend development, and best practices.

---

## Technology Stack

### Backend

* Node.js
* Express.js
* MySQL
* JWT
* JWKS
* Keycloak

### Frontend

* React (Coming Soon)

### Identity & Security

* Keycloak
* OAuth 2.0
* OpenID Connect (OIDC)
* Role-Based Access Control (RBAC)

### Tools

* Git
* GitHub
* Postman
* VS Code

---

## Project Structure

```text
enterprise-rbac-keycloak/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── modules/
│   │   │   ├── employee/
│   │   │   ├── dashboard/
│   │   │   └── audit/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── database/
├── diagrams/
├── docs/
├── frontend/
├── keycloak/
│   ├── realm-export/
│   └── screenshots/
├── postman/
├── screenshots/
└── README.md
```

---

## Database Design

Current database consists of the following tables:

| Table | Description |
|--------|-------------|
| employees | Stores employee information |
| departments | Stores department details |
| audit_logs | Stores security and audit events |

---

## REST APIs

### Dashboard

| Method | Endpoint |
|---------|----------|
| GET | /api/dashboard |

### Employees

| Method | Endpoint |
|---------|----------|
| GET | /api/employees |
| POST | /api/employees |
| PUT | /api/employees/:id |
| DELETE | /api/employees/:id |

### Departments

| Method | Endpoint |
|---------|----------|
| GET | /api/departments |
| POST | /api/departments |
| PUT | /api/departments/:id |
| DELETE | /api/departments/:id |
---

## Keycloak Configuration

### Realm

aarvee-realm

### Client

enterprise-rbac-client

### Roles

* admin
* hr
* manager
* employee
* auditor

---

## Features

### Completed

- Project initialization
- GitHub repository
- Express backend setup
- MySQL database connection
- Database schema
- Keycloak realm configuration
- Client configuration
- Realm roles
- Test users
- JWT Validation using JWKS
- Role-Based Authorization Middleware
- Centralized Error Handling
- Enterprise Audit Logging
- Employee CRUD APIs
- Department CRUD APIs
- Employee & Department Validation
- Duplicate Email Validation
- Duplicate Department Validation
- SQL JOIN (Employee + Department)

### In Progress

- Dashboard Statistics API

### Planned

- Search & Filtering
- Pagination
- React Frontend
- Keycloak Event Listener SPI
- API Documentation
- Architecture Diagrams
- Deployment
---

## Development Progress

### Day 1

* Keycloak installation and configuration
* Realm creation
* Client creation
* Roles and users
* Realm export
* Screenshots

### Day 2

* Backend initialization
* MySQL connection
* Database schema
* Backend folder structure
* Initial project documentation

### Day 3
* JWT authentication
* JWKS integration
* Token validation
### Day 4
* RBAC authorization middleware
* Protected dashboard endpoint
* Admin role validation

### Day 5
* Centralized Error Handling
* Custom AppError
* Global Error Middleware
* Update Employee API
* Employee existence validation
* Duplicate email validation
* Required field validation
* Admin & HR can update employees
* JWT Authentication
* Role Authorization

### Day 6

- Employee DELETE API
- Enterprise Audit Logging
- Dynamic username from JWT
- Client IP Logging
- Audit Service Layer
- Audit Repository

### Day 7

- Department Module
- Department CRUD APIs
- Department Validation
- Duplicate Department Validation
- Department Audit Logging

### Day 8

- SQL JOIN between Employees and Departments
- Improved Employee API Response
- Enterprise Relational Database Design

---

## Upcoming Tasks
* Protected REST APIs
* Employee DELETE APIs
* Audit Logging
* React Integration

---

## License

This project is developed for educational and portfolio purposes.
