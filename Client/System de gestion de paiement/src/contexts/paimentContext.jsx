import { createContext, useState, useContext } from "react";
import axios from "axios";



const paimentContext = createContext();





export function PaimentProvider({ children }) {

    const [paiment, setPaiments]= useState('');
    const [paimentsAppartement, setPaimentsAppartement]= useState('');
    const [inserted2, setInserted] = useState(false)

    const [formData, setFormData] = useState({
        appartementId:"",
        date: '',
        prixParMois: null,
     
    
    });



  const showPaiments = async () => {
    try {
    
        const response = await axios.get('http://localhost:8000/api/paiment/showPaiments');
        setPaiments(response.data.appartementPaiments)
      
        console.log(response.data.appartementPaiments);

    


    } catch (error) {
         
         
        console.error(error); 
    }

  };

  const showPaimentsOfAppartement = async (id) => {
    try {
        console.log("hello");
    
        const response = await axios.get(`http://localhost:8000/api/paiment/showPaiment?id=${id}`,{ withCredentials: true });
        setPaimentsAppartement(response.data.appartementPaiments)
      
        console.log(response.data.appartementPaiments);
    


    } catch (error) {  
        console.error(error); 
    }

  };


  const addPaiment = async () => {

    
      console.log(formData);
    try {
        console.log(formData)
        const response = await axios.post('http://localhost:8000/api/paiment/insertPaiment', formData,{ withCredentials: true });
        setInserted(!inserted2)


    } catch (error) {
       
        //  setErrorMessage(error.response.data.error)
        console.error(error); 
    }
};



  return (
    <paimentContext.Provider
      value={{
        showPaiments,
        paiment,
        addPaiment,
        setFormData,
        formData,
        showPaimentsOfAppartement,
        paimentsAppartement,
        inserted2
   
  
      }}
    >
      {children}
    </paimentContext.Provider>
  );
}

export function usePaiment() {
  const context = useContext(paimentContext);

  return context;
}