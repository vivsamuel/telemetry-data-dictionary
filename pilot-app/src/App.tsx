import { useEffect, useState } from 'react'
import HomePage from './pilot/PilotHome'
import { CatalogShell } from './components/CatalogShell'
import EventsPage from './pilot/PilotEvents'
import PropertiesPage from './pilot/PilotProperties'
import TrackingPlansPage from './pilot/PilotPlans'
import './catalog.css'
import './pilot-layout.css'

function readPath() {
  const hashPath = window.location.hash.slice(1)
  if (hashPath.startsWith('/')) return hashPath
  // Keep existing local links working while navigation moves to hash URLs.
  return window.location.pathname
}

function App() {
  const [path, setPath] = useState(readPath)
  useEffect(() => {
    const onLocationChange = () => setPath(readPath())
    window.addEventListener('hashchange', onLocationChange)
    window.addEventListener('popstate', onLocationChange)
    return () => {
      window.removeEventListener('hashchange', onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])
  const navigate = (next: string) => {
    window.location.hash = next
    setPath(next)
    window.scrollTo(0, 0)
  }
  const currentPath = ['/events', '/properties', '/tracking-plans'].includes(path) ? path : '/'
  return <CatalogShell page={currentPath} navigate={navigate}>{currentPath === '/' ? <HomePage /> : currentPath === '/events' ? <EventsPage /> : currentPath === '/properties' ? <PropertiesPage /> : <TrackingPlansPage />}</CatalogShell>
}
export default App
