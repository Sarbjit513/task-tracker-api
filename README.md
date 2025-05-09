# Task Tracker API - Project Documentation

Welcome to the **Task Tracker API**! This project is a comprehensive backend API built using **Node.js**, **Express**, and **MongoDB**. It allows users to create, read, update, and delete (CRUD) tasks, making it ideal for tracking tasks in various projects. This API is part of my portfolio to showcase my backend development skills.

## Features

* Create new tasks
* Get a list of all tasks
* Retrieve a single task by ID
* Update an existing task
* Delete a task
* MongoDB integration for data persistence
* RESTful API design

## Technologies Used

* Node.js
* Express.js
* MongoDB (with Mongoose)
* Postman (for testing)
* Git and GitHub (for version control)

## Prerequisites

Make sure you have the following installed:

* Node.js (v18 or later)
* MongoDB Atlas account or local MongoDB server

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Sarbjit513/task-tracker-api.git
   cd task-tracker-api
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB connection:

   * Create a `.env` file in the root directory
   * Add the following line (replace `<your_connection_string>` with your MongoDB connection string):

   ```
   MONGO_URI=<your_connection_string>
   ```

4. Run the server:

   ```bash
   node app.js
   ```

   The server should now be running at `http://localhost:5000`

## API Endpoints

### Create a Task

**Endpoint:** `POST /tasks`

* Creates a new task.
* **Request Body:**

```json
{
  "title": "Task title",
  "description": "Task description",
  "completed": false
}
```

### Get All Tasks

**Endpoint:** `GET /tasks`

* Retrieves a list of all tasks.

### Get a Single Task

**Endpoint:** `GET /tasks/:id`

* Retrieves a task by its ID.

### Update a Task

**Endpoint:** `PUT /tasks/:id`

* Updates a task by its ID.
* **Request Body:**

```json
{
  "title": "Updated task title",
  "description": "Updated task description",
  "completed": true
}
```

### Delete a Task

**Endpoint:** `DELETE /tasks/:id`

* Deletes a task by its ID.

## Testing the API

Use **Postman** or **cURL** to test the API endpoints. Make sure your server is running before testing.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you like.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## Contact

For questions or collaboration, reach out via GitHub: [Sarbjit513](https://github.com/Sarbjit513)




