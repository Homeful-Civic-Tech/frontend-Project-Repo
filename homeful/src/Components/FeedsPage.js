import React from 'react'
import FeedsNavbar from './Feedsnav'
import Search from './Search'
import FilterButton from './Filter'
import Post from './Post.js'
import RoomsPost from './RoomsPost.js'
import '../CSS/FeedsPage.css'
import {useState, useEffect} from 'react'
import PlacestostayButton from './Placetostay'
import Button from '@mui/material/Button'

function FeedsPage(){
  let [shelters, getShelters] = useState([]);
  let [rooms , getRooms] = useState([]);
  const [searchInfo, setSearchInfo] = useState('')
  
    async function allRooms () {
      let info = await fetch('http://localhost:4009/rooms/')
        .then(response => {
          if (response.ok){
            return response.json()
          }
          throw response
        })
        
        getRooms(info)
      }
       
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
    
    
  async function searchShelterAndRooms (){
    if(searchInfo<=0){
    allRooms()
    allShelters()

    }else if(searchInfo!='search') {
    let shelterInfo = await fetch(`http://localhost:4009/shelters/search/${searchInfo}`)
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response
    })
    let roomInfo = await fetch(`http://localhost:4009/rooms/search/${searchInfo}`)
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
  let shelterInfo = await fetch(`http://localhost:4009/shelters/category/${category}`)
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response
    })
    let roomInfo = await fetch(`http://localhost:4009/rooms/category/${category}`)
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
  <div className="container">
      <form className="nosubmit">
      <input className="nosubmit" value={searchInfo} onChange={handleSearchChange} type="search" placeholder="Search..."/>
      </form>
      </div>  
   <div className='feedsButton' >
   <div className="forms" >
      <Button style={{
      borderRadius: 35,
      backgroundColor: "#21b6ae",
      padding: "10px 15px",
      fontSize: "10px",
       fontfamily: 'Poppins',
       }}   onClick = {(e)=>{
        e.preventDefault()
        getcategory('woman')
       }}
        variant='contained' >
        Woman
      </Button>
      <Button style={{
      borderRadius: 35,
      backgroundColor: "#21b6ae",
      padding: "10px 15px",
      fontSize: "10px",
       fontfamily: 'Poppins',
       }}    onClick = {(e)=>{
        e.preventDefault()
        getcategory('man')
       }}
        variant='contained' >
        Men
      </Button>
      <Button style={{
      borderRadius: 35,
      backgroundColor: "#21b6ae",
      padding: "10px 15px",
      fontSize: "10px",
       fontfamily: 'Poppins',
       }}     onClick = {(e)=>{
        e.preventDefault()
        getcategory('family')
       }}
        variant='contained' >
        Family
      </Button>
      <PlacestostayButton/>
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