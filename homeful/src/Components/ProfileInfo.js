import '../CSS/Profile.css'
import ChooseDate from "./Calendar";
import Button from '@mui/material/Button'
import { GoogleMap } from '@react-google-maps/api';
import GoogleMaps from './googlemap';
import Testimonials from './Testimonials'



function ProfileInfo(props) {

    console.log(props.myData.num_phone)
    return (

        <div >
            <div className='all'>

                <img className='img' src={props.myData.url} alt=""  />
                <div className='data'>
                    <h1>{props.myData.shelter_name}</h1>
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
                 <p className="desc"> <b>Information About {props.myData.shelter_name} </b>
                <br />
                <br />
                The New York City  {props.myData.shelter_name} is the oldest shelter in the United States, providing spiritual hope, education, food, clothing, and shelter to New Yorkers in crisis.  <br/><br/>The {props.myData.shelter_name}  provides emergency and preventative services through the THRIVE Program, an innovative approach to combating episodic and chronic homelessness.  <br/><br/>{props.myData.shelter_name}  embodies three pathways: Emergency Food & Shelter, Workforce Readiness, and Workforce Development. All pathways offer support to hurting New Yorkers and opportunities for our gracious volunteers to engage directly in making social impact.
          
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