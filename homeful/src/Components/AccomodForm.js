import { useState } from "react"
import SubmitAcomForm from "./SubmitAcomForm"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Navbar from './Navbar'
import BackToFeeds from "./BackToFeeds";
import { styled } from '@mui/system';


const StyledContainer = styled('div')({
  backgroundColor: '#95BDB7',
  display: 'flex',
  flexFlow: "column",
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: '8px',
  height: '100vh'
});

const StyledButton = styled('div')({
  display: 'flex',
  justifyContent: 'space-evenly',
  paddingTop: '15px',
  

})


export default function AccamodForm(){
   const [roomName, setRoomName] =  useState('')
   const [roomAddress, setRoomAddress] = useState('')
   const [roomBio, setRoomBio] = useState('')
   const [imgURL, setImgURL] = useState('')

  console.log(roomName, roomAddress, roomBio, imgURL)
   function handleRNChange(e){
    setRoomName(e.target.value)
   }

   function handleADChange(e){
    setRoomAddress(e.target.value)
   }

   function handleBioChange(e){
    setRoomBio(e.target.value)
   }

   function handleURLUpload(e){
        setImgURL(e.target.value)
    }

    function handleAppSubmit(e){
        // e.preventDefault();
        alert('Success!')
    }

    return(
      <>
      <Navbar/>
      <StyledContainer>
      <Typography variant="h5" sx={{'color': 'white', 'fontFamily': 'lato'}}>Adding Room Application</Typography>
        <Box
        component="form"
        sx={{
          'backgroundColor': "E07A5F",
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        onSubmit={(e) => handleAppSubmit(e)}
        autoComplete="off"
      ><br/>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            placeholder="Name"
            size="small"
            value={roomName}
            sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
            onChange={(e) => {handleRNChange(e)}}
          /><br/>
          <TextField
            required
            id="outlined-required"
            label="Address"
            value={roomAddress}
            placeholder="Address"
            size="small"
            sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
            onChange={(e) => {handleADChange(e)}}
          /><br/>
          <TextField
            required
            id="outlined-required"
            label="Bio"
            placeholder="Bio"
            size="small"
            value={roomBio}
            sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
            onChange={(e) => {handleBioChange(e)}}
          /><br/>
          <TextField
            required
            id="outlined-required"
            label="IMG URL"
            placeholder="IMG URL"
            size="small"
            value={imgURL}
            sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
            onChange={(e) => {handleURLUpload(e)}}
          /><br/>
          <StyledButton>
          <BackToFeeds/>
          <SubmitAcomForm/>
          </StyledButton>
          </div>
          </Box>
          </StyledContainer>
          </>
        )
        }
        