import styled from '@emotion/styled'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';


const LoginGreeting = styled('div')({
    backgroundColor: '#F2CC8F',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '10px',
    color: 'white',
    fontFamily: 'lato'
})
   

const LoginFormContainer = styled('form')({
    backgroundColor: '#E07A5F',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: 'white',
    height: '400px',
})
  


const LoginButton = styled('button')({
    backgroundColor: '#95BDB7',
    color: 'white',
    borderStyle: 'none',
    borderRadius: '5px',
    height: '28px',
    fontSize: '15px'
})
   





export default function LogIn(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(e){
        setUserName(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleLISubmit(e){
        console.log("Yay, you're in")
        // some lines of code to verify this acc exists in DB
    }

    return (
        <div className='login-container'>
            <LoginGreeting>
                <h1>Welcome back!</h1>
                <h3>Log-in below</h3>
                <img src={require('../IMGs/—Pngtree—simple creative new york city_4111474.png')} alt='img' style={{width:100, height: 100}}/>
            </LoginGreeting>

            <LoginFormContainer onSubmit={(e) => {handleLISubmit(e)}}>
                <Typography sx={{'color': 'white'}}>Please login below</Typography>

                <TextField
                required id="outlined-required"
                label="Username"
                placeholder="Username"
                size="small"
                value={username}
                sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
                onChange={(e) => {handleUsername(e)}}
                /><br/>

                <TextField
                required
                id="outlined-required"
                label="Password"
                placeholder="Password"
                size="small"
                value={password}
                sx={{'color': 'white', 'fontFamily': 'lato', 'size': 'small', 'backgroundColor': 'white'}}
                onChange={(e) => {handlePassword(e)}}
                /><br/>
                
                <Button variant="outlined" size="small" className='back-to-feeds-button' style={{backgroundColor: '#95BDB7', color: 'white', border: 'white', borderStyle: 'none', borderRadius: '5px', height: '28px',fontSize: '15px'}}><Link to='/' style={{textDecoration: 'none'}}>Log-in</Link></Button>

            </LoginFormContainer>
        </div>
    )
}