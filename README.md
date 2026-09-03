<h1 align="center">📚 PassMate</h1>

<p align="center">
  <b>Your Senior's Got Your Back. 🎓</b>
</p>

<p align="center">
  A student-friendly platform to find and access study materials
  <br>
  using <b>Year → Semester → Subject</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/API-Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
</p>

<p align="center">
  <b>Find. Learn. Pass. Repeat. 🚀</b>
</p>

---

## 💡 About PassMate

> **"Why search through five WhatsApp groups when your notes can be one click away?"** 😭

PassMate is a full-stack web application designed to make finding study materials easier for students.

Instead of searching through multiple folders, messages, or groups, students can simply select:

**Year → Semester → Subject**

and instantly find the available study materials.

### 🎓 The Idea

<p align="center">
  <b>👨‍🎓 Seniors Share → 📚 Juniors Learn → 🎓 Everyone Wins</b>
</p>

---

## ⚡ How PassMate Works

| Step | Action                             |
| :--: | ---------------------------------- |
|  1️⃣  | Select your **Year**               |
|  2️⃣  | Select your **Semester**           |
|  3️⃣  | Select your **Subject**            |
|  4️⃣  | Click **Get Notes**                |
|  5️⃣  | View or download the available PDF |

### 🔄 Basic Flow

```text
Student
   │
   ▼
React Frontend
   │
   │  GET /notes
   ▼
Express + Node.js
   │
   ▼
MongoDB
   │
   ▼
Matching Study Materials
   │
   ▼
📄 PDF Notes
```

---

## ✨ Features

| Feature                    | Description                                                       |
| :------------------------- | :---------------------------------------------------------------- |
| 🔎 **Smart Selection**     | Find notes using Year, Semester and Subject                       |
| 📚 **Organized Materials** | Study resources are categorized for easy access                   |
| 📄 **PDF Access**          | View and download available PDF notes                             |
| ⚡ **REST API**            | Frontend communicates with backend using REST APIs                |
| 🗄️ **MongoDB Storage**     | Stores note metadata such as year, semester, subject and file URL |
| 🎨 **Simple UI**           | Clean and student-friendly interface                              |
| 🔗 **Backend Integration** | React frontend connected to Express backend                       |

---

## 🛠️ Technology Stack

|      Layer       | Technology               |
| :--------------: | :----------------------- |
|   🎨 Frontend    | **React.js**             |
|    ⚙️ Backend    | **Node.js + Express.js** |
|   🗄️ Database    | **MongoDB**              |
|      🔗 API      | **REST API**             |
|   📄 Resources   | **PDF Study Materials**  |
| 🌐 Communication | **HTTP / Fetch API**     |

---

## 🏗️ Project Structure

```text
PassMate/
│
├── backend/
│   │
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
│   │
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

## 🔄 Application Architecture

```text
                    ┌─────────────────────┐
                    │       STUDENT       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   REACT FRONTEND    │
                    │                     │
                    │  Year               │
                    │  Semester           │
                    │  Subject            │
                    └──────────┬──────────┘
                               │
                               │ HTTP Request
                               ▼
                    ┌─────────────────────┐
                    │   EXPRESS REST API  │
                    │      /notes         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       MONGODB       │
                    │                     │
                    │  Year               │
                    │  Semester           │
                    │  Subject            │
                    │  File URL           │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    📄 PDF NOTES     │
                    └─────────────────────┘
```

---

## 🔌 API Endpoints

### Get Notes

```http
GET /notes
```

Used to find notes based on:

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

Used to add note information to MongoDB.

### Delete a Note

```http
DELETE /notes/:id
```

Used to remove a note from the database.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Shalinips/PassMate.git
```

```bash
cd PassMate
```

---

### 2️⃣ Start MongoDB

Make sure MongoDB is running on your system.

PassMate uses the following local database:

```text
mongodb://127.0.0.1:27017/passmateDB
```

---

### 3️⃣ Start the Backend

Open a terminal and run:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The backend will run at:

```text
http://localhost:5000
```

---

### 4️⃣ Start the Frontend

Open **another terminal**.

Go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React:

```bash
npm start
```

The frontend will run at:

```text
http://localhost:3000
```

---

## 📸 Project Preview

<p align="center">
  <i>PassMate provides a simple interface where students can select their academic details and access available notes.</i>
</p>

---

## 🔮 Future Scope

```text
🔐 Student & Admin Authentication
                ↓
⬆️ Direct PDF Upload
                ↓
☁️ Cloud Storage
                ↓
🔎 Advanced Search
                ↓
⭐ Notes Rating & Feedback
                ↓
📱 Improved Mobile Experience
                ↓
👨‍💼 Admin Dashboard
```

### Planned Improvements

- 🔐 User authentication
- 👨‍💼 Admin panel for managing notes
- ⬆️ Direct PDF upload
- ☁️ Cloud-based file storage
- 🔎 Advanced search and filtering
- ⭐ Notes rating and feedback
- 📱 Better mobile responsiveness
- 📊 Usage and download analytics

---

## ❤️ The PassMate Promise

<p align="center">

### Seniors Share.

### Juniors Learn.

### Everyone Passes. 🎓

</p>

---

<p align="center">
  <b>📚 PassMate</b>
  <br>
  <i>Your Senior's Got Your Back.</i>
  <br><br>
  Made with ❤️ by a student, for students.
</p>
