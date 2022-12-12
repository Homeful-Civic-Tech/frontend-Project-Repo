import React from "react"


let Users = [{id:"111111A", firstname:"Baron", lastname:"Renzik", username: "DaBest", email:"Baron@gmail.com", sex:"Female", password: "IloveKittes123", bio: "I'm feeling good about myself cant complain"},
// {id:"111111B", firstname:"karen", lastname:"hernandez", username: "karebear2000", email:"788Baron@gmail.com", sex:"Female", password: "IamD#1PASS", bio:"im feeling LUCKY"}
]

function Profiles(prop){
    return(
    <>
    <div>{console.log(prop)}</div>
     <h1>{prop.obj.username}</h1>
     <h3>{prop.obj.bio}</h3>
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