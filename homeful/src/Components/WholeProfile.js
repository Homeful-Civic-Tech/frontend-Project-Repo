import ProfilePageSaves from './ProfilePage';
import FeedsNavbar from './Feedsnav';
// import img_avator from '../IMGs/img_avator'
import '../CSS/WholeProfile.css'
 
 
 function WholeProfile(){
    return (
<div className = "profilepage">
<FeedsNavbar/>
<div className = "YourSaves">
{/* <img src={img_avator} alt="Avatar" style={{ width: "100px" }} /> */}
<h1>Kayne West</h1>
</div>
<h2 className='placesYouBook'>Places You've Book:</h2>
<div className='allSaves'>
<ProfilePageSaves/>
</div>
</div>
    )
 }
 export default WholeProfile
