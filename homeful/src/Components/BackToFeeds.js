import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { styled } from '@mui/system';


export default function BackToFeeds(){
    return (
        <div>
        <Button variant="outlined" size="small" className='back-to-feeds-button'><Link style={{textDecoration: 'none'}} to='/'>Back</Link></Button>
        </div>
    )
}