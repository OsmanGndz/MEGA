import './App.css'
import Home from './Page/Home'
import { Route, Router, Routes } from 'react-router-dom'
import SiteRoutes from './SiteRoutes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (

    <>
      <Navbar />
      <div className='container'>
        <div className='col-sm-12'>

            <SiteRoutes />
        </div>
      </div>
      <Footer />
    
    
    </>
  )
}

export default App
