# 🏋️ Lift Lab

Lift Lab is a full-stack MERN workout tracking application that helps users create personalized workout splits, track gym sessions, and monitor their training progress.

Built with **React, Node.js, Express, MongoDB, and JWT Authentication**, Lift Lab provides a modern fitness tracking experience with secure user authentication and a clean responsive interface.

## 🌐 Live Demo

🚀 **Live Application:** https://lift-lab-eta.vercel.app/

> **Note:** The backend is hosted on Render's free tier, so the first request may take 30-60 seconds while the server wakes up.

---

## ✨ Features

### 🔐 Authentication
- User Registration
- Secure Login
- JWT Authentication
- Cookie-based Authentication
- Protected Routes
- Logout

### 💪 Workout Split Management
- Create Custom Workout Splits
- Configure Weekly Workout Schedule
- Choose Exercises for Each Workout Day
- View Today's Workout Automatically

### 🏋️ Workout Tracking
- Start Workout Session
- Track Sets
- Track Repetitions
- Track Weight
- Save Workout Session

### 📊 Dashboard
- Today's Workout
- Previous Workout Summary
- Workout Statistics
- Workout Progress

### 👤 User Profile
- Personal Information
- Height
- Weight
- Goal
- Experience Level

---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Context API
- Axios
- Tailwind CSS
- Lucide Icons
- Vite

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

## Database

- MongoDB Atlas

---

## Authentication

- JWT Token
- Protected Routes
- Token Blacklisting (Logout)

---

# 📂 Project Structure

```
Lift-Lab
│
├── FrontEnd
│   ├── src
│   ├── Components
│   ├── Features
│   ├── Routes
│   └── Context
│
└── BackEnd
    ├── controllers
    ├── models
    ├── routes
    ├── middleware
    ├── config
    └── server.js
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Gurpreet-s0/Lift-Lab.git
```

---

## Backend

```bash
cd BackEnd
npm install
```

Create `.env`

```env
PORT=3000

MONGO_URI=YOUR_MONGODB_URI

JWT_TOKEN=YOUR_SECRET

CLIENT_URL=http://localhost:5173
```

Run Backend

```bash
npm start
```

---

## Frontend

```bash
cd FrontEnd
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:3000/api
```

Run Frontend

```bash
npm run dev
```

---

# 🌐 Deployment

Frontend:
- Vercel

Backend:
- Render

Database:
- MongoDB Atlas

---

# 🔒 Security

- Password Hashing using bcrypt
- JWT Authentication
- Protected API Routes
- Token Blacklisting on Logout

---

# 🚧 Future Improvements

- Progress Charts
- Exercise History
- Personal Records
- Workout Calendar
- Rest Timer
- Dark / Light Theme
- Mobile App
- Social Features

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes

```bash
git commit -m "Added New Feature"
```

4. Push to your branch

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Gurpreet Singh**

GitHub: https://github.com/Gurpreet-s0

---

⭐ If you like this project, consider giving it a star!