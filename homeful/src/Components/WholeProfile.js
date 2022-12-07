import ProfilePageSaves from './ProfilePage';
import FeedsNavbar from './Feedsnav';
import img_avatar from '../IMGs/img_avatar.png';
import '../CSS/WholeProfile.css';

{/* <WholeProfile name="Kayne West" /> */}


function ProfileName(props){
    return(
     <h1>{props.name}</h1>
    )
}

function WholeProfile(props) {
    return (
        <div className="profilepage">
            <FeedsNavbar/>
            <div className="YourSaves">
                <img className = "profileAvatar" src={img_avatar} alt="Avatar" style={{ width: "100px" }} />
                <ProfileName name='Kayne West'/>
            </div>
            <h2 className='placesYouBook'>Places You've Book:</h2>
            <div className='post'>
                <ProfilePageSaves />
            </div>
        </div>
    )
}
// WholeProfile.render(element);
export default WholeProfile

