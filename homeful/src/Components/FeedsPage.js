import React from 'react'
import FeedsNavbar from './Feedsnav'
import Search from './Search'
import FilterButton from './Filter'
import Post from './Post.js'
import '../CSS/FeedsPage.css'
import {useState, useEffect} from 'react'


function FeedsPage(){
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
  <FeedsNavbar/>
  <div className='feedspg'>
  <Search/>
   <div className='feedsButton' >
    <FilterButton/> 
  </div>
  <div className='post'>
        {shelters.map(post => <Post obj={post} key={post.id}/>)}
    </div>
 </div>
</div>
)
}

export default FeedsPage