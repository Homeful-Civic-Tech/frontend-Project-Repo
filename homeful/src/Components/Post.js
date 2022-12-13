// import * as React from 'react';
import Button from '@mui/material/Button'
import { useNavigate, Link } from "react-router-dom";
//  import React from "react"
import "../CSS/Post.css"







function Post(props) {
 
 

  return (
   <Link to={`/feeds/${props.obj.id}`} className="Post">
      <div className='cardss'>
        
         <img  className='imgs'src={props.obj.url} alt="" width="250x" height="240px"/>
   
         <div  className='shelter_name'><h1  >{props.obj.shelter_name}</h1></div>
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
  











