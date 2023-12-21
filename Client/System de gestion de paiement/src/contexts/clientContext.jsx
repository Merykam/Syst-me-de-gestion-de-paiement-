import { createContext, useState, useContext } from "react";
import axios from "axios";



const clientContext = createContext();




export function ClientProvider({ children }) {

    const [client, setClient]= useState('');
    const [inserted, setInserted] = useState(false)
    
    const [FormData,setFormData]=useState({
      name:"",
      CIN:"",
      phoneNumber:""
    })

 



  const showClients= async () => {
    try {
    
        const response = await axios.get('http://localhost:8000/api/client/showClient');
        setClient(response.data.allCient)
      
        console.log(response.data.allCient);
    


    } catch (error) {
         
        console.error(error); 
    }

  };

  const addClient= async () => {
    try {
    console.log(FormData);
        const response = await axios.post('http://localhost:8000/api/client/insertClient',FormData);
        
        setInserted(!inserted)

        console.log(response.data);
    


    } catch (error) {
         
        console.error(error); 
    }

  };





  return (
    <clientContext.Provider
      value={{
        showClients,
        client,
        setClient,
        addClient,
        FormData,
        setFormData,
        inserted
       
   
  
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