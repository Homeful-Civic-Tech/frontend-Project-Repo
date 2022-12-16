import Navbar from './Feedsnav'
import ReservationsShelterForm from './ReservationsShelterForm'
import React from 'react';
import { useParams } from 'react-router-dom';


export default function ReservationsContainer(){
    let {id} = useParams()
    return (
        <>
        <Navbar/>
        <ReservationsShelterForm ids ={id}/>
        </>
    )
}