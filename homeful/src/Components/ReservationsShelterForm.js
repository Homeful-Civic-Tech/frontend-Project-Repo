import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "../CSS/ReservingShelterForm.css"

export default function ReservingAShelterForm(){
  const [ firstname, updateFNChange ] = useState('')
  const [ lastname, updateLNChange ] = useState('')
  const [ gender, updateGenderChange ] = useState('')
  const [ email, updateEMLChange ] = useState('')
  const [ additionalInfoText, updateAITChange ] = useState('')


return (
  <div className="rsf-container">
   <div className="form-container">
    <h1 className='header-text'>Enter your details below</h1>

    <form className='form'>
        <label className='fn-q'>First Name:
        <input type="text" name="firstName" value={firstname} required onChange={(e) => {updateFNChange(e.target.value)}}/></label>

        <label className='ln-q'>Last Name:
        <input type="text" name="lastName" value={lastname} required onChange={(e) => {updateLNChange(e.target.value)}}/></label>

        <label className='eml-q'>Email:
        <input type="text" name="email" value={email} required onChange={(e) => {updateEMLChange(e.target.value)}}/></label>

        <label className='g-q'>Gender:
        <input type="radio" name="gender" value="female"  onChange={(e) => {updateGenderChange(e.target.value)}}/>Female

        <input type="radio" name="gender" value="male"  onChange={(e) => {updateGenderChange(e.target.value)}}/>Male

        <input type="radio" name="gender" value="nonBinary"  onChange={(e) => {updateGenderChange(e.target.value)}}/>Non-Binary</label>

        <label className='text-box'>Anything you'd like to let us know?</label>
        <input type="text" value={additionalInfoText} onChange={(e) => updateAITChange(e.target.value)}/><br/>
    
    </form>
      <Button type="submit" variant="outlined" size="small" className="submitReservation">Book Reservation</Button>
      {gender && <Link to='/reservations/confirmation' style={{textDecoration: 'none'}}>     
      </Link>}
    </div>
    </div>
  )
}