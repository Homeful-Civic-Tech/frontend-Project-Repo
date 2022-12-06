import { useEffect, useState } from "react"
import "../CSS/Listcard.css"
import Post from './Post'
 
export default function App() {
  let [shelters, getNewShelter] = useState([]);
  useEffect(()=>{
   async function load () {
   let cons = await fetch('http://localhost:4009/shelters/')
    .then(response => {
      if (response.ok){
        return response.json()
      }
      throw response
    })
    getNewShelter(cons)
  }
    load()
    // .then(data => getNewShelter(data))}
  },[])
    return (
      <div id = 'posts'>
        {shelters.map(post => <Post obj={post} key={post.id}/>)}
      </div>
    )
  }
  




