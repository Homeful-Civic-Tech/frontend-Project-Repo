import Context from '../Contexts/Context';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogIn from './LogInForm';
import React from 'react';


export default function VerifyLogin(){
    const { userName, setUserName } = useContext(Context)
    const { password, setPassword } = useContext(Context)
    console.log(userName, password)
    const navigate = useNavigate();


    // useEffect(() => {
    //     async function load(){
    //     await fetch(`http://localhost:4109/user/login/${userName}/${password}`)
    //     .then(res => {
    //         if(!res.ok){
    //             throw(res)
    //         } else{
    //             return res.json()
    //         }})
    //     .then(data => {
    //         if(data.alert === "loged in"){
    //             localStorage.setItem("userId",data.data.id);
    //             localStorage.setItem("username", data.data.userName);
    //             localStorage.setItem("password", data.data.password);
    //             navigate('/')
    //             setUserName('')
    //             setPassword('')
    //         } else{
    //             alert('Incorrect password or username. Please try again or create an account.')
    //             navigate('/login')
    //             setUserName('')
    //             setPassword('')
    //         }
    //     })
    // }
    //     load()
    // }, [])
    // return (
    //     <LogIn/>
    // )
}