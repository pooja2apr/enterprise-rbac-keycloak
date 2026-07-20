# Enterprise Role-Based Access Control (RBAC) using Keycloak

## Overview

This project demonstrates an enterprise-grade Role-Based Access Control (RBAC) application built using Keycloak, Node.js, Express.js, React, and MySQL.

The application follows modern Identity and Access Management (IAM) practices by implementing secure authentication using OpenID Connect (OIDC), JWT validation, role-based authorization, audit logging, and a React frontend integrated with protected REST APIs.

This project is being developed as a portfolio project to demonstrate enterprise IAM architecture, secure backend development, frontend integration, and clean layered architecture.

---

# Technology Stack

## Backend

- Node.js
- Express.js
- MySQL

## Frontend

- React
- React Router
- Axios
- Vite

## Identity & Security

- Keycloak
- OAuth 2.0
- OpenID Connect (OIDC)
- JWT
- JWKS
- Role-Based Access Control (RBAC)

## Tools

- Git
- GitHub
- Postman
- VS Code

---

# Project Architecture

```
React Frontend
       │
React Router
       │
Axios + JWT
       │
Express REST APIs
       │
Controller
       │
Service
       │
Repository
       │
MySQL Database
```

---

# Project Structure

```text
enterprise-rbac-keycloak/

backend/
│
├── src/
│   ├── config/
│   ├── middleware/
│   ├── modules/
│   │   ├── employee/
│   │   ├── department/
│   │   ├── dashboard/
│   │   └── audit/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── keycloak.js
│
database/
docs/
diagrams/
keycloak/
postman/
README.md
```

---

# Features

## Authentication

- Keycloak Login
- OpenID Connect (OIDC)
- JWT Authentication
- Logout

## Authorization

- Role-Based Access Control (RBAC)
- Admin
- HR
- Manager
- Employee
- Auditor

## Employee Management

- View Employees
- Create Employee
- Update Employee
- Delete Employee

## Dashboard

- Dashboard API
- Employee Count
- Department Count
- Active Employee Count

## Audit Logging

- Create Audit Log
- Update Audit Log
- Delete Audit Log
- Username Logging
- Client IP Logging

## Frontend

- React Router
- Protected Routes
- Axios Integration
- Keycloak Integration
- Role-Based UI

---

# Database

Current tables:

- departments
- employees
- audit_logs

---

# Keycloak Configuration

Realm

- aarvee-realm

Client

- enterprise-rbac-client

Roles

- admin
- hr
- manager
- employee
- auditor

---

# Development Progress

## Completed

### Backend

- Express.js Backend
- MySQL Integration
- Layered Architecture
- Global Error Handling
- JWT Validation
- JWKS Integration
- RBAC Middleware
- Employee CRUD APIs
- Department APIs
- Dashboard APIs
- Audit Logging

### Frontend

- React Setup
- React Router
- Keycloak Integration
- Protected Routes
- Axios Authentication
- Employee CRUD
- Role-Based UI

---

# Upcoming Features

- Audit Log UI
- Department CRUD
- Search & Pagination
- Dashboard Charts
- Responsive UI
- Docker Support
- Deployment

---

# License

This project is developed for educational and portfolio purposes.