import React from 'react'
import FeedsNavbar from './Feedsnav'
import Search from './search'
import FilterButton from './Filter'
import Post from './Listcard'
import './FeedsPage.css'

function FeedsPage(){
  return (
<div>
  <FeedsNavbar/>
  <div className='feedspg'>
  <Search/>
   <div className='feedsButton' >
    <FilterButton/> 
  </div>
    <Post/>
 </div>
</div>
)
}

export default FeedsPage