import '../CSS/Profile.css'
import ChooseDate from "./Calendar";
import Button from '@mui/material/Button'
import { GoogleMap } from '@react-google-maps/api';
import GoogleMaps from './googlemap';
import Testimonials from './Testimonials'

import React from 'react';

import ShelterReviews from './Reviews';
import { useNavigate } from 'react-router-dom'; 




function ProfileInfo(props) {


    const navigate = useNavigate();
    const review = [
        { name: "Anonymous", date: '12/04/2022', comment: "I and mom used to live in this shelter and we hated it. There were bed bugs and roaches and the locks didn’t work.", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlECQSBGh032SFnX3lkF4CbEx9PvZxbFFcFscHj5qp9DjnVnYaohiMOKuLKrdJiF-8sVM&usqp=CAU", rating: "3" },
        { name: "Anonymous", date: '02/21/2021', comment: "I've been to numerous shelters and this is the best one I've been to! This place has good options and is really modern compared to other shelters I've been to. I am thankful for the kind employee here for me at a hard time.", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlECQSBGh032SFnX3lkF4CbEx9PvZxbFFcFscHj5qp9DjnVnYaohiMOKuLKrdJiF-8sVM&usqp=CAU", rating: 4 },
        { name: "Anonymous", date: '05/07/2022', comment: "I'm a software engineer that became houseless through a fire. Its freezing in NYC and all the people I know live in the DMV area. I stayed in this shelter for 3 nights and they were pretty accommodating to my needs. I got a bed pretty quickly. I was so fortunate to end up at this shelter because it was clean as well. I can only complain about the neighbors I had there, they weren't very kind.", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlECQSBGh032SFnX3lkF4CbEx9PvZxbFFcFscHj5qp9DjnVnYaohiMOKuLKrdJiF-8sVM&usqp=CAU", rating: "3" },
        { name: "Anonymous", date: '12/12/2022', comment: "This place was good, i had alot of support by the people here", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlECQSBGh032SFnX3lkF4CbEx9PvZxbFFcFscHj5qp9DjnVnYaohiMOKuLKrdJiF-8sVM&usqp=CAU", rating: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMra_YZ9uCEADFbvSCoZ1cXGmDe3tOSXbEIQ&usqp=CAU" },

    ]


    console.log(props.myData.num_phone)

    return (

        <div >
            <div className='all'>

                <img className='img' src={props.myData.url} alt="" />
                <div className='data'>
                    <h1>{props.myData.shelter_name}</h1>
                    <p>{props.myData.location}</p>
                    <p>{props.myData.phone_num}</p>
                    <p>Category: {props.myData.category}</p>

                </div>
            </div>
            <div className='reserve'>
                <p>Choose Your Change:</p>

                <ChooseDate />
                <p>Guest: </p>
              <Button onClick={() => navigate(`/shelter-form/${props.myData.id}`)} style={{
                    borderRadius: 35,
                    backgroundColor: "#00274E",
                    padding: "10px 15px",
                    fontSize: "10px",
                    fontfamily: 'Poppins',
                }}
                    variant='contained' >
                    Reserve </Button>
                  
            </div>
            <div className="rev">
                <div className='outterBox'>
                    <div>
                        <p className="desc"> <b>Information About {props.myData.shelter_name} </b>
                            <br />
                            <br />
                            The New York City  {props.myData.shelter_name} is the oldest shelter in the United States, providing spiritual hope, education, food, clothing, and shelter to New Yorkers in crisis.  <br /><br />The {props.myData.shelter_name}  provides emergency and preventative services through the THRIVE Program, an innovative approach to combating episodic and chronic homelessness.  <br /><br />{props.myData.shelter_name}  embodies three pathways: Emergency Food & Shelter, Workforce Readiness, and Workforce Development. All pathways offer support to hurting New Yorkers and opportunities for our gracious volunteers to engage directly in making social impact.

                        </p>
                    </div>
                </div>

                {/* <GoogleMaps/>  */}

                {/* <Testimonials/> */}
                <div style={{ margin: "50px 0 0 0"}}>
                    {/* <h1>Reviews for {props.myData.shelter_name}</h1> */}
                    {review.map(review => <ShelterReviews obj={review} key={review.comment} />)}
                </div>
            </div>



        </div>


    );
}

export default ProfileInfo;