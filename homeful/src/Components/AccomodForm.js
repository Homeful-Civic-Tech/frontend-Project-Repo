import { useState } from "react"
// import SubmitAcomForm from "./SubmitAcomForm"
import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Typography } from "@mui/material";
import Navbar from './Navbar'
// import BackToFeeds from "./BackToFeeds";
// import { styled } from '@mui/system';
import RoomButton from './RoomsButtonForm'
import ShelterButton from './ShelterButtonForm'

export default function AccamodForm(){
  const [showRoom ,setshowRoom] = useState(false)
  const [showShelter ,setshowShelter] = useState(false)
  const [title ,setTitle] = useState("Click Which Accommodations You'd Like To Add")


  const handleRoomSwitch = (e) =>{
    if(showRoom === false){
      setshowRoom(!showRoom)
      setshowShelter(false)
      setTitle("Click Submit When Your Ready To Add A New Room")
    }
    
  }
  const handleShelterSwitch = (e) =>{
    if(showShelter === false)
    setshowShelter(!showShelter)
    setshowRoom(false)
    setTitle("Click Submit When Your Ready To Send Use A New Shelter For Us to Review")
    
  }



  return (
    <>
      <Navbar></Navbar>
      <div className="form">
        <div id ='inner'>
        <div className="first-Question">
          
              <h1 className="title">{title}</h1>
    
          <div className="btns">
            <button className="button-70" onClick={handleShelterSwitch} type="button">Shelter</button>
            <button className="button-70" onClick={handleRoomSwitch}type="button">Room</button> 
          </div>
        </div>
        <div className="both-form">
          {showRoom === true && <RoomButton></RoomButton>}
          {showShelter === true && <ShelterButton></ShelterButton>}
        </div>
        </div>
      </div>
    </>
  )
}

// })


// export default function AccamodForm(){
  //  const [roomName, setRoomName] =  useState('')
  //  const [roomAddress, setRoomAddress] = useState('')
  //  const [roomBio, setRoomBio] = useState('')
  //  const [quantity, setQuantity] = useState('')
  //  const [imgURL, setImgURL] = useState('')

  //  function handleRNChange(e){
  //   e.preventDefault()
  //   setRoomName(e.target.value)
  //  }
  //  function handleQChange(e){
  //   e.preventDefault()
  //   let num = Number(e.target.value)
  //   setQuantity(num)
  //  }
  //  function handleADChange(e){
  //   e.preventDefault()
  //   setRoomAddress(e.target.value)
  //  }

  //  function handleBioChange(e){
  //   e.preventDefault()
  //   setRoomBio(e.target.value)
  //  }

  //  function handleURLUpload(e){
  //   e.preventDefault()
  //       setImgURL(e.target.value)
  //   }

//    let handleAppSubmit = useEffect(()=>{
//       let raw =JSON.stringify({ 
//         "name":roomName,
//         "bio":roomBio,
//         "location":roomAddress,
//         "url":imgURL,
//         "typeofs":"room",
//         "quantity":+quantity,
//         "userid":1
//        })
//       const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: raw
//     };
//    fetch('http://localhost:4009/rooms/',requestOptions)
//    .then(response => response.json())
//    .then(result => console.log(result))
//    .catch(error => console.log('error', error));
//     })

//     return(
//       <>
//       <Navbar/>
//       <StyledContainer>
//       <Typography variant="h5" sx={{'color': 'white', 'fontFamily': 'lato'}}>Adding Room Application</Typography>
//         <Box
//         component="form"
//         sx={{
//           'backgroundColor': "E07A5F",
//           '& .MuiTextField-root': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         onClick={handleAppSubmit}
//         autoComplete="off"
//       ><br/>
//         <div>
//           <TextField
//             required
//             id="outlined-required"
//             label="Name"
//             placeholder="Name"
//             size="small"
//             value={roomName}
//             sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
//             onChange={(e) => {handleRNChange(e)}}
//           /><br/>
//           <TextField
//             required
//             id="outlined-required"
//             label="Address"
//             value={roomAddress}
//             placeholder="Address"
//             size="small"
//             sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
//             onChange={(e) => {handleADChange(e)}}
//           /><br/>
//           <TextField
//             required
//             id="outlined-required"
//             label="Bio"
//             placeholder="Bio"
//             size="small"
//             value={roomBio}
//             sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
//             onChange={(e) => {handleBioChange(e)}}
//           /><br/>
//           <TextField
//             required
//             id="outlined-required"
//             label="quantity"
//             placeholder="quantity"
//             size="small"
//             value={quantity}
//             sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
//             onChange={(e) => {handleQChange(e)}}
//           /><br/>
//           <TextField
//             required
//             id="outlined-required"
//             label="IMG URL"
//             placeholder="IMG URL"
//             size="small"
//             value={imgURL}
//             sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
//             onChange={(e) => {handleURLUpload(e)}}
//           /><br/>
//           <StyledButton>
//           <BackToFeeds/>
//           <SubmitAcomForm/>
//           </StyledButton>
//           </div>
//           </Box>
//           </StyledContainer>
//           </>
//         )
//         }
        