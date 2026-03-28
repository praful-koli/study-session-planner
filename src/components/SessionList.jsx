import { useSession } from '../context/SessionContext'
import SessionCard from './SessionCard'
import './SessionList.css'

const SUBJECTS = ['All', 'DSA', 'Web Dev', 'DBMS', 'OS', 'Other']

export default function SessionList() {
  const { filteredSessions, filter, setFilter, totalDuration } = useSession()

  const hours = Math.floor(totalDuration / 60)
  const mins = totalDuration % 60

  return (
    <div className="list-pane">
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-val">{filteredSessions.length}</span>
          <span className="stat-lbl">Sessions</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-val">{hours}h {mins}m</span>
          <span className="stat-lbl">Total time</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-val">
            {filteredSessions.filter((s) => s.completed).length}
          </span>
          <span className="stat-lbl">Completed</span>
        </div>
      </div>

      <div className="filter-row">
        {SUBJECTS.map((s) => (
          <button
            key={s}
            className={`chip ${filter === s ? 'chip-active' : ''}`}
            onClick={() => setFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {filteredSessions.length === 0 ? (
        <div className="empty">No sessions yet — add one.</div>
      ) : (
        <div className="cards-grid">
          {filteredSessions.map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </div>
      )}
    </div>
  )
}
