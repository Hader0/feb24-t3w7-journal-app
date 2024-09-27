import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import JournalEntiresContext from './contexts/EntriesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JournalEntiresContext>
      <App />
    </JournalEntiresContext>
  </StrictMode>,
)
