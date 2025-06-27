
# Blackjack MERN Stack App

This project is a Blackjack game tracker built using the **MERN stack** (MongoDB, Express, React, Node.js). I created it as my final homework assignment before moving to our main WebDev Project.

---

## Levels Completed

###  Level 1 – Backend Bootup
- Set up an Express server using `nodemon`
- Created a test route `/api/hello` to send JSON
- Implemented a POST route to `/api/games`

###  Level 2 – Database Connection
- Connected MongoDB (local) with Mongoose
- Created a `Game` model with `playerName`, `result`, and timestamp
- Stored and retrieved game data from MongoDB
- Successfully tested with `curl` and PowerShell's `Invoke-RestMethod`

###  Level 3 – React Frontend
- Created a React frontend to display and submit game data
- Connected frontend to backend using `proxy` in `client/package.json`
- Displayed fetched data using `.map()`
- Form inputs handle state and submission

### Attempted level 4 but could not complete by the deadline
---


##  How to Run the App Locally

### Backend Setup (Express + MongoDB)

1. Ensure MongoDB is installed and running:
   ```bash
   mongod
   ```

2. From the root of your project, install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

> Server runs at: `http://localhost:5000`

---

###  Frontend Setup (React)

1. Navigate to the frontend folder:
   ```bash
   cd client
   ```

2. Install React dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

> App opens in browser at: `http://localhost:3000`

---

##  What Works

- MongoDB is connected and stores game data
- Backend API handles:
  - `GET /api/games`
  - `POST /api/games`
- Frontend form submits game results to the backend
- React UI displays past game history

---

##  What Doesn’t Work Yet

- No Delete or Edit (Update) features
- No actual Blackjack gameplay or card logic
- No user authentication or login system
- Not deployed (runs locally only)

---

##  Submission Notes

Learnt a lot during this whole process. There is room for improvement however.

---

##  Author

**Chilawo Nchimunya Munene**  
Grambling State University  
TechWise Participant
