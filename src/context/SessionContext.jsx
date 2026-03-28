import { createContext, useContext, useState } from 'react'

const SessionContext = createContext()

export function SessionProvider({ children }) {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      topic: 'Binary Search Trees',
      subject: 'DSA',
      duration: 90,
      priority: 'High',
      date: '2026-03-27',
      completed: false,
    },
    {
      id: 2,
      topic: 'React Hooks Deep Dive',
      subject: 'Web Dev',
      duration: 60,
      priority: 'Medium',
      date: '2026-03-28',
      completed: false,
    },
    {
      id: 3,
      topic: 'Transaction Management',
      subject: 'DBMS',
      duration: 45,
      priority: 'Low',
      date: '2026-03-29',
      completed: true,
    },
  ])

  const [filter, setFilter] = useState('All')

  const addSession = (session) => {
    setSessions((prev) => [
      ...prev,
      { ...session, id: Date.now(), completed: false },
    ])
  }

  const deleteSession = (id) => {
    setSessions((prev) => prev.filter((s) => s.id !== id))
  }

  const toggleComplete = (id) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s))
    )
  }

  const totalDuration = sessions.reduce((acc, s) => acc + Number(s.duration), 0)
  const filteredSessions =
    filter === 'All' ? sessions : sessions.filter((s) => s.subject === filter)

  return (
    <SessionContext.Provider
      value={{
        sessions,
        filteredSessions,
        addSession,
        deleteSession,
        toggleComplete,
        filter,
        setFilter,
        totalDuration,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  return useContext(SessionContext)
}
