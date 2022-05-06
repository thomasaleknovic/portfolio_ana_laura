import { BrowserRouter } from "react-router-dom";
import './App.css'
import MainComponent from "./Components/MainComponent";



function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>

  )
}

export default App
