# Tasks CRUD API

A simple RESTful API for managing tasks using Node.js and Express.

## 🚀 Live API
https://tasks-crud-api-nf8d.onrender.com

## 📌 Features
- Create a task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB (if used)

## 📂 API Endpoints

### GET all tasks
GET /tasks

### GET single task
GET /tasks/:id

### CREATE task
POST /tasks  
Body:
```json
{
  "title": "Sample Task",
  "completed": false
}


