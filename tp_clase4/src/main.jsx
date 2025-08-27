import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReusableButton from './ReusableButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ReusableButton text={"Click Here"}></ReusableButton>
  </StrictMode>,
)
