import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "../CSS/ConfirmationReservation.css"
import Confetti from './Confetti'
import React from 'react';

export default function ConfirmedReservationMessage(){
    return(
        <>
        <div className="message-container">
           {/* <Confetti/> */}
            <h2>Congratulations, your booking is confirmed.</h2>
            </div>

            <div className='buttons-for-conf-page'>
            <Button type="submit" className='backtoFeeds' variant="outlined" size="small">Go back</Button><Link to='/feeds' style={{textDecoration: 'none'}}></Link>
            
            <Link to='/user' style={{textDecoration: 'none'}}><Button type="submit" className="viewReservations" variant="outlined" size="small">View my reservation</Button></Link>

             <Link to='/' style={{textDecoration: 'none'}}><Button type="submit" variant="outlined"
             className="goHome" size="small">Go home</Button></Link>
             </div>
             </>
    )
}