const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Task = require('./models/Task');

const app = express();

// Middleware to parse JSON body
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bhangu513:Jazzyb513@cluster0.8vb8y2e.mongodb.net/task-tracker?retryWrites=true&w=majority')
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define POST route to create a task
app.post('/tasks', async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        const task = new Task({
            title,
            description,
            completed
        });

        await task.save();
        res.status(201).send(task);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(400).send({ message: 'Failed to create task', error });
    }
});

// Define GET route to fetch all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).send({ message: 'Failed to fetch tasks', error });
    }
});

// Define GET route to fetch a single task by ID
app.get('/tasks/:task_id', async (req, res) => {
    try {
        // Remove any leading or trailing whitespace
        const taskId = req.params.task_id.trim();  
        const task = await Task.findById(taskId);
        
        if (!task) {
            return res.status(404).send({ message: 'Task not found' });
        }

        res.status(200).send(task);
    } catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).send({ message: 'Failed to fetch task', error });
    }
});
app.put('/tasks/:task_id', async (req, res) => {
    try {
        const taskId = req.params.task_id;
        console.log('Updating task with ID:', taskId);  // Log task_id
        console.log('Request Body:', req.body);  // Log the body to make sure it’s correct

        const { title, description, completed } = req.body;

        // Use Mongoose's ObjectId to ensure the ID is in the correct format
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { title, description, completed },
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).send({ message: 'Task not found' });
        }

        res.send(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).send({ message: 'Failed to update task', error });
    }
});
// Soft delete a task
app.delete('/tasks/:task_id', async (req, res) => {
    try {
        const taskId = req.params.task_id;
        const deletedTask = await Task.findByIdAndUpdate(
            taskId,
            { deleted: true },
            { new: true }
        );

        if (!deletedTask) {
            return res.status(404).send({ message: 'Task not found' });
        }

        res.send({ message: 'Task deleted (soft)', task: deletedTask });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).send({ message: 'Failed to delete task', error });
    }
});

// Partially update a task by ID
app.patch('/tasks/:task_id', async (req, res) => {
    try {
        const taskId = req.params.task_id;
        const updates = req.body;

        // Make sure the updates are not empty
        if (Object.keys(updates).length === 0) {
            return res.status(400).send({ message: 'No fields to update' });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            updates,
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).send({ message: 'Task not found' });
        }

        res.send(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).send({ message: 'Failed to update task', error });
    }
});


// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});

