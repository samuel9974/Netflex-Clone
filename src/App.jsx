import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home.jsx'

/**
 * Root application component that mounts the home page.
 * Takes no parameters.
 * @returns {import('react').ReactElement} - The app shell wrapping Home.
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
