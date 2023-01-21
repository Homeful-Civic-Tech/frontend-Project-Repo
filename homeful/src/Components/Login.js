import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function LogIn() {

    const [passwords, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [login, setLogin] = useState('')
    const navigate = useNavigate();

    function handleUSRNChange(e) {
        setUserName(e.target.value)
    }
    function handlePSWDChange(e) {
        setPassword(e.target.value)
    }

    function handleLoginChange(info) {
        setLogin(info)
    }
    async function handleSISubmit(e) {
        e.preventDefault()
        const data = {
            "username": userName,
            "password": passwords
        };

        let logindata = await fetch(`http://backend-deployment-production.up.railway.app0/user/login/${data.username}/${data.password}`)
            .then(result => result.json())
            .then(datas => {
                handleLoginChange(datas) 
                if (datas.alert === 'loged in') {
                localStorage.setItem("userId", datas.data.id);
                localStorage.setItem("username", datas.data.username);
                localStorage.setItem("firstname", datas.data.firstname);
                navigate('/feeds')
            
        } else {
            console.log(logindata)
            alert("Wrong Password or Username")
        }
            })
            .catch(error => console.log('error', error));
       


    }




    return (
        <div className="containers">
            <div className="message signup">
                <div className="btn-wrapper">
                    <button className="button" onClick={() => { navigate('/sign-up') }} id="signup">
                        Sign Up
                    </button>
                    <button onClick={() => { navigate('/login') }} className="button" id="login">
                        Login
                    </button>
                </div>
            </div>
            <div className="form form--login">
                <div className="form--heading">Welcome back! </div>
                <form autoComplete="off" >
                    <div className='sign'>
                        <input value={userName} onChange={handleUSRNChange} type="text" placeholder="Username" />
                        <input value={passwords} onChange={handlePSWDChange} type="password" placeholder="Password" />
                        <button type='submit' onClick={handleSISubmit} className="button">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}