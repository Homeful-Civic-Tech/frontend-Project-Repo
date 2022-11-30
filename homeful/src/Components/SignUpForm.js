import styled from '@emotion/styled'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SUContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  background-color: #E07A5F;
  width: 100%;
  color: white;
  height: 25%
`

const SignUpButton = styled.button`
    background-color: #95BDB7;
    color: white;
    border-style: none;
    border-radius: 5px;
    height: 28px;
    font-size: 15px;
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    background-color: #F2CC8F;
    width: 100%
    // min-height: 100%
`

export default function SignUp(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


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
            
            <TextContainer>
                <h1>Welcome!</h1>
                <h3>Sign-up below</h3>
                <img src={require('../IMGs/—Pngtree—simple creative new york city_4111474.png')} alt='img' style={{width:100, height: 100}}/>
            </TextContainer>
            
         <FormContainer onSubmit={(e) => {handleSISubmit(e)}}>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => {handleFNChange(e)}}></input><br/>

            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => {handleLNChange(e)}}></input><br/>

            <label>Username:</label>
            <input type="text" value={userName} onChange={(e) => {handleUSRNChange(e)}}></input><br/>

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => {handleEMLChange(e)}}></input><br/>

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => {handlePSWDChange(e)}}></input><br/>

            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e) => {handleCPChange(e)}}></input><br/>

           <SignUpButton type='submit' className='sign-up-button'><Link to='/login'>Create Account</Link></SignUpButton> 
         </FormContainer>
        </SUContainer>
    )
}