# 📝 MERN Todo App

A simple **MERN stack** (MongoDB, Express, React, Node.js) Todo App with authentication and private todos.

## 🚀 Features
- ✅ **User Authentication** (Signup & Login)
- 🔒 **Private Todos** (Only logged-in users can see their own todos)
- 📌 **CRUD Operations** (Add, View, and Delete todos)
- 🔄 **JWT-based Authentication**
- 🎨 **Frontend with React & Vite**
- 🌍 **Backend with Express & MongoDB**
- 🛠️ **API Routes for Todo Management**

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/dkv204p/todo-manager-mern.git
cd todo-manager-mern
```

### 2️⃣ Setup Backend
```bash
cd backend
npm install
```

#### ➤ Create `.env` file in `backend/`
```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

#### ➤ Start Backend Server
```bash
npm run dev
```

---

### 3️⃣ Setup Frontend
```bash
cd frontend
npm install
```

#### ➤ Start Frontend Server
```bash
npm run dev
```
The frontend will run on **http://localhost:5173**

---

## 📌 API Endpoints
### 🔑 **Authentication**
- `POST /api/auth/register` ➝ Register new user
- `POST /api/auth/login` ➝ Login user & get JWT token

### 📝 **Todos**
- `GET /api/todos` ➝ Get user's todos
- `POST /api/todos` ➝ Add new todo
- `DELETE /api/todos/:id` ➝ Delete a todo

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** MongoDB with Mongoose

---

## 🤝 Contributing
Feel free to fork the repository and submit a pull request!

---

🚀 **Happy Coding!** Let me know if you need any changes. 🎯