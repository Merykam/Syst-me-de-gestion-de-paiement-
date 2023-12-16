import React, { useState } from 'react'
import logo from '../../assets/newl.png'

const Navbar = ({to}) => {

  
  return (
    <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-2xl  bg-opacity-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          onClick={() => navigate("/")}
          className="w-24"
          src={logo}
          alt=""
          srcset=""
        />
    
        <div className="  md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex  flex-col  md:p-0  items-center  rounded-xl bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       

        
            
                <button onClick={()=>to('login')} className="bg-lime-900 md:text-white  text-brand px-3 py-2 rounded-xl w-max-content transform scale-100 hover:scale-110 transition-transform">
                  Login
                </button>
          
           
                <button onClick={()=>to('register')} className="bg-lime-900 text-white px-3 py-2 rounded-xl w-max-content shadow transform scale-100 hover:scale-110 transition-transform">
                  Sign Up
                </button>
     
     


    



          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
