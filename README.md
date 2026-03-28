# Study Session Planner

A clean, minimal React app to plan, track, and manage your study sessions — built with React Hook Form, Context API, and Vite.

---

## Features

- **Add sessions** via a validated form (React Hook Form)
- **View sessions** in a responsive card grid
- **Delete sessions** with a single click
- **Mark sessions as completed** with visual strikethrough
- **Filter by subject** — DSA, Web Dev, DBMS, OS, Other
- **Stats bar** — live session count, total study time, and completed count
- **Priority color coding** — High (red), Medium (amber), Low (green)
- **Black & white theme** — clean, distraction-free UI

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| React Hook Form v7 | Form handling & validation |
| Context API | Global state management |
| Vite | Build tool & dev server |

---

## Project Structure

```
study-session-planner/
├── public/
├── src/
│   ├── context/
│   │   └── SessionContext.jsx    # Global state — sessions, addSession, deleteSession
│   ├── components/
│   │   ├── SessionForm.jsx       # Add session form (React Hook Form)
│   │   ├── SessionForm.css
│   │   ├── SessionList.jsx       # Filter chips, stats bar, card grid
│   │   ├── SessionList.css
│   │   ├── SessionCard.jsx       # Individual session card
│   │   └── SessionCard.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/study-session-planner.git

# Navigate into the project
cd study-session-planner

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`





---

## How It Works

### Context API — `SessionContext.jsx`

All session state lives in `SessionContext`. It exposes:

- `sessions` — full list of all sessions
- `filteredSessions` — sessions after subject filter is applied
- `addSession(data)` — adds a new session from form data
- `deleteSession(id)` — removes a session by ID
- `toggleComplete(id)` — marks/unmarks a session as done
- `filter` / `setFilter(subject)` — active filter state
- `totalDuration` — total minutes across all sessions

### Form Validation — `SessionForm.jsx`

Uses `react-hook-form` with the following rules:

| Field | Validation |
|---|---|
| Topic Name | Required |
| Subject | Select from DSA / Web Dev / DBMS / OS / Other |
| Duration | Required, minimum 10 minutes |
| Priority | Select from Low / Medium / High |
| Date | Required |

On successful submit the form resets automatically.

### Priority Styling

| Priority | Color |
|---|---|
| High | Red |
| Medium | Amber / Orange |
| Low | Green |

---

## Bonus Features

- **Total study duration** displayed in the stats bar (converted to hours and minutes)
- **Filter sessions by subject** using chip buttons
- **Mark session as completed** — cards fade with strikethrough text

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## License

This project was built as part of the **Kodex Batch** assignment.  
Feel free to use, modify, and extend it for your own learning.
