import React from "react";
import Button from '@mui/material/Button'
import FilterListIcon from '@mui/icons-material/FilterList';
import PlacestostayButton from './Placetostay'
import '../CSS/Filter.css'



function FilterButton(){
  return (
    <div className="forms" >
      <Button startIcon={<FilterListIcon/>}   style={{
      borderRadius: 35,
      backgroundColor: "#00274E",
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