import { Route, Routes } from 'react-router-dom'
import './App.css'
import Mainn from './Pages/Mainn'
import LandingPage from './Pages/LandingPage'
import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {

  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/main' element={<Mainn/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
