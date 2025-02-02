# Express CRUD with Role-Based Access Control

## Project Overview
This project is a CRUD (Create, Read, Update, Delete) application built using Node.js and Express.js. It implements Role-Based Access Control (RBAC) to manage user permissions effectively.

## Key Features
- RESTful APIs for CRUD operations.
- Role-Based Access Control (RBAC) for managing permissions.
- MongoDB integration for data persistence.
- Secure authentication using JSON Web Tokens (JWT).
- Live deployment on Vercel.

## Technologies Used
- **Node.js** - Backend runtime environment.
- **Express.js** - Framework for creating RESTful APIs.
- **MongoDB** - NoSQL database for storing data.
- **JWT** - Secure authentication mechanism.
- **dotenv** - Environment variable management.
- **body-parser** - Middleware for parsing request bodies.
- **bcrypt** - Secure password hashing.

## Role-Based Access Control (RBAC)
### Roles Implemented
1. **Admin:**
   - Full access to all endpoints.
   - Can create, read, update, and delete any resource.
2. **User:**
   - Limited access to specific resources.
   - Can read and perform limited write operations (depending on ownership).

Middleware intercepts requests to validate roles before processing them.

## CRUD Operations
- **Create** - Add new resources (e.g., users, posts).
- **Read** - Retrieve existing resources.
- **Update** - Modify existing resources.
- **Delete** - Remove resources.

## API Endpoints
### Item Endpoints
| Method  | Endpoint                      | Description             | Role Access  |
|---------|--------------------------------|-------------------------|--------------|
| POST    | `/api/v1/item/create`         | Create a new item       | Admin        |
| GET     | `/api/v1/item/all`            | Fetch all items         | Admin, User  |
| GET     | `/api/v1/item/byId/:id`       | Fetch item by ID        | Admin, User  |
| PUT     | `/api/v1/item/update/:id`     | Update an item          | Admin        |
| DELETE  | `/api/v1/item/delete/:id`     | Delete a resource       | Admin        |

### User Endpoints
| Method  | Endpoint                 | Description         |
|---------|---------------------------|---------------------|
| POST    | `/api/v1/user/register`   | Register a new user |
| POST    | `/api/v1/user/login`      | User login         |
| POST    | `/api/v1/user/logout`     | User logout        |

## Deployment
- **Live Link:** [Express CRUD App](https://express-crud-beige.vercel.app)


## Author
**Sarfaraz Adil**  
Email: [sarfarazadil18@gmail.com](mailto:sarfarazadil18@gmail.com)

