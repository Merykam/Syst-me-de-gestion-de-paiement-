import React from 'react'
import { useEffect , useState } from 'react';
import PaimentForm from './common/paimentForm'
import appartement from "../assets/appartement.jpg"
import { usePaiment } from '../contexts/paimentContext';
import PaymentPDF from './PaimentPDF';


const AppartementPaiments = () => {
    const {paimentsAppartement}= usePaiment();
    console.log(paimentsAppartement);
   const [paimentToPrint, setPaimentToPrint] = useState(null);
    const [paiment,setPaiment] = useState(null)
   
   useEffect(()=>{
    if(paimentToPrint){
      let p = paimentsAppartement.find(item => item._id == paimentToPrint)
      setPaiment(p)
    }
   },[paimentToPrint])
  return (

    <div className='relative'>
 {paiment &&<div className='absolute z-50 bg-white w-full p-8 top-8 rounded-xl flex flex-col'>
    <button className='ms-auto w-max px-3 py-1 bg-green-700 text-white mb-2 ' onClick={()=>{setPaiment(null);setPaimentToPrint(null);}}>close</button>
  <PaymentPDF payment={paiment}/>
 </div>}
 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"/>
<div class="flex flex-wrap -mx-3 mb-5">
  <div class="w-full max-w-full px-3 mb-6  mx-auto">
    <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
      <div class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
 
        <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
          <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
            <span class="mr-3 font-semibold text-dark">Projects Deliveries</span>
            <span class="mt-1 font-medium text-secondary-dark text-lg/normal">All projects from the Loopple team</span>
          </h3>
          {/* <div class="relative flex flex-wrap items-center my-2">
          <PaimentForm/>
          </div> */}
        </div>
   
        <div class="flex-auto block py-8 pt-6 px-9">
          <div class="overflow-x-auto">
            <table class="w-full my-0 align-middle text-dark border-neutral-200">
              <thead class="align-bottom">
                <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                  <th class="pb-3 text-start min-w-[175px]">Appartement name</th>
                  <th class="pb-3 text-end min-w-[100px]">Appartement client</th>
                  <th class="pb-3 text-end min-w-[100px]">Price by month</th>
                  <th class="pb-3 pr-12 text-end min-w-[175px]">Date</th>
                  <th class="pb-3 text-end min-w-[50px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paimentsAppartement.map((paim2)=>(

               
                <tr class="border-b border-dashed last:border-b-0">
                  <td class="p-3 pl-0">
                    <div class="flex items-center">
                      <div class="relative inline-block shrink-0 rounded-2xl me-3">
                        <img  class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" src={appartement} alt=""/>
                      </div>
                      <div class="flex flex-col justify-start">
                        <a href="javascript:void(0)" class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> {paim2.appartementId?.name}</a>
                      </div>
                    </div>
                  </td>
                
                  <td class="p-3 pr-0 text-end">
                    <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none  rounded-lg">
                       {paim2.clientId?.name}</span>
                  </td>
                
                  <td class="p-3 pr-12 text-end">
                    <span class="font-semibold  text-md/normal">{paim2?.prixParMois}</span>
                  </td>
                  <td class="p-3 pr-12 text-end">
                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none  rounded-lg"> {paim2?.date} </span>
                  </td>
                  <td class="p-3 pr-0 text-end">
                    <button onClick={()=>setPaimentToPrint(paim2?._id)} class="rounded-2xl text-success bg-success-light font-bold  ml-auto flex items-center p-3 text-md  leading-normal text-center  cursor-pointer  transition-tion-200 ease-in-out shadow-none border-0 justify-center">
                     
                      Printed invoice
                   
                    </button>
                  </td>
                </tr>
                 ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default AppartementPaiments
