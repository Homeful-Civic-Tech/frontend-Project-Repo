import React from 'react'
import { useState , useEffect} from 'react'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import "../CSS/ReservingShelterForm.css"
import ReservationConfirmation from './ReservationsConfirmation'
import ConfettiAnim from './Confetti';


export default function ReservingAShelterForm(props) {
  const [firstname, updateFNChange] = useState('')
  const [lastname, updateLNChange] = useState('')
  const [sex, updateGenderChange] = useState('')
  const [email, updateEMLChange] = useState('')
  const [additionalInfoText, updateAITChange] = useState('')

  const navigate = useNavigate()

  function handleSEXChange(e) {
    updateGenderChange(e.target.value)
  }
  const userId = localStorage.getItem('userId')
  function handleSubmit(e) {
    e.preventDefault()
   
      const data = JSON.stringify({
        "firstname": firstname,
        "lastname": lastname,
        "gender": sex,
        "email": email,
        "message": additionalInfoText,
        "shelter_id": +props.ids,
        "user_id": +userId
      })
    
   

      let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
        redirect: 'follow'
      };
      // setReservForm(false)
      // setConf(true)
      fetch("http://localhost:4000/reservations/", requestOptions)
        .then(response =>response.json())
        .then(result => {
          console.log(result)
          navigate('/shelter-form/confirmation')
        })
        .catch(error => console.log('error', error));

    }
  

  return (
    <>
        <div className="rsf-container">
          <div className="form-container">
            <h1 className='header-text'>Enter your details below</h1>
            <form className='form-reserv' >

              <input type="text" name="firstName" placeholder="First Name" autoComplete="off" value={firstname} required onChange={(e) => { updateFNChange(e.target.value) }} />

              <input type="text" placeholder="Last Name" name="lastName" value={lastname} autoComplete="off" required onChange={(e) => { updateLNChange(e.target.value) }} />


              <input type="text" placeholder="Email" name="email" value={email} autoComplete="off" required onChange={(e) => { updateEMLChange(e.target.value) }} />

              <select onChange={handleSEXChange} value={sex}>
                <option value="">Sex</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>

              <input type="text" placeholder="Anything you'd like to let us know?" value={additionalInfoText} onChange={(e) => updateAITChange(e.target.value)} /><br />

              <button onClick={handleSubmit} className="button">Book</button>
            </form>
          </div>
        </div>
    </>
  )
}