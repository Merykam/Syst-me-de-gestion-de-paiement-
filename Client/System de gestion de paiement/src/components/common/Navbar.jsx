import React, { useState } from 'react'
import logo from '../../assets/newl.png'
import { useUser } from '../../contexts/authContext'
import {useNavigate} from 'react-router-dom';

const Navbar = ({to}) => {
  // const {user}=useUser();
  // console.log(user);

  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  function Logout(){
    localStorage.clear();
    navigate('/')

  }

  
  return (
    <div>
        {/* <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-2xl  bg-opacity-0"> */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white">
        {/* <img
          onClick={() => navigate("/")}
          className="w-24"
          src={logo}
          alt=""
          srcset=""
        /> */}
        <h1 className='font-bold text-2xl'>Loca<span className='text-lime-700'>Dwell</span></h1>
    
        <div className="  md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex  flex-col  md:p-0  items-center  rounded-xl bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       

        
            {token===null? <div>    <button onClick={()=>to('login')} className="bg-lime-900 md:text-white  text-brand px-3 py-2 rounded-xl w-max-content transform scale-100 hover:scale-110 transition-transform">
                  Login
                </button>
          
           
                <button onClick={()=>to('register')} className="ml-2 bg-lime-900 text-white px-3 py-2 rounded-xl w-max-content shadow transform scale-100 hover:scale-110 transition-transform">
                  Sign Up
                </button></div> :  <button onClick={()=>Logout()} className="bg-lime-900 text-white px-3 py-2 rounded-xl w-max-content shadow transform scale-100 hover:scale-110 transition-transform">
                  Logout
                </button>}
            
     
     


    



          </ul>
        </div>
      </div>
    {/* </nav> */}
    </div>
  )
}

export default Navbar
