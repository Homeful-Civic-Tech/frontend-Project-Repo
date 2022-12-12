import { useEffect, useState} from 'react'
import Confetti from './Confetti';
import ReactConfetti from 'react-confetti'

export default function ConfettiAnim(){
    const [windowSize, setSize] = useState({width: window.innerWidth, height: window.innerHeight})

    const findSize = () => {
        setSize({width: window.innerWidth, height: window.innerHeight});
    }

    useEffect(() => {
        window.addEventListener('resize', findSize)
    },[windowSize])

    return(
        <ReactConfetti 
        width={windowSize.width}
        height={windowSize.height}
        tweenDuration={1000}/>
    )
}