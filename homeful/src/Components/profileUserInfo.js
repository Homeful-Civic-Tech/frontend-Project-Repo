import React from "react"
import char from '../IMGs/happyface.jpg';

let Users = [{"username": localStorage.getItem("username"), "userid": localStorage.getItem("userId"), firstname: localStorage.getItem("firstname")}]


function Profiles(){
    return(
    <div className="profileContainer">
    <div className="card-container">
	    <img class="round-img"src={char} alt="user" height={120} />
	    <div class="round" ></div>
        <h2>{`Hello, ${Users[0].firstname}!`}</h2>
	    <h6>New York</h6>
            </div>
     
    </div>
    )
}

function PostProfile() {
    return (
        <div className=''>
            {Users.map(post => <Profiles obj={post} key={post.userid}/>)}
        </div>
    )
}


export default PostProfile