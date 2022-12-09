import React from 'react'
import Navbar from './Navbar'

// import Post from './Post.js'
// import Button from '@mui/material/Button'
// import Paper from '@mui/material/Paper'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';





function ProfilePage (){
  let [eachShelter, getShelters] = useState([]);
  let {id} = useParams()

  // console.log(id)

    useEffect(()=>{
     async function allShelters () {
     let info = await fetch(`http://localhost:4009/shelters/${id}`)
      .then(response => {
        if (response.ok){
          return response.json()
        }
        throw response
      })
      getShelters(info[0])
      // console.log(info[0])
     
    }
      allShelters()
  
    },[id])

    
    return (
        <div>
            <Navbar/>
            <ProfileInfo myData={eachShelter}/>

           
        </div>
    )
}


export default ProfilePage

