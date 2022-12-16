import React from 'react'
import '../CSS/Body.css'
function Body(){
  return (
    <div className='all-lading'>
    <div className='cardContainers'>
        <h1 style={{fontFamily: 'lato', color: '#00274E'}}>Housing people in Brooklyn one person at a time</h1>
        <p style={{fontFamily: 'lato', color: '#00274E'}}>Homeful combats the homelessness crisis in New York City by providing access to shelters and rooms to houseless people through a shelter find-and-reserve application to improve their quality of life.</p>
      <button>Get started</button>
    </div>
      <div className='IMGContainers'>
        <div >
          <img className='imgBox' src={require('../IMGs/bkyln-bridge.jpg')} height='80%' width='80%' sizes='20vw' alt='' fetchpriority='high'/>
        </div>
      </div>
      </div>
    )
}
export default Body