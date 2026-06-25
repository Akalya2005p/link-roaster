# 🔥 Link Roaster

An AI-powered full-stack web application that analyzes any website URL, generates a concise summary, creates a humorous roast, and delivers a fun verdict.

Users can submit URLs from blogs, news articles, product pages, documentation websites, and more. All generated roasts are stored and displayed on the homepage for everyone to browse.

---

## 🚀 Live Demo

Frontend: YOUR_FRONTEND_URL

Backend API: YOUR_BACKEND_URL

---

## 📸 Features

### AI-Powered Website Analysis

- Extracts content from any public webpage
- Generates a concise summary using AI
- Creates a humorous roast
- Produces a one-line verdict

### Recent Roasts Feed

- Stores roasts in Firestore
- Displays latest roasts on the homepage
- Automatically updates after every submission

### Smart URL Handling

- URL validation
- Invalid URL detection
- Website-not-found handling
- SSL/TLS error handling
- Timeout handling
- Scraping-blocked website detection

### Performance Optimization

- Duplicate URL caching
- Prevents repeated AI generation for the same URL
- Faster response times
- Reduced API usage

### Modern UI

- Responsive design
- Glassmorphism cards
- Gradient backgrounds
- Interactive hover effects
- Toast notifications
- Mobile-friendly layout

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Icons
- React Hot Toast

### Backend

- Node.js
- Express.js
- Axios
- Cheerio

### Database

- Firebase Firestore

### AI

- OpenRouter API

---

## 📂 Project Structure

```text
Link-Roaster/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── package.json
│
└── README.md
```

## ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

OPENROUTER_API_KEY=your_openrouter_api_key

FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
```

---

## 📄 .env.example

```env
PORT=

OPENROUTER_API_KEY=

FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
```

---

## 💻 Running Locally

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/link-roaster.git

cd link-roaster
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🌍 Deployment

### Frontend Deployment

Deploy frontend using Vercel.

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

### Backend Deployment

Deploy backend using Render.

Start command:

```bash
npm start
```

Add all environment variables in Render dashboard before deployment.

### Firebase

Create a Firebase project.

Enable Firestore Database.

Add Firebase credentials to environment variables.

---

## 🧪 Example Usage

Input:

```text
https://react.dev
```

Output:

```text
Summary:
React is a JavaScript library for building user interfaces.

Roast:
React is like a cooking book full of confusing recipes.

Verdict:
It's a library, not a miracle worker.
```

---

## 🔒 Error Handling

The application gracefully handles:

- Invalid URLs
- Website not found errors
- SSL/TLS connection failures
- Request timeouts
- Websites blocking scraping
- AI generation failures

---

## 👩‍💻 Author

Akalya P

Final Year Computer Science Student

GitHub: https://github.com/YOUR_USERNAME

---

## 📜 License

This project was developed as part of the Bipolar Factory Full-Stack Internship Assignment.
