# 📝 Dockerized Notes API

A simple and minimal REST API for managing notes, built with **Node.js**, **Express**, and **MongoDB**, and fully containerized using **Docker** and **Docker Compose**.

---

## 🚀 Features

- CRUD operations for notes
- RESTful API with JSON responses
- MongoDB integration via Mongoose
- Dockerized backend + MongoDB setup using `docker-compose`

---

## 📦 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Docker + Docker Compose

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Arpitha-nc/docker-notes-api.git
cd docker-notes-api

2. Run with Docker
Make sure Docker Desktop is running (Linux containers mode).

bash
Copy
Edit
docker-compose up --build
API will be available at: http://localhost:3000

🧪 API Endpoints

Method	Endpoint	Description
GET	/notes	Get all notes
POST	/notes	Create a new note
PUT	/notes/:id	Update a note
DELETE	/notes/:id	Delete a note
📄 Example Note (JSON)
json
Copy
Edit
{
  "title": "Learn Docker",
  "content": "Containerize everything 🚢"
}



📁 Project Structure
pgsql
Copy
Edit
.
├── docker-compose.yml
├── Dockerfile
├── server.js
├── models/
│   └── Note.js
└── package.json


🐳 Docker Tips
Rebuild container: docker-compose up --build

Stop services: docker-compose down

View containers: docker ps

👩‍💻 Author
Built with ❤️ by Arpitha-nc
```
