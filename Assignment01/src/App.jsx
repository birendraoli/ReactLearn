import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Brou, Routes, Route } from "react-router-dom"
import Footer from './components/footer/Footer'
import About from './components/About/About'
import Pagenotfound from './components/pagenotfound/Pagenotfound'
import Menu from './components/menu/Menu'

function App() {

  return (
    <>
      <Brou>
      <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='*' element={<Pagenotfound />}/>
          <Route path='menu' element={<Menu />}/>
        </Routes>
        <Footer />
      </Brou>
    </>
  )
}

export default App
