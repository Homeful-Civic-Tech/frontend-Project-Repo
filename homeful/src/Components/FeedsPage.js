import React from 'react'
import FeedsNavbar from './Feedsnav'
import Search from './Search'
import PlacestostayButton from './Placetostay'
import FilterButton from './Filter'
import Listcard from './Listcard'
import '../CSS/FeedsPage.css'

function FeedsPage(){
  return (
<div>
  <FeedsNavbar/>
  <div className='feedspg'>
  <Search/>
  <div className='feedsButton' >
  <PlacestostayButton/> <FilterButton/>
  </div>
  
 <Listcard/>
 </div>
</div>
)
}

export default FeedsPage