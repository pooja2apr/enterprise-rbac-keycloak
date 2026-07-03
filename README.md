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

Current database contains the following tables:

* departments
* employees
* audit_logs

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

* Project initialization
* GitHub repository
* Express backend setup
* MySQL database connection
* Database schema
* Keycloak realm configuration
* Client configuration
* Role creation
* User creation
* Role mapping
* Realm export
* Initial documentation

### In Progress

* JWT Validation
* RBAC Middleware
* Employee APIs
* Audit Logging

### Planned

* Dashboard APIs
* Employee CRUD
* Protected Routes
* React Frontend
* Audit Dashboard
* API Documentation
* Architecture Diagrams
* Medium Article
* Deployment

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

---

## Upcoming Tasks

* JWT Validation using JWKS
* verifyToken middleware
* authorizeRoles middleware
* Protected REST APIs
* Employee CRUD APIs
* Audit Logging
* React Integration

---

## License

This project is developed for educational and portfolio purposes.
