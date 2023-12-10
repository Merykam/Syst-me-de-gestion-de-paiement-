import { useState } from 'react'
import appartement from './assets/appartement.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/common/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative w-full h-screen'>
      <img className='absolute top-0 left-0 w-full h-full z-[-1]' src={appartement} alt="" />
      <Navbar/>
     
    </div>
 
  )
}

export default App
