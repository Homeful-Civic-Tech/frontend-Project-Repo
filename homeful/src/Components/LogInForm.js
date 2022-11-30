import styled from '@emotion/styled'
import { useState } from 'react';

const LoginGreeting = styled.div`
    background-color: #F2CC8F;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    color: white;
`

const LoginFormContainer = styled.form`
    background-color: #E07A5F;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 100%;
    color: white;
    height: 400px;
`

const LoginButton = styled.button`
    background-color: #95BDB7;
    color: white;
    border-style: none;
    border-radius: 5px;
    height: 28px;
    font-size: 15px;
`





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
                <label>Enter your username:</label>
                <input type="text" value={username} onChange={(e) => {handleUsername(e)}}>
                </input><br/>
                <label>Enter your password:</label>
                <input type="password" value={password} onChange={(e) => {handlePassword(e)}}>
                </input><br/>
                <LoginButton type='submit' className='login-button'>Log-in</LoginButton>
            </LoginFormContainer>
        </div>
    )
}