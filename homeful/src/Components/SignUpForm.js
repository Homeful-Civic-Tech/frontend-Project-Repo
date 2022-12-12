import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../CSS/Sign.css"
import LogIn from './Login';





export default function SignUpLogIn(){
    const [showLogin ,setshowLogin] = useState(false)
    const [showSignin ,setshowSignin] = useState(true)
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [sex, setSex] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    
      const handleLoginSwitch = (e) =>{
        if(showLogin === false){
            setshowLogin(!showLogin)
            setshowSignin(false)
        
        }
        
      }
      const handleSigninSwitch = (e) =>{
        if(showSignin === false)
            setshowSignin(!showSignin)
            setshowLogin(false)
            
            
      }
    

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

    function handleSEXChange (e){
        setSex(e.target.value)
    }

    function handleSISubmit(e){
        if(password !== confirmPassword){
            e.preventDefault();
            alert('Passwords do not match')
        } else {
            let data = {
                "firstname":firstName,
                "lastname":lastName,
                "username":userName,
                "email":email,
                "sex":sex,
                "password":password
            }
        
            let raw = JSON.stringify({ 
                "firstname":data.firstname,
                "lastname":data.lastname,
                "username":data.username,
                "email":data.email,
                "sex":data.sex,
                "password":data.password
            })
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: raw
            };
            fetch('http://localhost:4009/user/',requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            console.log("You've succesfully signed up.")
            
            handleLoginSwitch()
        }
    }
    
    
    return (
        <>
            <div className="containers">
                <div className="message signup">
                <div className="btn-wrapper">
                    <button onClick = {handleSigninSwitch}className="button" id="signup">
                    Sign Up
                    </button>
                    <button onClick = {handleLoginSwitch} className="button" id="login">
                    {" "}
                    Login
                    </button>
                </div>
                </div>
                {showLogin === true && <LogIn />}
                {showSignin === true &&
                <div className="form form--signup">
                    <div className="form--heading">Welcome! Sign Up</div>
                    <form autoComplete="off">
                        <div className='sign'>
                        <input value={firstName} onChange={handleFNChange} type="text" placeholder="First Name" />
                        <input value={lastName} onChange={handleLNChange} type="text" placeholder="Last Name" />
                        <input value={userName} onChange={handleUSRNChange} type="text" placeholder="Username" />
                        <input value={email} onChange={handleEMLChange} type="email" placeholder="Email" />
                        <input value={sex} onChange={handleSEXChange} type="text" placeholder="Sex" />
                        <input value={password} onChange={handlePSWDChange} type="password" placeholder="Password" />
                        <input value={confirmPassword} onChange={handleCPChange} type="password" placeholder="Confirm Password" />
                        
                        
                        <button onClick ={handleSISubmit} className="button">Sign Up</button>
                    </div>
                    </form>
                </div>}
            </div>
        </>

      
    )
}