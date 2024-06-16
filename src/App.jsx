
import './App.css'
import Mainpage from './ApplicationPage/Mainpage'
import ContextProvider from './Components/Context/Context'
import { BrowserRouter } from 'react-router-dom'


function App() {


  return (

    <BrowserRouter>
  
  
    <ContextProvider>
     <Mainpage/>
    </ContextProvider>
    </BrowserRouter>
 
  )
}

export default App
