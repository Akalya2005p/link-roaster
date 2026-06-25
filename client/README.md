# 🔥 Link Roaster

An AI-powered full-stack web application that analyzes any website URL, generates a concise summary, creates a humorous roast, and delivers a fun verdict.

Users can submit URLs from blogs, news articles, product pages, documentation websites, and more. All generated roasts are stored and displayed on the homepage for everyone to browse.

---

## 🚀 Live Demo

**Frontend:**https://link-roaster-git-main-akalyas-projects-eed1faa5.vercel.app/

**Backend API:** https://link-roaster-hxak.onrender.com/

---

## ✨ Features

### 🤖 AI-Powered Website Analysis

* Extracts content from public web pages
* Generates AI-powered summaries
* Creates humorous roasts
* Produces a fun one-line verdict

### 📚 Recent Roasts Feed

* Stores roasts in Firebase Firestore
* Displays recent submissions on the homepage
* Automatically updates after every roast

### 🔗 Smart URL Handling

* URL validation
* Invalid URL detection
* Website-not-found handling
* Timeout handling
* SSL/TLS error handling
* Scraping-blocked website detection

### ⚡ Performance Optimization

* Duplicate URL caching
* Prevents repeated AI requests for the same URL
* Faster response times
* Reduced API usage

### 🎨 Modern UI

* Responsive design
* Glassmorphism cards
* Gradient backgrounds
* Interactive hover effects
* Toast notifications
* Mobile-friendly layout

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Icons


### Backend

* Node.js
* Express.js
* Axios
* Cheerio

### Database

* Firebase Firestore

### AI

* OpenRouter API

---

## 📂 Project Structure

```text
link-roaster/
│
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

OPENROUTER_API_KEY=your_openrouter_api_key

FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key
```

---

## 📄 .env.example

```env
PORT=

OPENROUTER_API_KEY=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

---

## 💻 Running Locally

### Clone Repository

```bash
git clone https://github.com/A/link-roaster.git

cd link-roaster
```

### Backend Setup

```bash
cd server

npm install

npm start
```

Backend runs at:

```text
http://localhost:5000
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🌍 Deployment

### Frontend Deployment (Vercel)

1. Import GitHub repository into Vercel
2. Set Root Directory:

```text
client
```

3. Add Environment Variable:

```env
VITE_API_URL=https://link-roaster-hxak.onrender.com
```

4. Deploy

---

### Backend Deployment (Render)

1. Create a new Web Service
2. Set Root Directory:

```text
server
```

3. Build Command:

```bash
npm install
```

4. Start Command:

```bash
npm start
```

5. Add Environment Variables:

```env
OPENROUTER_API_KEY=
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

6. Deploy

---

## 🔥 Example Usage

### Input

```text
https://react.dev
```

### Output

**Summary**

React is a JavaScript library for building user interfaces.

**Roast**

React is like a cookbook filled with recipes that everyone swears are simple until you're three hours deep debugging.

**Verdict**

It's a library, not a miracle worker.

---

## 🛡️ Error Handling

The application gracefully handles:

* Invalid URLs
* Website not found errors
* SSL/TLS failures
* Request timeouts
* Scraping restrictions
* AI generation failures
* Empty content pages

---

## 👩‍💻 Author

**Akalya P**



GitHub: https://github.com/Akalya2005p



