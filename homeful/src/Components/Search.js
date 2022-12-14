import React, { useState, useEffect } from "react";
import'../CSS/search.css'



export default function Search(){
  const [searchInfo, setSearchInfo] = useState('')
  const [rooms, getRooms] = useState([])
  
  
 function handleSearchChange (e){
  e.preventDefault() 
  setSearchInfo(e.target.value)
 }
 useEffect(()=>{
    async function allRooms () {
      let info = await fetch(`http://localhost:4009/shelters/search/${searchInfo}`)
       .then(response => {
         if (response.ok){
           return response.json()
         }
         throw response
       })
       
       getRooms(info)
     }
       allRooms()
       console.log(rooms)
    },[])
    return (
      <div className="container">
      <form className="nosubmit">
      <input className="nosubmit" value={searchInfo} onChange={handleSearchChange} type="search" placeholder="Search..."/>
      </form>
      </div>  
    )
    }

