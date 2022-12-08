import React from "react";



import Button from '@mui/material/Button'
import HouseIcon from '@mui/icons-material/House';
import '../CSS/Placetostay.css'



function PlacestostayButton(){
  return (
    <Button className="places" startIcon={<HouseIcon/>} variant='contained' style={{
      borderRadius: 35,
      backgroundColor: "#21b6ae",
      padding: "10px 15px",
      margin:"0px 5px",
      fontSize: "10px"}} >
    Places to stay
  </Button>
  )
  }
export default PlacestostayButton