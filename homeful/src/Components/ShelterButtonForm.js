import * as React from 'react';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function ShelterBtn() {

    const navigate = useNavigate();
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
    fetch('http://backend-deployment-production.up.railway.app0/shelters/add',requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    navigate('/feeds')
   }
   
    return(
        <div className="form form--login">
        <div className="form--heading">Add a Shelter</div>
        <form autoComplete="off" onSubmit={SumbitForm}>
            <div className='sign'>
            
                <input value={shelterName} type='text' onChange={handleSNChange} placeholder="Shelter name"/>
                
                
                
                <input value={shelterAddress} type='text' onChange={handleADChange} placeholder="Shelter address" />
        
            
  
                <button  type='submit' className="button">Submit</button> 
        </div>
      </form>
      </div>
      
      
    )
    
}