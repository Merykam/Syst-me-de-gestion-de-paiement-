import { createContext, useState, useContext } from "react";
import axios from "axios";



const appartementContext = createContext();





export function AppartementProvider({ children }) {

    const [appartement2, setAppartement]= useState('');
    const [ errors ,setErrors] = useState({})
    const [inserted, setInserted] = useState(false)
    
    const handleModalClose = () => {
      setModalOpen(false);
    };

    const [get,setGet]=useState(false)
    const [appartementData, setAppartementData]= useState('');

    const [rentedAppartement, setRentedAppartements]=useState('')

    const [formData, setFormData] = useState({
      name: '',
      description: '',
      prixParMois: '',
      surface:'',
      nombrePieces:'',
      adresse:'',
      status:'',
      clientId:''
    
    });

    const [formDataUpdated, setFormDataUpdated] = useState({
      name: '',
      prixParMois: '',
      surface:'',
      nombrePieces:'',
      adresse:'',
      status:'',
      clientId:''
    
    });



  const showAppartements = async () => {
    try {
      console.log("fffff");    
        const response = await axios.get('http://localhost:8000/api/appartement/showAppartement', { withCredentials: true });
        setAppartement(response.data.appartements)
        console.log(response);
      
        console.log(response.data.appartements);
        
    


    } catch (error) {
         
         
        console.error(error); 
    }

  };

  const showRentedAppartements = async () => {
    try {    
        const response = await axios.get('http://localhost:8000/api/appartement/rentedAppartements', { withCredentials: true });
        setRentedAppartements(response.data.rentedAppartements)
        console.log(response);
      
        console.log(response.data.rentedAppartements);
        
    


    } catch (error) {
         
         
        console.error(error); 
    }

  };


  const editAppartement = async (id)=>{
    console.log(id);
    try {
    
      const response = await axios.get(`http://localhost:8000/api/appartement/editAppartement?id=${id}`, { withCredentials: true });
      setAppartementData(response.data.appartementData)
      setGet(true)
    
      // /console.log(response.data.appartementData);
  


  } catch (error) {
       
       
      console.error(error); 

  }
  return false 

  }

 

  const validateForm = ()=>{
  const error = {}

  if(!formData.name.trim()){
    error.name = 'name is required '
  }
  if(!formData.description.trim()){
    error.description = 'description is required '
  }
  if(!formData.prixParMois.trim()){
    error.prixParMois = 'prixParMoix is required '
  }
  if(!formData.surface.trim()){
    error.surface = 'surface is required '
  }
  if(!formData.nombrePieces.trim()){
    error.nombrePieces = 'nombrePieces is required '
  }
  if(!formData.adresse.trim()){
    error.adresse = 'adresse is required '
  }
  if(!formData.status.trim()){
    error.status = 'status is required '
  }


  setErrors(error)
  console.log("hello");
  console.log(errors);
  
  


  return Object.keys(error).length === 0;


  }
  const validateForm2 = ()=>{
    const error = {}
  
    if(!formDataUpdated.name.trim()){
      error.name = 'name is required '
    }
    if(!formDataUpdated.description.trim()){
      error.description = 'description is required '
    }
    if(!formDataUpdated.prixParMois.trim()){
      error.prixParMois = 'prixParMoix is required '
    }
    if(!formDataUpdated.surface.trim()){
      error.surface = 'surface is required '
    }
    if(!formDataUpdated.nombrePieces.trim()){
      error.nombrePieces = 'nombrePieces is required '
    }
    if(!formDataUpdated.adresse.trim()){
      error.adresse = 'adresse is required '
    }
    if(!formDataUpdated.status.trim()){
      error.status = 'status is required '
    }
  
  
    setErrors(error)
    console.log("hello");
    console.log(errors);
    
    
  
  
    return Object.keys(error).length === 0;
  
  
    }
  const addAppartement = async () => {
    
  if (!validateForm()){
    return ;
  }
    try {
        console.log(formData)
        const response = await axios.post('http://localhost:8000/api/appartement/addAppartement', formData,{ withCredentials: true });
        setInserted(!inserted)
        console.log('hhhh');
       
        // if(response.data.message){
        //     setSuccessMessage(response.data.message)
        // }
    


    } catch (error) {
       
        //  setErrorMessage(error.response.data.error)
        console.error(error); 
    }
};

const updateAppartement = async (id)=>{
  // if (!validateForm2()){
  //   return ;
  // }
  try {
    console.log(formDataUpdated)
    const response = await axios.post(`http://localhost:8000/api/appartement/updateAppartement?id=${id}`, formDataUpdated, { withCredentials: true });
    console.log(response.data);
    setInserted(!inserted)
   



} catch (error) {
  
    console.error(error); 
}

}

const deleteAppartement = async (id)=>{
  
  try {
  
    const response = await axios.post(`http://localhost:8000/api/appartement/deleteAppartement?id=${id}`, { withCredentials: true });
    console.log(response.data.message);
   setInserted(!inserted)



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
        setFormDataUpdated,
        errors,
        showRentedAppartements,
        rentedAppartement,
        deleteAppartement,
        setInserted,
        inserted
  
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