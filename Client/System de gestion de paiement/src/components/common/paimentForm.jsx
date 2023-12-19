import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import { usePaiment } from "../../contexts/paimentContext.jsx";
import { useState } from "react";
import axios from "axios";

export default function form() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {addPaiment,formData,setFormData}= usePaiment();
 

const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handlePaimentData = (e) =>{
  e.preventDefault();
  addPaiment();

}

  return (
    <>
      <Button onPress={onOpen} className=" font-bold text-white text-md"  style={{backgroundColor:"black"}}   >+ Add paiment</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handlePaimentData}>
              <ModalHeader className="flex flex-col gap-1">Add paiment</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                 
                  label="Name"
                  placeholder="Select appartement name"
                  variant="bordered"
                  name="appartementId"
                  onChange={handleInputChange}
                />
             
                 <Input
                
                label="Price"
                placeholder="price"
                type="number"
                variant="bordered"
                name="prixParMois"
                onChange={handleInputChange}
              />
                 <Input
                
                label="Date"
                placeholder="date"
                type="date"
                variant="bordered"
                name="date"
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
