import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import { useAppartement } from "../../contexts/appartementContext.jsx";
import { useState } from "react";
import axios from "axios";

export default function UpdateAppartementForm({isOpen, onOpen, onOpenChange}) {
//   const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {formData,setFormData, addAppartement,appartementData, editAppartement,updateAppartement,formDataUpdated,setFormDataUpdated}= useAppartement();
    const [name, setName] = useState("")

    // useEffect(()=> {
    //    setName(appartementData[0]?.name)
    //    onChange={(e) => setName(e.target.value)}
    // }, [appartementData])

console.log(formDataUpdated);

const handleInputChange = (e) => {
  console.log(e.target.name, e.target.value)
    setFormDataUpdated({ ...formDataUpdated, [e.target.name]: e.target.value });
    

};



const handleAppartData = (e) =>{
  e.preventDefault()
  const id = appartementData[0]?._id;
  console.log(id);
  console.log(formDataUpdated);
  updateAppartement(id);

}

  return (
    <>
      {/* <Button onPress={onOpen}  > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                              </svg></Button> */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
    
         
            <form onSubmit={handleAppartData}>

              <ModalHeader className="flex flex-col gap-1">Update appartement</ModalHeader>
              <ModalBody>
               
                

              {appartementData !== "" && appartementData?.map(appa=>(<div>

            
                <Input
                  autoFocus
                  defaultValue={appa.name}
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
                  defaultValue={appa.description}
                  onChange={handleInputChange}
                />
                    <Input
                
                label="Rental price"
                placeholder="rental price"
                type="number"
                variant="bordered"
                name="prixParMois"
                defaultValue={appa.prixParMois}
                onChange={handleInputChange}
              />
                  <Input
                
                label="Surface"
                placeholder="surface"
                type="number"
                variant="bordered"
                name="surface"
                defaultValue={appa.surface}
                onChange={handleInputChange}
              />
             
                  <Input
                
                label="Number of pieces"
                placeholder="Number of pieces"
                type="number"
                variant="bordered"
                name="nombrePieces"
                defaultValue={appa.nombrePieces}
                onChange={handleInputChange}
              />
                <Input
                
                label="Adresse"
                placeholder="adresse"
                type="text"
                variant="bordered"
                name="adresse"
                defaultValue={appa.adresse}
                onChange={handleInputChange}
              />
                 <Input
                
                label="Status"
                placeholder="status"
                type="text"
                variant="bordered"
                name="status"
                defaultValue={appa.status}
                onChange={handleInputChange}
              />
                 <Input
                
                label="Client"
                placeholder="Nom de client"
                type="text"
                variant="bordered"
                name="clientId"
                defaultValue="client"
                onChange={handleInputChange}
              />
             
             </div>))}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" className="text-white" style={{backgroundColor:"#095028"}}>
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
