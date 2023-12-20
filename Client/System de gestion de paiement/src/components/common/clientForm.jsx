import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import { useAppartement } from "../../contexts/appartementContext.jsx";
import { useClient } from "../../contexts/clientContext.jsx";
import { useState } from "react";


export default function clienForm() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const {addClient,FormData,setFormData}= useClient();
 

const handleInputChange = (e) => {
   
    setFormData({ ...FormData, [e.target.name]: e.target.value });
   
  };

  function addClient1(e){
    e.preventDefault();
    addClient();
  }





  return (
    <>
      <Button onPress={onOpen} className=" font-bold text-white text-md m-5"  style={{backgroundColor:"black"}}  >+ Add Client</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={addClient1}>
              <ModalHeader className="flex flex-col gap-1">Add client</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                 
                  label="Name"
                  placeholder="Enter Appartement name"
                  variant="bordered"
                  name="name"
                  onChange={handleInputChange}
                 
                  />
                        {/* {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>} */}

                <Input
                
                  label="CIN"
                  placeholder="Enter client"
                  type="text"
                  variant="bordered"
                  name="CIN"
                  onChange={handleInputChange}
                />
                 {/* {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>} */}
                    <Input
                
                label="Number phone"
                placeholder="Number phone"
                type="text"
                variant="bordered"
                name="phoneNumber"
                onChange={handleInputChange}
              />
             
              
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
