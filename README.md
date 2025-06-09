# Full-Stack Developer

A full-stack application for managing users and their tasks, built with Node.js, Express, TypeScript, SQLite, React, Vite, and Axios.

## Backend
- **Location**: `backend`
- **Technologies**: Node.js, Express, TypeScript, SQLite
- **Setup**:
  ```bash
  cd backend
  npm install
  npm run dev
  ```
- Runs on `http://localhost:5000`

## Frontend
- **Location**: `frontend`
- **Technologies**: React, TypeScript, Vite, Axios
- **Setup**:
  ```bash
  cd frontend
  npm install
  npm run dev
  ```
- Runs on `http://localhost:5173`

## Usage
- Open `http://localhost:5173` in your browser.
- Create users, view their tasks, and add new tasks.

## Notes
- The backend uses SQLite, storing data in `database.sqlite`.
- The frontend uses Vite’s proxy to communicate with the backend at `/api`.
