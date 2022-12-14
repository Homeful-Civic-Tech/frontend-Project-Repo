import React from "react"


let Users = [{"username": localStorage.getItem("username"), "userid": localStorage.getItem("userId")}]

function Profiles(prop){
    return(
    <>
     <h1>{prop.obj.username}</h1>
    </>
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