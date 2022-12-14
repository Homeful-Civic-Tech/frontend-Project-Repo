import React from 'react'
import Navbar from './Navbar'
import '../CSS/Navbar.css'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import GoogleMaps from './googlemap';





function ProfilePage (){
  let [eachShelter, getShelters] = useState([]);
  let {id} = useParams()



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
     
     
    }
      allShelters()
  
    },[id])








    
    return (
        <div>
            <Navbar/>
            <ProfileInfo myData={eachShelter}/>
            {/* <GoogleMaps/> */}

           
        </div>
    )
}


export default ProfilePage

