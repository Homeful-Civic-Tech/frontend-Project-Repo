import ProfilePageSaves from './ProfilePage';
import FeedsNavbar from './Feedsnav';
import img_avatar1 from '../IMGs/img_avatar1.png';
import '../CSS/WholeProfile.css';
import React from 'react';
import { modalUnstyledClasses } from '@mui/material';
import Profiles from './profileUserInfo'


{/* <WholeProfile name="Kayne West" /> */}


const style1 = {borderBottom: '1px solid black'};
const style2 = {borderTop:'1px solid black'};

function WholeProfile() {
    return (
        <div className="profilepage">
            <FeedsNavbar />
            <div className='userBio'>
            <div className="YourSaves">

                {/* <img className = "profileAvatar" src={img_avatar1} alt="Avatar" style={{ width: "100px" }} /> */}
            <Profiles />
            </div>
            </div>
            <h2  className='placesYouBook'> Here are the Places You've Booked:</h2>
            <div className='post'>
            <ProfilePageSaves />
            </div>
        </div>
    )
}

export default WholeProfile

