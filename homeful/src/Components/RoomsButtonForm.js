import { useState } from "react"






export default function RoomBtn (){

    const [roomName, setRoomName] =  useState('')
    const [roomAddress, setRoomAddress] = useState('')
    const [roomBio, setRoomBio] = useState('')
    const [quantity, setQuantity] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [category,setCategory] = useState('Must Select option')

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
   }
   
    return(
        
        <form onSubmit={SumbitForm} className='add-form' >
        <div className='form-control'>
          <label>Add Room Name</label>
          <input 
          id ='name'
          value={roomName}
          type='text'
          onChange={handleRNChange}
            
          />
          
        </div>
        <div className='form-control'>
        <label>Add Room Url</label>
          <input 
          value={imgURL}
          id ='url'
          type='text'
          onChange={handleURLUpload}
          />
        </div>
        <div className='form-control'>
        <label>Your phone #</label>
          <input
          value={phoneNum}
          id = 'location'
          type='text'
          onChange={handlePNChange}
            
          />
        </div>
        <div className='form-control'>
        <label>Add Room location</label>
          <input
          value={roomAddress}
          id = 'location'
          type='text'
          onChange={handleADChange}
            
          />
        </div>
        <div className='form-control'>
        <label>Add Short bio </label>
        <textarea
            required
            value={roomBio}
            id ='bio'
            onChange={handleBioChange}
        ></textarea>
    
        </div>
        <div className='form-control'>
        <label>Add Quantity </label>
          <input
          value={quantity}
          type='text'
          onChange={handleQChange}
            
          />
        </div>
        
        <label>Who are you looking to share a room with...</label>
        <select 
        onChange ={handleCChange}
        value ={category}
        >
            <option value ="Must Select option">Must Select option</option>
            <option value ="Female">Female</option>
            <option value ="Male">Male</option>
            <option value ="Unisex">Unisex</option>
            <option value ="Family">Family</option>
            <option value ="All">All</option>
        </select>
    
  
        <input className="button-70" type='submit'/>
      </form>
      
    )

}