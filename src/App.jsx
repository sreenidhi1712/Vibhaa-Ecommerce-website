
import './App.css'
import Mainpage from './ApplicationPage/Mainpage'
import ContextProvider from './Components/Context/Context'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CartStore } from './Store-For-Redux/Store'


function App() {


  return (

    <BrowserRouter>
  
<Provider store={CartStore}>


    <ContextProvider>
     <Mainpage/>
    </ContextProvider>
    </Provider>
 
    </BrowserRouter>

   
  )
}

export default App
