import {Routes, Route, useNavigate } from 'react-router-dom';
import "../CSS/ConfirmationReservation.css"
import Confetti from './Confetti'
import FeedsPage from './FeedsPage';
import LandingPage from './LandingPage'


export default function ConfirmedReservationMessage(){
    const navigate = useNavigate()

    function navigateToFeeds(){
        navigate('/feeds')
    }
    
    function navigateToHome(){
        navigate('/')
    }


    return(
        <>
        <div className="conf-container">
            <h2 className="message-container">Congratulations, your booking is confirmed.</h2>

            <div className='buttons-for-conf-page'>
            <button type="click" className='backtoFeeds' onClick={navigateToFeeds}>Go back</button>
            
            <button type="click" className="viewReservations" onClick={() => navigate("/Profile")}>View my reservation</button>

            <button type="click" className="goHome"onClick={navigateToHome}>Go home</button>
            </div>
            </div>
        </>
    )
}