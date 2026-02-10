import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Minimal diagnostic test
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div style={{ padding: '50px', fontSize: '24px', color: 'red' }}>
            <h1>DIAGNOSTIC TEST - If you see this, React is working!</h1>
            <p>Current time: {new Date().toLocaleString()}</p>
        </div>
    </StrictMode>,
)
