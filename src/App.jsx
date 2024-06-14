
import './App.css'
import Mainpage from './ApplicationPage/Mainpage'
import ContextProvider from './Components/Context/Context'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {


  return (

    <BrowserRouter>
  
  
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
      </Routes>
    </ContextProvider>
    </BrowserRouter>
 
  )
}

export default App
