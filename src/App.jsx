import { useState } from 'react'
import './App.css'
import Maincontent from './Components/Maincontent'
import FooterPart from './Components/FooterPart'
import ContextProvider from './Components/Context/Context'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <ContextProvider>
   
     <Maincontent/>
      <FooterPart/>
    </ContextProvider>
    
 
  )
}

export default App
