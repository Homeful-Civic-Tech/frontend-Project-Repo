import * as React from 'react';
import { useState } from "react"


export default function ShelterBtn() {


    const [shelterName, setShelterName] =  useState('')
    const [shelterAddress, setShelterAddress] = useState('')
    
        
 function handleSNChange(e){
    e.preventDefault()
    setShelterName(e.target.value)
   }
   
   function handleADChange(e){
    e.preventDefault()
    setShelterAddress(e.target.value)
   }

    
   let SumbitForm = (e)=>{
    e.preventDefault();
    let data = {
        "shelter_name":shelterName,
        "location":shelterAddress,
       
    }

    let raw = JSON.stringify({ 
        "shelter_name":data.shelter_name,
        "location":data.location
        
    })
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: raw
    };
    fetch('http://localhost:4009/shelters/add',requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
   }
   
    return(
        
        <form onSubmit={SumbitForm} className='add-form' >
        <div className='form-control'>
          <label>Add Room Name</label>
          <input 
          id ='name'
          value={shelterName}
          type='text'
          onChange={handleSNChange}
            
          />
          
        </div>
       
        <div className='form-control'>
        <label>Add Room location</label>
          <input
          value={shelterAddress}
          id = 'location'
          type='text'
          onChange={handleADChange}
            
          />
        </div>
    
  
        <input className="button-70" type='submit'/>
      </form>
      
    )
    
}