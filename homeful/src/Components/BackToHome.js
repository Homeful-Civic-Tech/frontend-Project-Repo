import { Link } from 'react-router-dom'

export default function BackToHome(props){
    return(
        <button className="back-to-landing-button"><Link style={{textDecoration: 'none'}} to='/'>{props.name}</Link></button>
    )
}