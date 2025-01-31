import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainSection from './components/MainNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <MainSection />
    </div>
  )
}

export default App;
