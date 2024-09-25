# Task Management API

A RESTful API built with Node.js and Express for managing tasks, featuring user authentication with JWT, error handling, and a well-organized project structure.

## Features

- **User Authentication:** Secure user registration and login with JWT (JSON Web Token) for protected routes.
- **Task Management:**
  - Create, read, update, and delete tasks (CRUD operations).
  - Assign tasks to specific users.
  - Mark tasks as completed or incomplete.
- **Error Handling:** Centralized error handling middleware for consistent and informative error responses.
- **Scalable Structure:** Organized project structure for easy maintenance and future expansion.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database set up and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ramymedhat25/Node.js_Task_Management
   ```

2. Navigate to the project directory:
   ```bash
   cd task-management-api
   ```
3. Install dependencies:

```bash
npm install

API Endpoints
Authentication:
POST /api/auth/register - Register a new user.
POST /api/auth/login - Login an existing user.
Tasks (Protected routes, require a valid JWT token in the Authorization header):
GET /api/tasks - Get all tasks for the logged-in user.
POST /api/tasks - Create a new task.
PUT /api/tasks/:id - Update an existing task.
DELETE /api/tasks/:id - Delete a task.
Future Enhancements
User profile management
Task filtering and sorting
Due dates for tasks
Notifications (in-app or email)
More comprehensive testing
Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues.

License
This project is licensed under the ISC License.
```
