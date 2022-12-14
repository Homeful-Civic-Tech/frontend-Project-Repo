// import * as React from 'react';
import Button from '@mui/material/Button'
import { useNavigate, Link } from "react-router-dom";
//  import React from "react"
import "../CSS/Post.css"
import React from 'react';







function RoomsPost(props) {
 
 

  return (

   <Link to={`/feeds/${props.obj.id}`}>
      <div className='cards'>
         <div  className='names'><h1  >{props.obj.name}</h1></div>
         <img  className="img" src={props.obj.url} alt="" width="320x" height="260px"/>
         <p className='location'> {props.obj.location}</p>
         <Button variant='contained' style={{
            borderRadius: 35,
            backgroundColor: "#21b6ae",
            fontSize: "10px",
            margin: "5px 130px",
            margintop: "2px"
            }} size="small">Book</Button>
      </div>
      </Link>
    
    
  );
} 


export default RoomsPost
  











