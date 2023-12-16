import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import { useAppartement } from "../../contexts/appartementContext.jsx";
import { useState } from "react";
import axios from "axios";
export default function form() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  // const {formData,setFormData, addAppartement}= useAppartement();
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};
const addAppartement = async (e) => {
  e.preventDefault();
  console.log("gggggggg");

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

// const handleAppartData = () =>{
//   addAppartement();

// }

  return (
    <>
      <Button onPress={onOpen} className="text-white"   style={{backgroundColor:"#095028"}}>+Appartement</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={addAppartement}>
              <ModalHeader className="flex flex-col gap-1">Add appartement</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                 
                  label="Name"
                  placeholder="Enter Appartement name"
                  variant="bordered"
                  name="name"
                  onChange={handleInputChange}
                />
                <Input
                
                  label="Description"
                  placeholder="Description"
                  type="text"
                  variant="bordered"
                  name="description"
                  onChange={handleInputChange}
                />
                    <Input
                
                label="Rental price"
                placeholder="rental price"
                type="number"
                variant="bordered"
                name="prixParMois"
                onChange={handleInputChange}
              />
                  <Input
                
                label="Surface"
                placeholder="surface"
                type="number"
                variant="bordered"
                name="surface"
                onChange={handleInputChange}
              />
             
                  <Input
                
                label="Number of pieces"
                placeholder="Number of pieces"
                type="number"
                variant="bordered"
                name="nombrePieces"
                onChange={handleInputChange}
              />
                <Input
                
                label="Adresse"
                placeholder="adresse"
                type="text"
                variant="bordered"
                name="adresse"
                onChange={handleInputChange}
              />
                 <Input
                
                label="Status"
                placeholder="status"
                type="text"
                variant="bordered"
                name="status"
                onChange={handleInputChange}
              />
                 <Input
                
                label="Client"
                placeholder="Nom de client"
                type="text"
                variant="bordered"
                name="clientId"
                onChange={handleInputChange}
              />
              
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" color="primary">
                 Submit
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
