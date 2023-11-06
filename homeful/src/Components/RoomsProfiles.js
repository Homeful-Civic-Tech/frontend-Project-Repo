import React from 'react'
import Navbar from './Feedsnav'
import '../CSS/Navbar.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProfileInfo from './RoomsProfileInfo';






function ProfilePage() {
    let [eachRoom, getRooms] = useState([]);
    let { id } = useParams();

    // console.log(id)

    useEffect(() => {
        async function allRooms() {
            let info = await fetch(`http://localhost:4109/rooms/${id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw response
                })
            getRooms(info[0])
            // console.log(info[0])

        }
        allRooms()

    }, [id])









    return (
        <div>
            <Navbar />
            <ProfileInfo myData={eachRoom} />


        </div>
    )
}


export default ProfilePage

