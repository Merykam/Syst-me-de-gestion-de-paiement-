import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import { useAppartement } from "../../contexts/appartementContext.jsx";
import { useClient } from "../../contexts/clientContext.jsx";
import { useState } from "react";
import axios from "axios";

export default function form() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {formData,setFormData, addAppartement,errors}= useAppartement();
  const {showClients,client}= useClient();
 

const handleInputChange = (e) => {
   
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
useEffect(()=>{
  showClients();
},[])


const handleAppartData = (e) =>{
  e.preventDefault();
  addAppartement();


}

  return (
    <>
      <Button onPress={onOpen} className=" font-bold text-white text-md"  style={{backgroundColor:"black"}}  >+ Add Appartement</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleAppartData}>
              <ModalHeader className="flex flex-col gap-1">Add appartement</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                 
                  label="Name"
                  placeholder="Enter Appartement name"
                  variant="bordered"
                  name="name"
                  onChange={handleInputChange}
                  error={errors.name}
                  />
                        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

                <Input
                
                  label="Description"
                  placeholder="Description"
                  type="text"
                  variant="bordered"
                  name="description"
                  onChange={handleInputChange}
                />
                 {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
                    <Input
                
                label="Rental price"
                placeholder="rental price"
                type="number"
                variant="bordered"
                name="prixParMois"
                onChange={handleInputChange}
              />
              {errors.prixParMois && <span style={{ color: 'red' }}>{errors.prixParMois}</span>}

                  <Input
                
                label="Surface"
                placeholder="surface"
                type="number"
                variant="bordered"
                name="surface"
                onChange={handleInputChange}
              />
                            {errors.surface && <span style={{ color: 'red' }}>{errors.surface}</span>}

             
                  <Input
                
                label="Number of pieces"
                placeholder="Number of pieces"
                type="number"
                variant="bordered"
                name="nombrePieces"
                onChange={handleInputChange}
              />
                            {errors.nombrePieces && <span style={{ color: 'red' }}>{errors.nombrePieces}</span>}

                <Input
                
                label="Adresse"
                placeholder="adresse"
                type="text"
                variant="bordered"
                name="adresse"
                onChange={handleInputChange}
              />
                            {errors.adresse && <span style={{ color: 'red' }}>{errors.adresse}</span>}

             <select onChange={handleInputChange} className="border-2 rounded-2xl p-3" name="clientId" id="">
             <option value="No client">No client</option>
              {client && client?.map(singlClient=>(
              <option  
                variant="bordered"
                
                value={singlClient.name}
                >
                  {singlClient.name}
                  </option>

                       

                ))}

              </select>

          

                <select onChange={handleInputChange} className="border-2 rounded-2xl p-3" name="status" id="">
            
                
              <option  
                variant="bordered"
                value="loué"
                  >loué</option>
                   <option 
                    value="vide" 
                variant="bordered"
                  >vide</option>
                


              </select>
              
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
