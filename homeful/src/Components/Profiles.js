import React from 'react'
import Navbar from './Navbar'
import Carousel from 'react-material-ui-carousel';
// import Post from './Post.js'
// import Button from '@mui/material/Button'
// import Paper from '@mui/material/Paper'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


function Carousell(props) {
  

    return (
        <Carousel>
            {/* {shelters.map((item, i) => (<Item key={i} {...url} /> ))} */}
        </Carousel>
    );
}

// const Item = ({ url, location, shelter_name, num_phone}) => {
//     return (
//         <Paper>
//             <h2></h2>
//             <p></p>
//             <Button>more info...</Button>
//         </Paper>
//     );
// };

function ProfilePage (){
    let [eachShelter, getShelters] = useState("");
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
      getShelters(info)
    }
      allShelters()
  
    },[id])
    
    console.log(eachShelter[0].shelter_name)
    
    return (
        <div>
            <Navbar/>
            <Carousell/>
           
          
            


        </div>
    )
}


export default ProfilePage

