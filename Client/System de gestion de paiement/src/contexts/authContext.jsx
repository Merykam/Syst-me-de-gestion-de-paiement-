import { createContext, useState, useContext } from "react";
import axios from "axios";
import Dashboard from '../components/Dashboard';
import {useNavigate} from 'react-router-dom';



const userContext = createContext();





export function UserProvider({ children }) {

    const navigate = useNavigate()
    const [user,setUser]=useState('');

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    
    });

    const [formData1, setFormData1] = useState({
        name: '',
        email: '',
        password: ''
    
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
  
        try {
            console.log(formData1)
            const response = await axios.post('http://localhost:8000/api/auth/signup', formData1);
            console.log(response.data);
            if(response.data.message){
                setSuccessMessage(response.data.message)
            }
        
  
  
        } catch (error) {
          if(error.response.data.error){
            setErrorMessage(error.response.data.error);
  
          }
           
             
            console.error(error); 
        }
    };
  
    const handleLogin = async (e) => {
        e.preventDefault();
  
        try {
            console.log(formData)
            const response = await axios.post('http://localhost:8000/api/auth/signin', formData, { withCredentials: true });
            console.log(response.data);
            
            
            
            if(response.data){
                console.log(response.data.data.token);
                  localStorage.setItem("token",response.data.data.token || null);
              
                 navigate('/Dashboard');
  
               
  
            }
           
        
  
  
        } catch (error) {
          if(error.response.data.error){
            setErrorMessage(error.response.data.error);
  
          }
           
             
            console.error(error); 
        }
    };



  return (
    <userContext.Provider
      value={{
        handleLogin,
        setFormData,
        formData,
        setFormData1,
        formData1,
        handleSignup,
        successMessage,
        errorMessage,
        user
       
   
  
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  const context = useContext(userContext);

  return context;
}