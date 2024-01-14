import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'

const App = () => {
  const [mode, setMode] = useState(false)

  return (
    <>
    <div className={mode ? '' : 'dark'}>
      <Nav set = {setMode} />
    </div>
    </>
  )
}

export default App
