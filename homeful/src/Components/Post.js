// import * as React from 'react';
import Button from '@mui/material/Button'
import {useState, useEffect} from 'react'

//  import React from "react"
import "../CSS/Post.css"





function Post(props) {
  return (
   
      <div className='cards'>
         <div  className='names'><h1>{props.obj.shelter_name}</h1></div>
         <img  className="img" src={props.obj.url} alt="" width="320x" height="260px"/>
         <p className='location'> {props.obj.location}</p>
         <p>  {props.obj.num_phone}</p>
         <Button variant='contained' style={{
            borderRadius: 35,
            backgroundColor: "#21b6ae",
            fontSize: "10px",
            margin: "5px 130px",
            margintop: "2px"
            }} size="small">Book</Button>
      </div>
    
    
  );
} 


export default Post
  











