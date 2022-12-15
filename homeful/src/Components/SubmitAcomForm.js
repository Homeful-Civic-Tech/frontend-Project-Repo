import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import React from 'react';

export default function SubmitAcomForm(){
    return(
        <Button variant="outlined" size="small" className="submit-app-button"><Link style={{textDecoration: 'none'}} to='/feeds'>Submit</Link></Button>
    )
}