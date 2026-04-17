require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

// Temporary in-memory storage
let tasks = [];
let nextId = 1;

// GET all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// POST create task
app.post('/api/tasks', (req, res) => {
  const task = { id: nextId++, ...req.body };
  tasks.push(task);
  res.status(201).json(task);
});

// PUT update task
app.put('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Task not found' });
  tasks[index] = { ...tasks[index], ...req.body };
  res.json(tasks[index]);
});

// DELETE task
app.delete('/api/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: 'Task deleted successfully' });
});

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'CRUD API is running!' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000');
});