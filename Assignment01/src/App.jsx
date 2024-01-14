// import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Brou, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer'
import About from './components/About/About'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Brou>
      <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='about'element={<About />}/>
          <Route path='*'element={<h1>Page Not Found 😂</h1>}/>
        </Routes>
        <Footer />
      </Brou>
    </>
  )
}

export default App
