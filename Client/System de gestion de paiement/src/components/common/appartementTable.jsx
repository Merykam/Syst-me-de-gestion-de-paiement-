import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Dashboard from "../Dashboard";
import Form from '../common/form'

const appartementTable = ({appartement2}) => {
 console.log(appartement2);




  return (
   
    <div
      className="w-3/4 relative"
    >

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"/>
      <div className="flex flex-wrap  ">
        <div
          className="px-3 mb-6"
        >
          <div className=" text-dark flex-[1_auto] flex flex-col break-words  bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className=" absolute w-full bg-white  flex flex-col  break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 ">
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex justify-between m-2 ml-0 font-medium text-xl/tight text-dark w-full">
                  <div className="">
                  <span className="mr-3 font-semibold text-dark">Appartements</span>
                  {/* <span className=" mt-5 text-gray-600 text-sm">
                      All appartements you have
                    </span> */}
                  </div>
               
                  {/* <div className="flex justify-center">
                      <button  className="rounded-3xl bg-black px-5 py-2 text-white text-base">+ appartement</button>
                  </div> */}

                  <Form/>
                        
               
                   
                
                </h3>
             
              </div>

              <div className="flex-auto block py-8 pt-6 px-9 mt-10">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className=" text-[0.90rem] text-dark">
                        <th className="pb-3 text-start min-w-[175px]">
                          Name
                        </th>
                        <th className="pb-3 text-end min-w-[100px]">
                          Adresse
                        </th>
                        <th className="pb-3 text-end min-w-[100px]">
                          Surface
                        </th>
                        <th className="pb-3 text-end min-w-[100px]">Prix par mois</th>
                        <th className="pb-3 text-end min-w-[100px]">
                           Pièces
                        </th>
                      
                        <th className="pb-3 text-end min-w-[100px]">
                          Status
                        </th>
                        <th className="pb-3 text-end min-w-[100px]">
                          Client
                        </th>
                       

                        <th className="pb-3 text-end min-w-[50px]">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                 
                     
                    {appartement2 && appartement2.map((appart)=>(
                    

                
               
                        <tr
                       
                          className="border-b border-dashed last:border-b-0  text-[0.90rem]"
                        >
                               
                          <td className="p-3 pl-0">
                            <div className="flex items-center">
                              <div className="flex flex-col justify-start">
                           
                                  <a
                                   
                                    href="#"
                                    className="mb-1  transition-colors duration-200 ease-in-out  text-[0.90rem] text-secondary-inverse hover:text-primary"
                                  >
                               {appart.name}
                               
                                  </a>
                           
                              </div>
                            </div>
                          </td>

                          <td className="p-3 pr-0 text-end">
                            <span className=" text-light-inverse text-md/normal">
                           {appart.adresse}
                            </span>
                          </td>
                          <td className="p-3 pr-0 text-end">
                            <span className="font-semibold text-light-inverse text-md/normal">
                            {appart.surface} m²
                            </span>
                          </td>

                          <td className="p-3 pr-0 text-end">
                            <span className="font-semibold text-light-inverse text-md/normal">
                           {appart.prixParMois} DH
                            </span>
                          </td>
                          <td className="p-3 pr-0 text-end">
                            <span className="font-semibold text-light-inverse text-md/normal">
                            {appart.nombrePieces}
                            </span>
                          </td>

                 
                         
                         
                      
                     

                       
                            <td className="p-3 pr-0 text-end">
                          {appart.status == "vide" ?  <span
                                className="bg-red-500/25 font-bold text-red-800 text-center align-baseline inline-flex px-4 py-3 mr-auto items-center text-[.95rem] leading-none rounded-lg"
                              >
                               {appart.status}
                              </span>: <span
                                className="bg-lime-500/25 font-bold text-lime-900 text-center align-baseline inline-flex px-4 py-3 mr-auto items-center text-[.95rem] leading-none rounded-lg"
                              >
                               {appart.status}
                              </span>
                              
                              }
                             

                            </td>
                       

                        
                            <td className="p-3 pr-0 text-end">
                        
                        <span
                          className=" text-center align-baseline inline-flex px-4 py-3 mr-auto items-center  text-[.95rem] leading-none rounded-lg"
                        >
                         {appart.clientId? appart.clientId.name : "No client" }
                        </span>
                      </td>
                      

                  
                            <td class="p-3 pr-0 text-end  text-[0.90rem] flex">
                         
                                <button
                                  className="bg-gray-700 text-white rounded p-1"
                                 
                                >
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>

                                </button>
                                <button
                                className="bg-red-600 text-white rounded p-1 m-1"
                               
                              >
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>

                              </button>

                          
                              <button className="text-white bg-green-800 rounded p-1 m-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                              </svg>
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
  );
};

export default appartementTable
    