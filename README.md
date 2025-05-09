Task Tracker API

This is a Task Tracker API built with Node.js, Express, and MongoDB. It provides a simple way to create, read, update, and delete (CRUD) tasks. This project is part of my portfolio to showcase my backend development skills.

Features

Create new tasks

Get a list of all tasks

Update an existing task

Delete a task

Technologies Used

Node.js

Express.js

MongoDB

Mongoose

Postman (for testing)

Getting Started

Prerequisites

Node.js installed

MongoDB Atlas account or local MongoDB server

Installation

Clone this repository:

git clone https://github.com/Sarbjit513/task-tracker-api.git
cd task-tracker-api
npm install

Create a .env file in the root directory and add your MongoDB connection string:

MONGODB_URI=your-mongodb-connection-string
PORT=5000

Start the server:

node app.js

API Endpoints

Create a Task

Endpoint: POST /tasks

Body:

{
    "title": "New Task",
    "description": "Task description",
    "completed": false
}

Response:

{
    "_id": "<task-id>",
    "title": "New Task",
    "description": "Task description",
    "completed": false,
    "createdAt": "<timestamp>",
    "__v": 0
}

Get All Tasks

Endpoint: GET /tasks

Response:

[
    {
        "_id": "<task-id>",
        "title": "Sample Task",
        "description": "Sample description",
        "completed": false,
        "createdAt": "<timestamp>",
        "__v": 0
    }
]

Update a Task

Endpoint: PUT /tasks/<task-id>

Body:

{
    "title": "Updated Task",
    "description": "Updated description",
    "completed": true
}

Response:

{
    "_id": "<task-id>",
    "title": "Updated Task",
    "description": "Updated description",
    "completed": true,
    "createdAt": "<timestamp>",
    "__v": 0
}

Delete a Task

Endpoint: DELETE /tasks/<task-id>

Response:

{
    "message": "Task deleted successfully"
}

Future Improvements

Add user authentication (JWT)

Task filtering and search

Detailed error handling

Unit tests and integration tests

Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License

This project is licensed under the MIT License.

