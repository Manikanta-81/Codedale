import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import MainNavbar from './components/MainNavbar';
import Herosection from './components/Herosection';
import FooterSection from './components/FooterSection';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <MainNavbar/>
    <Herosection />
    <FooterSection />
    </div>
  )
}

export default App;
