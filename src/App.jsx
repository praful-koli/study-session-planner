import { SessionProvider } from './context/SessionContext'
import SessionForm from './components/SessionForm'
import SessionList from './components/SessionList'
import './App.css'

export default function App() {
  return (
    <SessionProvider>
      <div className="app-root">
        <header className="app-header">
          <h1 className="app-title">Study session planner</h1>
          <p className="app-tagline">Plan. Focus. Conquer.</p>
        </header>
        <main className="app-main">
          <SessionForm />
          <SessionList />
        </main>
      </div>
    </SessionProvider>
  )
}
