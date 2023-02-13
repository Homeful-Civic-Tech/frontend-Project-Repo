import React from "react";
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
 

function ProfilePageSaves(props) {
   
        return (
      
   <div className='cardss'>

      <img  className='imgs'src={props.obj.url} alt="" width="250x" height="240px"/>

      <div  className='shelter_name'><h1  >{props.obj.shelter_name}</h1></div>
      <p className='location'> {props.obj.location}</p>
      
   </div>

        )
    }


function PostFeed() {
  let usersId = localStorage.getItem("userId");
    let [shelters, getShelters] = useState([]);
    useEffect(()=>{
     async function UserShelters () {
     let info = await fetch(`http://backend-deployment-production.up.railway.app/reservations/${usersId}`)
      .then(response => {
        if (response.ok){
          return response.json()
        }
        throw response
      })
      console.log(info)
      getShelters(info)
    }
      UserShelters()
  
    },[])


    if (shelters.length === 0){
    return (
        <div>
             {/* <FontAwesomeIcon icon={faStar} /> */}
             <h2>You don't have any shelters or accomadations saved</h2>
             <p> When you find a place you like, reserve it to save your places and you can find it again here.</p>
        </div>
    )
    }else{
    return(
        <div className='EachSave'>
            {shelters.map((post, i) => <ProfilePageSaves obj={post} key={i}/>)}
        </div>
    )
    }
}
 
 
export default PostFeed
