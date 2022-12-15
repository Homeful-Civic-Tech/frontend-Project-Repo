import React from "react";
import Button from '@mui/material/Button'
import HouseIcon from '@mui/icons-material/House';
import '../CSS/Post.css'
import { useNavigate } from 'react-router-dom'; 

function PlacestostayButton(){
  const navigate = useNavigate();
  return (
    <Button onClick = {()=>{navigate('/room-form')}} className="places" startIcon={<HouseIcon/>} variant='contained' style={{
      borderRadius: 35,
      backgroundColor: '#00274E',
      padding: "10px 15px",
      margin:"0px 5px",
      fontSize: "10px"}
      } >
    Places to stay
  </Button>
  )
  }
export default PlacestostayButton