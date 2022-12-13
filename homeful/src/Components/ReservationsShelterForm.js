import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import "../CSS/ReservingShelterForm.css"
import ReservationConfirmation from './ReservationsConfirmation'


export default function ReservingAShelterForm(){
  const [ firstname, updateFNChange ] = useState('')
  const [ lastname, updateLNChange ] = useState('')
  const [ gender, updateGenderChange ] = useState('')
  const [ email, updateEMLChange ] = useState('')
  const [ additionalInfoText, updateAITChange ] = useState('')
  const [showReservForm, setReservForm] = useState(true)
  const [showConf, setConf] = useState(false)
  // const [message, setMessage] = useState({fn: '', ln: '', gndr: '', eml: ''})
  

function handleSubmit(e){
  e.preventDefault()
  const emlRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,6}$/
  
  if(firstname.length < 2){
      alert('First name input cannot be less than 2 char')
  } else if(lastname.length < 2 ){
    alert('Last name input cannot be less than 2 char')
  } else if(!emlRegex.test(email)){
    alert('Email input is invalid.')
  } else if(!gender) {
    alert('Please select a gender')
  } else{
    setReservForm(false)
    setConf(true)
  }
}

return (
  <>
  {showConf && <ReservationConfirmation/>}
  {showReservForm && 
  <div className="rsf-container">
   <div className="form-container">
    <h1 className='header-text'>Enter your details below</h1>
    <form className='form-reserv' onSubmit={handleSubmit} >

        <input type="text" name="firstName" placeholder="First Name"  autoComplete="off" value={firstname} required onChange={(e) => {updateFNChange(e.target.value)}}/>

        <input type="text" placeholder="Last Name" name="lastName" value={lastname}  autoComplete="off" required onChange={(e) => {updateLNChange(e.target.value)}}/>

  
        <input type="text" placeholder="Email" name="email" value={email}  autoComplete="off" required onChange={(e) => {updateEMLChange(e.target.value)}}/>

      <div className="gender-container">
        <label className='g-q'>Gender:</label>  
        <input type="radio" name="gender" value="female" id='female' style={{display:'inline'}} onChange={(e) => {updateGenderChange(e.target.value)}}/>
        <label htmlFor='female'>Female</label>

        <input type="radio" name="gender" value="male" id='male' onChange={(e) => {updateGenderChange(e.target.value)}}/>
        <label htmlFor='male'>Male</label>

        <input type="radio" name="gender" value="nonBinary" id='nonBinary' onChange={(e) => {updateGenderChange(e.target.value)}}/>
        <label htmlFor='nonBinary'>Non-Binary</label>
        </div>

        <input type="text" placeholder="Anything you'd like to let us know?" value={additionalInfoText} onChange={(e) => updateAITChange(e.target.value)}/><br/>
      
      <div className="button-submit">
      <button type="submit" className="submitReservation">Book Reservation</button>
      </div>
    </form>
    </div>
    </div>}
    </>
  )
}