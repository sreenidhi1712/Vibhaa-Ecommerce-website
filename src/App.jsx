import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Maincontent from './Components/Maincontent'
import FooterPart from './Components/FooterPart'
import ContextProvider from './Components/Context/Context'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <ContextProvider>
    <Navbar/>
     <Maincontent/>
      <FooterPart/>
    </ContextProvider>
    
 
  )
}

export default App
