import { createContext, useState, useContext } from "react";
import axios from "axios";



const clientContext = createContext();





export function ClientProvider({ children }) {

    const [client, setClient]= useState('');

 



  const showClients= async () => {
    try {
    
        const response = await axios.get('http://localhost:8000/api/client/showClient');
        setClient(response.data.allCient)
      
        console.log(response.data.allCient);
    


    } catch (error) {
         
        console.error(error); 
    }

  };





  return (
    <clientContext.Provider
      value={{
        showClients,
        client,
        setClient
       
   
  
      }}
    >
      {children}
    </clientContext.Provider>
  );
}

export function useClient() {
  const context = useContext(clientContext);

  return context;
}