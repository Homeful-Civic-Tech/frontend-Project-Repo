import React from "react"


let Users = [{"username": localStorage.getItem("username")}]

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
            {Users.map(post => <Profiles obj={post} key={post.id}/>)}
        </div>
    )
}


export default PostProfile