// import * as React from 'react';
import Button from '@mui/material/Button'
import { useNavigate, Link } from "react-router-dom";
//  import React from "react"
import "../CSS/Post.css"







function Post(props) {
 
 

  return (


   <Link to={`/feeds/${props.obj.id}`}>
      <div className='cards'>
         <div  className='names'><h1  >{props.obj.shelter_name}</h1></div>
         <img  className="img" src={props.obj.url} alt="" width="320x" height="260px"/>

         <p className='location'> {props.obj.location}</p>
         <div className='line'></div>
         <Button variant='contained' style={{
            borderRadius: 35,
            backgroundColor: "white",
            color: '#00274E',
            fontSize: "10px",
            margin: "10px 90px",
            padding:'7px'
            }} size="small">Book</Button>
      </div>
      </Link>
    
    
  );
} 


export default Post
  











