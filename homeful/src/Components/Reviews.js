// import { red } from "@mui/material/colors";
// import { borderColor } from "@mui/system";
import React from "react";
// import '../CSS/ReviewsPage.css'
// import ReactDOM from 'react-dom'
// import ReviewPost from './ReviewsPost'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'

const shelters = [{ listing_id: "1", user_id: "1", comment: "best place ever", rating: 5 },
{ listing_id: "2", user_id: "2", comment: "not bad", rating: 3 },
{ listing_id: "3", user_id: "3", comment: "better places on linden", rating: 2 },
{ listing_id: "4", user_id: "4", comment: "too many bed bugs!", rating: 1 }]

// console.log(shelters)

function Form(props) {
    return (
        <div>
        {props.user_id}
        {props.comment}
        {props.rating}
        </div>
    )
}
function ReviewCards(props) {
    // return(
    //     <div style={{border: '1px solid red'}}>
    //         <h1>{props.obj.user_id}</h1>
    //         <h1>{props.obj.comment}</h1>
    //         <h1>{props.obj.rating}</h1>
    //     </div>
    // )
    const rating = props.obj.rating;
    if (rating === 5) {
        return <Form user_id={props.obj.user_id} />;
        return <Form comment={props.obj.comment} />;
        return <Form rating={props.obj.rating} />;
    }else if(rating === 3){
        return <Form user_id={3} />;
    }
}



function PostReview() {
    return (
        <div>
            {shelters.map(post => <ReviewCards obj={post} key={post.listing_id} />)}
        </div>
    )
}

export default PostReview