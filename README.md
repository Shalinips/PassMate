<h1 align="center">📚 PassMate</h1>

<p align="center">
  <b>Your Senior's Got Your Back. 🎓</b>
</p>

<p align="center">
  A simple full-stack platform for students to find study materials
  by <b>Year → Semester → Subject</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React.js-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/API-Express.js-000000?logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white" />
</p>

---

## 💡 About the Project

**PassMate** is a full-stack web application created to make study materials easier to find and access.

Students often search through WhatsApp groups, Google Drive folders, and old messages just to find one PDF.

PassMate provides a simple solution:

**Select your academic details → Find your notes → View / Download**

> 📚 Seniors Share → 🎓 Juniors Learn → 🚀 Everyone Benefits

---

## ✨ Features

- 🔎 Search notes using **Year, Semester and Subject**
- 📚 Organized study materials
- 📄 View and download PDF notes
- ⚡ Fast REST API communication
- 🗄️ MongoDB database for note information
- 🎨 Simple and student-friendly interface
- 🔗 React frontend connected with Node.js/Express backend

---

## 🧩 How It Works

```text
        👨‍🎓 Student
             │
             ▼
     ┌─────────────────┐
     │  React Frontend │
     │                 │
     │ Year            │
     │ Semester        │
     │ Subject         │
     └────────┬────────┘
              │
              │ GET /notes
              ▼
     ┌─────────────────┐
     │ Express + Node  │
     │     REST API    │
     └────────┬────────┘
              │
              ▼
     ┌─────────────────┐
     │     MongoDB     │
     │                 │
     │ Year            │
     │ Semester        │
     │ Subject         │
     │ File URL        │
     └────────┬────────┘
              │
              ▼
          📄 PDF Notes
```

---

## 🛠️ Tech Stack

| Technology     | Purpose                        |
| -------------- | ------------------------------ |
| **React.js**   | Frontend user interface        |
| **Node.js**    | Backend runtime                |
| **Express.js** | REST API                       |
| **MongoDB**    | Database                       |
| **Mongoose**   | MongoDB object modeling        |
| **Fetch API**  | Frontend-backend communication |
| **CSS**        | User interface styling         |

---

## 📁 Project Structure

```text
PassMate/
│
├── backend/
│   ├── models/
│   │   └── Note.js
│   │
│   ├── routes/
│   │   └── notes.js
│   │
│   ├── notes/
│   │   └── DBMS_Notes.pdf
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.css
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

## 🔌 API Endpoints

### Get Notes

```http
GET /notes
```

Search notes using:

```text
year
semester
subject
```

Example:

```text
GET /notes?year=2&semester=4&subject=Database%20Management%20Systems
```

### Add a Note

```http
POST /notes
```

Adds note information to MongoDB.

### Delete a Note

```http
DELETE /notes/:id
```

Deletes a note from the database.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- **Node.js**
- **MongoDB**
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/Shalinips/PassMate.git
cd PassMate
```

### 2. Start MongoDB

Make sure your local MongoDB server is running.

PassMate uses:

```text
mongodb://127.0.0.1:27017/passmateDB
```

### 3. Start the Backend

Open a terminal:

```bash
cd backend
npm install
node server.js
```

Backend:

```text
http://localhost:5000
```

### 4. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

Frontend:

```text
http://localhost:3000
```

---

## 📸 Preview

<p align="center">
  <i>PassMate — Your simple study-material companion.</i>
</p>

<!-- Add project screenshots here -->

---

## 🔮 Future Improvements

- 🔐 Student and Admin authentication
- 👨‍💼 Admin dashboard
- ⬆️ Direct PDF upload
- ☁️ Cloud storage
- 🔎 Advanced search and filtering
- ⭐ Notes rating and feedback
- 📱 Improved mobile experience
- 📊 Download and usage analytics

---

## 🎯 Project Goal

The goal of PassMate is simple:

> **Make finding study materials easier, faster and more organized for students.**

No more searching through countless messages.

No more asking seniors for the same PDF again.

Just:

**Year → Semester → Subject → Notes 📚**

---

<h3 align="center">❤️ Seniors Share. Juniors Learn. Everyone Passes.</h3>

<p align="center">
  <b>PassMate</b> — Your Senior's Got Your Back. 🎓
</p>
