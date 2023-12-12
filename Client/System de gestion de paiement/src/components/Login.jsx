import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  
   
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
      email: '',
      password: ''
  
  });

  const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
      e.preventDefault();

      try {
          console.log(formData)
          const response = await axios.post('http://localhost:8000/api/auth/signin', formData);
          console.log(response.data);
          if(response.data.message){
              setSuccessMessage(response.data.message);
              navigate('/dashboard');

          }
      


      } catch (error) {
        if(error.response.data.error){
          setErrorMessage(error.response.data.error);

        }
         
           
          console.error(error); 
      }
  };
  return (
    <div className=''>
      <div className="flex flex-col w-full mt-20 items-center justify-center   bg-no-repeat" >
      {successMessage? 
    <div class="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert">
        <p class="font-bold">{successMessage}</p>    
    </div>
    : errorMessage?
    <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
    <p class="font-bold">{errorMessage}</p>
    </div> 
    : ""}
  <div className="rounded-xl bg-gray-800 bg-opacity-10 px-20 py-16 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
        <span className="font-bold texy-">Enter Login Details</span>
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="email" placeholder="id@email.com" onChange={handleInputChange}/>
        </div>

        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="password" placeholder="*********" onChange={handleInputChange}/>
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button type="submit" className="rounded-3xl bg-lime-900 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
