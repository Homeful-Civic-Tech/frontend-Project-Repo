import React from 'react'
import '../CSS/Body.css'

function Body(){
  return (
    <div className='container'>
    <div className='cardContainer'>
        <h1 style={{fontFamily: 'lato', color: '#00274E'}}>Housing people in Brooklyn one person at a time</h1>
        <p style={{fontFamily: 'lato', color: '#00274E'}}>Homeful combats the homelessness crisis in New York City by providing access to shelters and rooms to houseless people through a shelter find-and-reserve application to improve their quality of life.</p>
      <button>Get started</button>
    </div>
      <div className='IMGContainer'>
        <div className='imgBox'>  
          <img src={require('../IMGs/bkyln-bridge.jpg')} height='80%' width='70%' sizes='20vw' alt='' className='shelterImg' fetchpriority='high'/>
        </div>
      </div>
      </div>
    )
}

export default Body
