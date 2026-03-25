# 🚀 Full Stack Authentication System (MERN + JWT)

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-blue)


A production-ready **Full Stack Authentication System** built using the **MERN stack (MongoDB, Express, React, Node.js)** with **JWT-based authentication and protected routes**.

---

## 🌐 Live Demo

👉 (Add after deployment)

---

## ✨ Features

* 🔐 User Signup (secure password hashing)
* 🔑 User Login with JWT authentication
* 🛡️ Protected Routes (Authorization middleware)
* 🚪 Logout functionality
* ⚡ Fast API with Express.js
* ⚛️ Dynamic frontend with React

---

## 🛠️ Tech Stack

### Frontend (Client)

* React.js
* Fetch API
* LocalStorage (token storage)

### Backend (Server)

* Node.js
* Express.js
* JWT (jsonwebtoken)
* bcrypt (password hashing)

### Database

* MongoDB (Mongoose)

---

## 🧠 Key Concepts

* Authentication vs Authorization
* JWT token generation & verification
* Password hashing using bcrypt
* Middleware-based route protection
* Full-stack API integration

---

## 📂 Project Structure

```
auth-fullstack-app/
│
├── client/        # React frontend
├── server/        # Node.js backend
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone repo

```bash
git clone https://github.com/YOUR_USERNAME/auth-fullstack-app.git
cd auth-fullstack-app
```

---

### 2️⃣ Backend setup

```bash
cd server
npm install
node app.js
```

📍 Runs on: http://localhost:5000

---

### 3️⃣ Frontend setup

```bash
cd client
npm install
npm start
```

📍 Runs on: http://localhost:3000

---

## 🔐 API Endpoints

| Method | Endpoint              | Description     |
| ------ | --------------------- | --------------- |
| POST   | `/api/auth/signup`    | Register user   |
| POST   | `/api/auth/login`     | Login user      |
| GET    | `/api/auth/protected` | Protected route |

---

## 🔁 Authentication Flow

```
Signup → Store User
        ↓
Login → Generate JWT
        ↓
Store Token (localStorage)
        ↓
Send Token in Headers
        ↓
Verify Token (Middleware)
        ↓
Access Protected Data
```

---

## 🚀 Future Improvements

* 🌐 Deployment (Vercel + Render)
* 🎨 UI with Tailwind CSS
* 🔐 JWT stored in cookies
* 👤 User profile page
* 🔄 Refresh tokens

---

## 👨‍💻 Author

**Ayush Kumar**
Aspiring Full Stack Developer 🚀

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

---
