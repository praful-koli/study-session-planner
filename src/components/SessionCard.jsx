import { useSession } from '../context/SessionContext'
import './SessionCard.css'

const priorityConfig = {
  High:   { className: 'badge-high',   label: 'High'   },
  Medium: { className: 'badge-medium', label: 'Medium' },
  Low:    { className: 'badge-low',    label: 'Low'    },
}

export default function SessionCard({ session }) {
  const { deleteSession, toggleComplete } = useSession()
  const pc = priorityConfig[session.priority]

  return (
    <div className={`card ${session.completed ? 'card-done' : ''}`}>
      <div className="card-top">
        <div className="card-info">
          <p className={`card-topic ${session.completed ? 'card-topic-done' : ''}`}>
            {session.topic}
          </p>
          <p className="card-subject">{session.subject}</p>
        </div>
        <span className={`badge ${pc.className}`}>{pc.label}</span>
      </div>

      <div className="card-meta">
        <span>{session.duration} min</span>
        <span>{session.date}</span>
      </div>

      <div className="card-actions">
        <button
          className={`done-btn ${session.completed ? 'done-btn-completed' : ''}`}
          onClick={() => toggleComplete(session.id)}
        >
          {session.completed ? 'Completed' : 'Mark as done'}
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteSession(session.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
