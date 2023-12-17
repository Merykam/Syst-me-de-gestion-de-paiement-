import { useState } from 'react'
import appartement from '../assets/appartement.jpg'
// import './App.css'
import Navbar from './common/Navbar'
import Login from './Login'
import Register from './Register'
import Routes from '../components/Routes'

function LandingPage() {
 
  const [page,setPage] = useState('')

    const togglePage = (name) => {
      setPage(name)
    }

  return (
    <div className='relative w-full h-screen'>
      <img className='absolute top-0 left-0 w-full h-full z-[-1]' src={appartement} alt="" />
      <Navbar to={togglePage}/>
      {page == 'login' ?  <Login/> : ""}
      {page == 'register' ?  <Register/> : ""}
     
     
    </div>
 
  )
}

export default LandingPage
