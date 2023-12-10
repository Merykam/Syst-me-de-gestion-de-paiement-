import React from 'react'
import logo from '../../assets/newl.png'

const Navbar = () => {
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
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex  flex-col  md:p-0  border items-center  rounded-xl bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       

        
            
                <button className="bg-text-blue md:text-white  text-brand px-3 py-2 rounded-xl w-max-content transform scale-100 hover:scale-110 transition-transform">
                  Login
                </button>
          
           
                <button className="bg-text-blue text-white px-3 py-2 rounded-xl w-max-content shadow transform scale-100 hover:scale-110 transition-transform">
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
