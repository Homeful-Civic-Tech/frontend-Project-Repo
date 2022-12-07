// import * as React from 'react';
import Button from '@mui/material/Button'
import {useState, useEffect} from 'react'

//  import React from "react"
import "./Listcard.css"



// function ListCard(props){
//   return(
//     <div> 
//       <h2 id="shelter-post">{props.caption}</h2>
//       <h2 id="shelter-phone">{props.phone}</h2>
//     </div>
//   )
// }
// //creating what goes into each specific post  
// function Post(props) {
//     return (
//    <div id="post">
//      <div id="overlay">
//      <img src={props.obj.image} width="200px" height="200px"></img>
//      <h1 id="shelterName">{props.obj.shelterName}</h1>
//      <ListCard
//            phone={props.obj.phone}
//            caption={props.obj.caption}
//      />
//      </div>
//   </div>
//  )
// }

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



  export default function App() {
    let [shelters, getShelters] = useState([]);
  useEffect(()=>{
   async function allShelters () {
   let info = await fetch('http://localhost:4009/shelters/')
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response
    })
    getShelters(info)
  }
    allShelters()
    
  },[])
    return (
      <div>
        <div className='post'>
        {shelters.map(post => <Post obj={post} key={post.id}/>)}
      </div>
       
        {/* <ListCard/> */}
        {/* <PostFeed/> */}
      </div>
    )
  }
  











