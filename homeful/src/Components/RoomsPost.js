// import * as React from 'react';
import Button from '@mui/material/Button'
import { useNavigate, Link } from "react-router-dom";
//  import React from "react"
import "../CSS/Post.css"
import React from 'react';







function RoomsPost(props) {
 
 

  return (
    <Link to={`/rooms/${props.obj.id}`} className="Post">
    <div className='cardss'>
 
       <img  className='imgs'src={props.obj.url} alt="" width="250x" height="240px"/>
 
       <div  className='name'><h1  >{props.obj.name}</h1></div>
       <p className='location'> {props.obj.location}</p>
       <div className='line'></div>
       <Button variant='contained' className='book'style={{
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


export default RoomsPost
  











