# Backend 
This project is a TypeScript-based backend server built with Express and Sequelize. It connects to a MySQL database and includes various essential dependencies for development and production. 

## Installation 
1. **Clone the repository:** 
```
bash git clone <repository-url> 
cd <repository-name> 
```

2. **Install dependencies**:

Run `npm i` to install the project dependencies.
```bash
npm i
```
## Environment Configuration
Create a .env file in the root directory of the project. Here is an example configuration:
```
PORT=3000
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=yourdatabase
JWT_SECRET=yourjwtsecret

```
Replace the placeholders with your actual database credentials and JWT secret.

##Database Setup
 **Create a MySQL database:**

Use the MySQL command line or a tool like phpMyAdmin to create a new database.
```
CREATE DATABASE yourdatabase;
```
Update your .env file with the database connection details.
