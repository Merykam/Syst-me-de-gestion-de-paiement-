import { createContext, useState, useContext } from "react";
import axios from "axios";



const appartementContext = createContext();





export function AppartementProvider({ children }) {

    const [appartement2, setAppartement]= useState('');
    const [get,setGet]=useState(false)
    const [appartementData, setAppartementData]= useState('');

    const [formData, setFormData] = useState({
      name: '',
      description: '',
      prixParMoix: null,
      surface:null,
      nombrePieces:null,
      adresse:'',
      status:'',
      clientId:''
    
    });

    const [formDataUpdated, setFormDataUpdated] = useState({
      name: '',
      description: '',
      prixParMoix: null,
      surface:null,
      nombrePieces:null,
      adresse:'',
      status:'',
      clientId:''
    
    });



  const showAppartements = async () => {
    try {
    
        const response = await axios.get('http://localhost:8000/api/appartement/showAppartement');
        setAppartement(response.data.appartements)
      
        console.log(response.data.appartements);
    


    } catch (error) {
         
         
        console.error(error); 
    }

  };


  const editAppartement = async (id)=>{
    console.log(id);
    try {
    
      const response = await axios.get(`http://localhost:8000/api/appartement/editAppartement?id=${id}`);
      setAppartementData(response.data.appartementData)
      setGet(true)
    
      // /console.log(response.data.appartementData);
  


  } catch (error) {
       
       
      console.error(error); 

  }
  return false 

  }

 


  const addAppartement = async () => {
    

    try {
        console.log(formData)
        const response = await axios.post('http://localhost:8000/api/appartement/addAppartement', formData);
       
        // if(response.data.message){
        //     setSuccessMessage(response.data.message)
        // }
    


    } catch (error) {
       
        //  setErrorMessage(error.response.data.error)
        console.error(error); 
    }
};

const updateAppartement = async (id)=>{
  
  try {
    console.log(formDataUpdated)
    const response = await axios.post(`http://localhost:8000/api/appartement/updateAppartement?id=${id}`, formDataUpdated);
    console.log(response.data);
   



} catch (error) {
  
    console.error(error); 
}

}



  return (
    <appartementContext.Provider
      value={{
        showAppartements,
        appartement2,
        setFormData,
        formData,
        addAppartement,
        appartementData,
        editAppartement,
        updateAppartement,
        formDataUpdated,
        setFormDataUpdated
  
      }}
    >
      {children}
    </appartementContext.Provider>
  );
}

export function useAppartement() {
  const context = useContext(appartementContext);

  return context;
}