import { useState } from 'react'
import appartement from './assets/appartement.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/common/Navbar'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)
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

export default App
