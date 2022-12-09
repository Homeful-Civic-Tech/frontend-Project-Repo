import '../CSS/Profile.css'
import ChooseDate from "./Calendar";
import Button from '@mui/material/Button'



function ProfileInfo(props) {

    console.log(props.myData)
    return (

        <div >
            <div className='all'>

                <img src={props.myData.url} alt="" width="400px" height="285" />
                <div>
                    <h1>{props.myData.shelter_name}</h1>
                    <p>{props.myData.location}</p>
                    <p>{props.myData.num_phone}</p>

                </div>
            </div>
            <p className="desc"> <b>Shelter Director</b>
                <br />
                <br />
                A homeless shelter director oversees all of the home’s daily operations. They manage client services, including intake and discharge procedures. They manage the home’s finances, including budgets and billing. They also ensure that the home meets local and state regulations covering health, safety and capacity requirements.

                Shelter directors hire and manage staff and oversee volunteers. They develop skills-training, vocational and recreational programs for residents. Directors typically have four-year degrees in human services and previous managerial experience. Some are child advocates or specialize in handling domestic violence or substance-abuse cases. Directors usually work full-time and an average shelter director salary ranges from $50,000 to $62,000 annually, according to PayScale.</p>

            <div className='reserve'>
                <p>Availability:</p>
                <ChooseDate />

                <p>Guest: </p>
                <Button style={{
                    borderRadius: 35,
                    backgroundColor: "#21b6ae",
                    padding: "10px 15px",
                    fontSize: "10px",
                    fontfamily: 'Poppins',
                }}
                    variant='contained' >
                    Reserve </Button>
            </div>
            {/*       
        <ChooseDate/> */}





        </div>


    );
}

export default ProfileInfo;