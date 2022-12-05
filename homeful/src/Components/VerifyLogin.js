import Context from '../Contexts/Context';
import { useContext, useEffect } from 'react';

export default function VerifyLogin(){
    const { username } = useContext(Context)
    const { password } = useContext(Context)

    useEffect(() => {
        fetch('user/login/:name/:password')
        .then(res => res.json())
        .then(data => console.log(data))
    })
 }