import React from "react";
import {useState, useEffect} from 'react'
 

function ProfilePageSaves(props) {
        return (
            <div className="cards">
                {props.obj.shelter_name ? (
                    <>
                        <div className="names"><h1>{props.obj.shelter_name}</h1></div>
                        <img className = "img" src={props.obj.url} width="320x" height="260px"></img>
                        <p className="location">{props.obj.location}</p>
                        <p className = "available">Available for:{props.obj.hours}</p>
                    </>
                ) : (
                    <div>You do not have any reservations</div>
                )}
            </div>
        )
    }


function PostFeed() {
    let [shelters, getShelters] = useState([]);
    useEffect(()=>{
     async function UserShelters () {
     let info = await fetch('http://localhost:4009/shelters/user/1')
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
    return (
        <div className='EachSave'>
            {shelters.map(post => <ProfilePageSaves obj={post} key={post.shelter_name}/>)}
        </div>
    )
}
 
 
export default PostFeed
