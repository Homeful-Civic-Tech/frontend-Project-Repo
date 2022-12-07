import React from "react";
 
const shelters = [{shelter_name: "Castons home", location: "1000 better ave", url: "https://cdn.vox-cdn.com/thumbor/-jJGprIZWpPQ7KD5dSmjcogZfME=/0x0:1000x1000/1200x900/filters:focal(420x420:580x580)/cdn.vox-cdn.com/uploads/chorus_image/image/59517807/10960338_10152734380047881_1861353916523574001_o.0.0.0.0.jpeg", category: "shelter", datesAvaible: "07/08/2020-07/08/2020", },
{ shelter_name: "Star Bright Family Residence", location: "615 E 104th St Apt 403, Brooklyn, NY 11236", url: "https://cdn.vox-cdn.com/thumbor/-jJGprIZWpPQ7KD5dSmjcogZfME=/0x0:1000x1000/1200x900/filters:focal(420x420:580x580)/cdn.vox-cdn.com/uploads/chorus_image/image/59517807/10960338_10152734380047881_1861353916523574001_o.0.0.0.0.jpeg", category: "shelter", datesAvaible: "07/08/2020-07/08/2020", },
{ shelter_name: "fosters home for imagary", location: "659 Blake Ave, Brooklyn, NY 11207", url: "https://cdn.vox-cdn.com/thumbor/-jJGprIZWpPQ7KD5dSmjcogZfME=/0x0:1000x1000/1200x900/filters:focal(420x420:580x580)/cdn.vox-cdn.com/uploads/chorus_image/image/59517807/10960338_10152734380047881_1861353916523574001_o.0.0.0.0.jpeg", category: "room", datesAvaible: "07/08/2020-07/08/2020", },
{shelter_name: "fosters home for imagary", location: "659 Blake Ave, Brooklyn, NY 11207", url: "https://cdn.vox-cdn.com/thumbor/-jJGprIZWpPQ7KD5dSmjcogZfME=/0x0:1000x1000/1200x900/filters:focal(420x420:580x580)/cdn.vox-cdn.com/uploads/chorus_image/image/59517807/10960338_10152734380047881_1861353916523574001_o.0.0.0.0.jpeg", category: "room", datesAvaible: "07/08/2020-07/08/2020", }]
 
 
function ProfilePageSaves(props) {
    return (
            <div className="cards">
                <div className="names"><h1>{props.obj.shelter_name}</h1></div>
                <img className = "img" src={props.obj.url} width="320x" height="260px"></img>
                <p className="location">{props.obj.location}</p>
                <p className = "available">Available for: {props.obj.datesAvaible}</p>
            </div>

    )
}

function PostFeed() {
    return (
        <div className='EachSave'>
            {shelters.map(post => <ProfilePageSaves obj={post} key={post.shelter_name} />)}
        </div>
    )
}
 
 
export default PostFeed
