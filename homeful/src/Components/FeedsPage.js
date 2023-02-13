import React from 'react'
import FeedsNavbar from './Feedsnav'
import Search from './Search'
import FilterButton from './Filter'
import Post from './Post.js'
import RoomsPost from './RoomsPost.js'
import '../CSS/FeedsPage.css'
import {useState, useEffect} from 'react'

import Button from '@mui/material/Button'

function FeedsPage(){
  let [shelters, getShelters] = useState([]);
  let [rooms , getRooms] = useState([]);
  const [searchInfo, setSearchInfo] = useState('')
  
    async function allRooms () {
      let info = await fetch('http://backend-deployment-production.up.railway.app/rooms/')
        .then(response => {
          if (response.ok){
            return response.json()
          }
          throw response
        })
        
        getRooms(info)
      }
       
     async function allShelters () {
     let info = await fetch('http://backend-deployment-production.up.railway.app/shelters/')
      .then(response => {
        if (response.ok){
          return response.json()
        }
        throw response
      })
      
      getShelters(info)
     }
    
    
  async function searchShelterAndRooms (){
    if(searchInfo<=0 && searchInfo != 'search'){
    allRooms()
    allShelters()

    }else if(searchInfo!='search') {
    let shelterInfo = await fetch(`http://backend-deployment-production.up.railway.app/shelters/search/${searchInfo}`)
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response
    })
    let roomInfo = await fetch(`http://backend-deployment-production.up.railway.app/rooms/search/${searchInfo}`)
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response
    })
    getRooms(roomInfo)
    getShelters(shelterInfo)
}
      

    
    
  }
  searchShelterAndRooms() 
      
 async function getcategory (category){
  setSearchInfo('search')
  let shelterInfo = await fetch(`http://backend-deployment-production.up.railway.app/shelters/category/${category}`)
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response
    })
    let roomInfo = await fetch(`http://backend-deployment-production.up.railway.app/rooms/category/${category}`)
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response
    })
    getRooms(roomInfo)
    getShelters(shelterInfo)
}
 




 function handleSearchChange (e){
  e.preventDefault()
  setSearchInfo(e.target.value)

  
  
 
 }
 


 
  
  return (
  <div>
  <FeedsNavbar/>
  <div className='feedspg'>
  <div className="container1">
      <form className="nosubmit">
      <input className="nosubmit" value={searchInfo} onChange={handleSearchChange} type="search" placeholder="Search..."/>
      </form>
      </div>  
   <div className='feedsButton' >
   <div className="forms" >
      <Button style={{
      borderRadius: 35,
      backgroundColor: "#00274E",
      padding: "10px 15px",
      fontSize: "10px",
       fontfamily: 'lato',
       }}   onClick = {(e)=>{
        e.preventDefault()
        getcategory('Woman')
       }}
        variant='contained' >
        Woman
      </Button>
      <Button style={{
      borderRadius: 35,
      backgroundColor: "#00274E",
      padding: "10px 15px",
      fontSize: "10px",
       fontfamily: 'lato',
       }}    onClick = {(e)=>{
        e.preventDefault()
        getcategory('Man')
       }}
        variant='contained' >
        Men
      </Button>
      <Button style={{
      borderRadius: 35,
      backgroundColor: "#00274E",
      padding: "10px 15px",
      fontSize: "10px",
       fontfamily: 'lato',
       }}     onClick = {(e)=>{
        e.preventDefault()
        getcategory('Family')
       }}
        variant='contained' >
        Family
      </Button>
     
  </div>
  </div>
  <div className='post'>
    
    {rooms.map(post => <RoomsPost obj={post} key={post.id}/>)}
    {shelters.map(post => <Post obj={post} key={post.id}/>)}
        
    </div>
 </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
</div>
)
}

export default FeedsPage