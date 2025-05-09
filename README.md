
# Task Tracker API

This is a **Task Tracker API** built with **Node.js**, **Express**, and **MongoDB**. It allows you to create, read, update, and delete (CRUD) tasks for tracking purposes. This project is part of my portfolio to showcase my backend development skills.

## Features

* Create new tasks
* Get a list of all tasks
* Update an existing task
* Delete a task

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman (for testing)

## Getting Started

### Prerequisites

* Node.js installed
* MongoDB Atlas account or local MongoDB server

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Sarbjit513/task-tracker-api.git
   cd task-tracker-api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the MongoDB connection:

   * Replace the MongoDB URI in `app.js` with your own MongoDB connection string.

4. Start the server:

   ```bash
   node app.js
   ```

5. Your server should now be running at **[http://localhost:5000](http://localhost:5000)**.

## API Endpoints

### Create a Task

* **Endpoint:** `POST /tasks`
* **Description:** Create a new task.
* **Request Body:**

```json
{
    "title": "Sample Task",
    "description": "This is a sample task.",
    "completed": false
}
```

### Get All Tasks

* **Endpoint:** `GET /tasks`
* **Description:** Retrieve a list of all tasks.

### Get a Task by ID

* **Endpoint:** `GET /tasks/:task_id`
* **Description:** Retrieve a single task by its ID.

### Update a Task

* **Endpoint:** `PUT /tasks/:task_id`
* **Description:** Update a task by its ID.
* **Request Body:**

```json
{
    "title": "Updated Task",
    "description": "Updated description",
    "completed": true
}
```

### Delete a Task

* **Endpoint:** `DELETE /tasks/:task_id`
* **Description:** Delete a task by its ID.

## Future Improvements

* Add user authentication (JWT)
* Add due dates and priority levels for tasks
* Add search and filtering capabilities

## License

This project is licensed under the MIT License.
