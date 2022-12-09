import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function LogIn (){

    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [login , setLogin] = useState('')
    const navigate = useNavigate();

    function handleUSRNChange(e){
        setUserName(e.target.value)
    }
    function handlePSWDChange(e){
        setPassword(e.target.value)
    }

    function handleLoginChange(info){
        setLogin(info)
    }
   async function handleSISubmit(e){
        e.preventDefault();
            const data ={
                "username":userName,
                "password":password
            }
            
         await fetch(`http://localhost:4009/user/login/${data.username}/${data.password}`)
                .then(result => result.json())
                .then(datas => handleLoginChange(datas))
        if(login.alert === 'loged in'){
            localStorage.setItem("userId",login.data.id);
            localStorage.setItem("username", login.data.username);
            localStorage.setItem("password", login.data.password);
            navigate('/feeds')
        }   
        }
    
   


    return(
        
        <div className="form form--login">
        <div className="form--heading">Welcome back! </div>
        <form autoComplete="off" onSubmit= {handleSISubmit}>
            <div className='sign'>
            <input value={userName} onChange = {handleUSRNChange}type="text" placeholder="Username" />
            <input value={password} onChange = {handlePSWDChange}type="password" placeholder="Password" />
            <button  type='submit' className="button">Login</button> 
            </div>
        </form>
        </div>
       
    )
}