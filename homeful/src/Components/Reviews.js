import React from "react";
 
const shelters = [{listing_id: "1", user_id:"1", comment:"best place ever", rating: 5},
{ listing_id: "2", user_id:"2", comment:"not bad", rating: 3 },
{ listing_id: "3", user_id:"3", comment:"better places on linden", rating: 2},
{listing_id: "4", user_id:"4", comment:"too many bed bugs!", rating: 1}]

function form(){
    return(
        <div>

        </div>
    )
}
 
function ShelterReviews(props) {
    return (
            <div className="">
                <div className="">{props.obj.listing_id}</div>
                <p className="">{props.obj.listing_id}</p>
                <p className = "">Available for: {props.obj.comment}</p>
            </div>

    )
}

function PostReview() {
    return (
        <div>
            {shelters.map(post => <ShelterReviews obj={post} key={post.listing_id} />)}
        </div>
    )
}