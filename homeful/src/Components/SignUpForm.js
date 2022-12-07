import styled from '@emotion/styled'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Context from '../Contexts/Context'


const TextHolder = styled('span')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E07A5F',
    width: '100%',
    height: '25%',
})

const SUContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: 'white',
    fontFamily: 'Lato'
})
  

   


export default function SignUp(){
    const { firstName, setFirstName } = useContext(Context);
    const { lastName, setLastName } = useContext(Context);
    const { userName, setUserName } = useContext(Context);
    const { email, setEmail } = useContext(Context);
    const { password, setPassword } = useContext(Context);
    const { confirmPassword, setConfirmPassword } = useContext(Context);


    function handleFNChange(e){
        setFirstName(e.target.value)
    }

    function handleLNChange(e){
        setLastName(e.target.value)
    }

    function handleUSRNChange(e){
        setUserName(e.target.value)
    }

    function handleEMLChange(e){
        setEmail(e.target.value)
    }

    function handlePSWDChange(e){
        setPassword(e.target.value)
    }

    function handleCPChange(e){
        setConfirmPassword(e.target.value)
    }

    function handleSISubmit(e){
        if(password !== confirmPassword){
            e.preventDefault();
            alert('Passwords do not match')
        } else {
            console.log("You've succesfully signed up.")
            // e.preventDefault();
        }
    }

    return (
        <SUContainer>
            <TextHolder>
            <Typography>
                <h1>Welcome!</h1>
                <h3>Sign-up below</h3>
                <img src={require('../IMGs/—Pngtree—simple creative new york city_4111474.png')} alt='img' style={{width:100, height: 100, paddingLeft: '40px'}}/>
            </Typography>
            </TextHolder>
         <Box 
         onSubmit={(e) => {handleSISubmit(e)}}
         sx={{  
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center',
            'alignItems': 'center',
            'backgroundColor': '#F2CC8F',
            'width': '100%',
            'fontFamily': 'Lato',
            'height':'65vh'
            }}>
            <Link style={{textDecoration: 'none', color: 'white', paddingBottom: '25px'}} to='/login'>Already have an account? Click here to login</Link>
            <TextField
            required
            id="outlined-required"
            label="First Name"
            autoComplete="off"
            placeholder="First name"
            size="small"
            value={firstName}
            sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
            onChange={(e) => {handleFNChange(e)}}
            /><br/>

            <TextField
            required
            id="outlined-required"
            label="Last Name"
            autoComplete="off"
            placeholder="Last name"
            size="small"
            value={lastName}
            sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
            onChange={(e) => {handleLNChange(e)}}
            /><br/>

           <TextField
            required
            id="outlined-required"
            label="Username"
            autoComplete="off"
            placeholder="Username"
            size="small"
            value={userName}
            sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
            onChange={(e) => {handleUSRNChange(e)}}
            /><br/>

            <TextField
            required
            id="outlined-required"
            label="Email"
            autoComplete="off"
            placeholder="Email"
            size="small"
            value={email}
            sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
            onChange={(e) => {handleEMLChange(e)}}
            /><br/>

            <TextField
            required
            id="outlined-required"
            label="Password"
            autoComplete="off"
            placeholder="Password"
            size="small"
            type="password"
            value={password}
            sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
            onChange={(e) => {handlePSWDChange(e)}}
            /><br/>

            <TextField
            required
            id="outlined-required"
            label="Confirm Password"
            autoComplete="off"
            placeholder="Confirm Password"
            size="small"
            type="password"
            value={confirmPassword}
            sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
            onChange={(e) => {handleCPChange(e)}}
            /><br/>

           <Button variant="outlined" size="small" className='back-to-feeds-button' style={{backgroundColor: '#95BDB7', color: 'white', borderStyle: 'none', borderRadius: '5px', height: '28px', fontSize: '15px', fontFamily: 'Lato'}}><Link style={{textDecoration: 'none'}} to='/login'>Create Account</Link></Button> 
         </Box>
        </SUContainer>
    )
}