
import './App.css'
import Maincontent from './Components/Maincontent'
import FooterPart from './Components/FooterPart'
import ContextProvider from './Components/Context/Context'
import Navbar from "./Components/Navbar";

function App() {


  return (


  
    <ContextProvider>
        
    <Navbar/>
     <Maincontent/>
      <FooterPart/>
   
    </ContextProvider>

 
  )
}

export default App
