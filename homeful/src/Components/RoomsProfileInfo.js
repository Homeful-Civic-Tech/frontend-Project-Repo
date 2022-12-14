import '../CSS/Profile.css'
import ChooseDate from "./Calendar";
import Button from '@mui/material/Button'
import { GoogleMap } from '@react-google-maps/api';
import GoogleMaps from './googlemap';
import Testimonials from './Testimonials'
import React from 'react';

function ProfileInfo(props) {

    
    return (

        <div >
            <div className='all'>

                <img className='img' src={props.myData.url} alt=""  />
                <div className='data'>
                    <h1>{props.myData.name}</h1>
                    <p>{props.myData.location}</p>
                    <p>{props.myData.phone_num}</p>
                    <p>Category: {props.myData.category}</p>

                </div>
             </div>
            <div className='reserve'>
                <p>Choose Your Change:</p>
               
                  <ChooseDate/> 
                <p>Guest: </p>
                <Button style={{
                    borderRadius: 35,
                    backgroundColor: "#00274E",
                    padding: "10px 15px",
                    fontSize: "10px",
                    fontfamily: 'Poppins',
                }}
                    variant='contained' >
                    Reserve </Button> 
            </div>
               <div className='outterBox'>
                <div>
                 <p className="desc"> <b>Information About {props.myData.name} </b>
                <br />
                <br />
                {props.myData.bio}
               </p>
                </div> 
                </div>
             
             {/* <GoogleMaps/>  */}
             <div className='review'>Reviews</div>
             <Testimonials/>
        </div>


    );
}

export default ProfileInfo;