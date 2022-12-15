// import { red } from "@mui/material/colors";
// import { borderColor } from "@mui/system";
import React from "react";

 
import '../CSS/Reviews.css'
import Stars from '../IMGs/stars.png'

 
function ShelterReviews(props) {

    console.log(props)
    return (
        <div className="container">
            <div className="inner">
            <div className="review">
                <div className="flex">
                <img className="profile_img"src={props.obj.url} alt=""/>
                <div className="profile_name">{props.obj.name}</div>
                <p className="date">{props.obj.date}</p> 
                </div>
                <img className = "stars" src={Stars} alt=""/>
                <p className="comment">{props.obj.comment}</p>
                </div>
                
            </div>

            </div>

    )
}

export default ShelterReviews







