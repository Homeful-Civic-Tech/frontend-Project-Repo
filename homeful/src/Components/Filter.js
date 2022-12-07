import React from "react";


import Button from '@mui/material/Button'
import FilterListIcon from '@mui/icons-material/FilterList';
import PlacestostayButton from './Placetostay'
import '../CSS/Placetostay.css'/*same stying as placestostay */


function FilterButton(){
  return (
    <div className="form" >
      <Button startIcon={<FilterListIcon/>}   style={{
      borderRadius: 35,
      backgroundColor: "#21b6ae",
      padding: "10px 15px",
      fontSize: "10px",
       fontfamily: 'Poppins',
       }}   
        variant='contained' >
        Filter
      </Button>
      <PlacestostayButton/>
  </div>
  )
  }

export default FilterButton