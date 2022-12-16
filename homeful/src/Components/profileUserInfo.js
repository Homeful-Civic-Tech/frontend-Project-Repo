import React from "react"
import char from '../IMGs/happyface.jpg';

let Users = [{"username": localStorage.getItem("username"), "userid": localStorage.getItem("userId")}]

function Profiles(prop){
    return(
    <div className="profileContainer">
    <div className="card-container">
	    <img class="round-img"src={char} alt="user" height={120} />
	    <div class="round" ></div>
        <h2>{`Hello, ${Users[0].username}!`}</h2>
	    <h6>New York</h6>
            </div>
     {/* <h1>{`Hello, ${prop.obj.username}!`}</h1> */}
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