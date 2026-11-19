import { useEffect, useState } from 'react'
import HomePage from './HomePage'
import { CatalogShell } from './components/CatalogShell'
import EventsPage from './pages/EventsPage'
import PropertiesPage from './pages/PropertiesPage'
import TrackingPlansPage from './pages/TrackingPlansPage'
import './catalog.css'

function App() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => { const onPop = () => setPath(window.location.pathname); window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop) }, [])
  const navigate = (next: string) => { window.history.pushState({}, '', next); setPath(next); window.scrollTo(0, 0) }
  const currentPath = ['/events', '/properties', '/tracking-plans'].includes(path) ? path : '/'
  return <CatalogShell page={currentPath} navigate={navigate}>{currentPath === '/' ? <HomePage navigate={navigate} /> : currentPath === '/events' ? <EventsPage /> : currentPath === '/properties' ? <PropertiesPage /> : <TrackingPlansPage />}</CatalogShell>
}
export default App
