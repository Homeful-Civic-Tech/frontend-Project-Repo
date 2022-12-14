import { useState } from "react"
import * as React from 'react';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'; 
import ShelterAdd from './ShelterButtonForm';


export default function AccamodForm(){

  const navigate = useNavigate();
  const [showLogin ,setshowLogin] = useState(false)
  const [showSignin ,setshowSignin] = useState(true)
  const [roomName, setRoomName] =  useState('')
  const [roomAddress, setRoomAddress] = useState('')
  const [roomBio, setRoomBio] = useState('')
  const [quantity, setQuantity] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [category,setCategory] = useState('Must Select option')


  const handleLoginSwitch = (e) =>{
      if(showLogin === false){
          setshowLogin(!showLogin)
          setshowSignin(false)
      
      }
      
    }
    const handleSigninSwitch = (e) =>{
      if(showSignin === false)
          setshowSignin(!showSignin)
          setshowLogin(false)
          
          
    }
 function handleRNChange(e){
  e.preventDefault()
  setRoomName(e.target.value)
 }
 function handlePNChange(e){
  e.preventDefault()
  setPhoneNum(e.target.value)
 }
 function handleQChange(e){
  e.preventDefault()
  let num =e.target.value
  setQuantity(+num)
 }
 function handleADChange(e){
  e.preventDefault()
  setRoomAddress(e.target.value)
 }

 function handleBioChange(e){
  e.preventDefault()
  setRoomBio(e.target.value)
 }

 function handleURLUpload(e){
  e.preventDefault()
      setImgURL(e.target.value)
  }
  function handleCChange(e){
      e.preventDefault()
      setCategory(e.target.value)
      }

 let SumbitForm = (e)=>{
  e.preventDefault();
  let data = {
      "name":roomName,
      "bio":roomBio,
      "location":roomAddress,
      "phone_num":phoneNum,
      "url":imgURL,
      "quantity":quantity,
      "category": category
  }

  let raw = JSON.stringify({ 
      "name":data.name,
      "bio":data.bio,
      "location":data.location,
      "phone_num":data.phone_num,
      "url":data.url,
      "type_of":'room',
      "quantity":data.quantity,
      "category":data.category,
      "userid": 1
  })
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: raw
  };
  fetch('http://localhost:4009/rooms/',requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  navigate('/feeds')
 }
 
  return(
      <>
      <Navbar/>
          <div className="containers">
              <div className="message signup">
              <div className="btn-wrapper">
                  <button onClick = {handleSigninSwitch}className="button" id="signup">
                  Room
                  </button>
                  <button onClick = {handleLoginSwitch} className="button" id="login">
                  {" "}
                  Shelter
                  </button>
              </div>
              </div>
              {showLogin === true && <ShelterAdd />}
              {showSignin === true &&
              <div className="form form--signup">
                  <div className="form--heading">Add a Room</div>
                  <form autoComplete="off">
                      <div className='sign'>
                      <input value={roomName} type='text' onChange={handleRNChange} placeholder="Name of room"/>
                      <input value={imgURL} type='text'onChange={handleURLUpload} placeholder="Image URL"/>
                      <input value={phoneNum} type='text'onChange={handlePNChange} placeholder="Phone Number"/>
                      <input value={roomAddress} type='text' onChange={handleADChange}placeholder="Location" />
                      <textarea required value={roomBio} id ='bio' onChange={handleBioChange} placeholder="Bio" ></textarea>
                      <input value={quantity} type='text' onChange={handleQChange} placeholder="How many rooms"/>
                      <label>Who are you looking to share a room with...</label>
                      <select  onChange ={handleCChange} value ={category}>
                          <option value ="Must Select option">Must Select option</option>
                          <option value ="woman">Female</option>
                          <option value ="man">Male</option>
                          <option value ="Family">Family</option>
                      </select>
                      
                      
                      <button onClick ={SumbitForm} className="button">Add Room</button>
                  </div>
                  </form>
              </div>}
          </div>
      </>

  //     <form onSubmit={SumbitForm} className='add-form' >
  //     <div className='form-control'>
  //       <label>Add Room Name</label>
      //   <input 
      //   id ='name'
      //   value={roomName}
      //   type='text'
      //   onChange={handleRNChange}
          
      //   />
        
  //     </div>
  //     <div className='form-control'>
  //     <label>Add Room Url</label>
  //       <input 
  //       value={imgURL}
  //       id ='url'
  //       type='text'
  //       onChange={handleURLUpload}
  //       />
  //     </div>
  //     <div className='form-control'>
  //     <label>Your phone #</label>
  //       <input
  //       value={phoneNum}
  //       id = 'location'
  //       type='text'
  //       onChange={handlePNChange}
          
  //       />
  //     </div>
  //     <div className='form-control'>
  //     <label>Add Room location</label>
  //       <input
  //       value={roomAddress}
  //       id = 'location'
  //       type='text'
  //       onChange={handleADChange}
          
  //       />
  //     </div>
  //     <div className='form-control'>
  //     <label>Add Short bio </label>
  //     <textarea
  //         required
  //         value={roomBio}
  //         id ='bio'
  //         onChange={handleBioChange}
  //     ></textarea>
  
  //     </div>
  //     <div className='form-control'>
  //     <label>Add Quantity </label>
  //       <input
  //       value={quantity}
  //       type='text'
  //       onChange={handleQChange}
          
  //       />
  //     </div>
      
  //     <label>Who are you looking to share a room with...</label>
  //     <select 
  //     onChange ={handleCChange}
  //     value ={category}
  //     >
  //         <option value ="Must Select option">Must Select option</option>
  //         <option value ="Female">Female</option>
  //         <option value ="Male">Male</option>
  //         <option value ="Unisex">Unisex</option>
  //         <option value ="Family">Family</option>
  //         <option value ="All">All</option>
  //     </select>
  

  //     <input className="button-70" type='submit'/>
  //   </form>
    
  )

}