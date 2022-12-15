import React from "react";
import {useState, useEffect} from 'react'
 

function ProfilePageSaves(props) {
    console.log(props.obj.shelter_name)
        return (
            <div className="cards">
                    <>
                        <div className="names"><h1>{props.obj.shelter_name}</h1></div>
                        <img className = "img" src={props.obj.url} width="320x" height="260px"></img>
                        <p className="location">{props.obj.location}</p>
                        {/* <p className = "available">Available for:{props.obj.hours}</p> */}
                    </>
            </div>
        )
    }


function PostFeed() {
    let [shelters, getShelters] = useState([]);
    useEffect(()=>{
     async function UserShelters () {
     let info = await fetch(`http://localhost:4009/shelters/user/${localStorage.getItem("userId")}`)
      .then(response => {
        if (response.ok){
          return response.json()
        }
        throw response
      })
      console.log(info)
      getShelters(info)
    }
      UserShelters()
  
    },[])


    if (shelters.length === 0){
    return (
        <div>
            you dont have reservations saved
        </div>
    )
    }else{
    return(
        <div className='EachSave'>
            {shelters.map((post, i) => <ProfilePageSaves obj={post} key={i}/>)}
        </div>
    )
    }
}
 
 
export default PostFeed
