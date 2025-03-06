# 📝 MERN Todo App

A simple **MERN stack** (MongoDB, Express, React, Node.js) Todo App with authentication and private todos.

---

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

---

### 2️⃣ Setup Backend
```bash
cd backend
npm install
```

#### ➤ Create `.env` file in `backend/`
Add the following environment variables:
```plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

#### ➤ Start Backend Server
```bash
npm run dev
```
The backend will run on **http://localhost:5000**.

---

### 3️⃣ Setup Frontend
```bash
cd frontend
npm install
```

#### ➤ Create `.env` file in `frontend/`
Add the following environment variable:
```plaintext
VITE_API_URL=http://localhost:5000/api
```

#### ➤ Start Frontend Server
```bash
npm run dev
```
The frontend will run on **http://localhost:5173**.

---

## 📌 API Endpoints

### 🔑 **Authentication**
- `POST /api/auth/signup` ➝ Register a new user.
- `POST /api/auth/login` ➝ Login user and get JWT token.

### 📝 **Todos**
- `GET /api/todos` ➝ Get all todos for the logged-in user.
- `POST /api/todos` ➝ Add a new todo.
- `DELETE /api/todos/:id` ➝ Delete a todo.

---

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** MongoDB with Mongoose

---

## 🤝 Contributing
Feel free to fork the repository and submit a pull request! Contributions are always welcome.

---

## 🚀 Deployment
### Backend
Deploy the backend to platforms like **Render**, **Heroku**, or **Vercel**.

### Frontend
Deploy the frontend to platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 🐛 Debugging Tips
- Ensure the `JWT_SECRET` in the backend `.env` file matches the one used to sign the token.
- Check the `Authorization` header in the frontend to ensure the token is being sent correctly.
- Use tools like [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) to test API endpoints.

---

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

🚀 **Happy Coding!** Let me know if you need any further changes. 🎯