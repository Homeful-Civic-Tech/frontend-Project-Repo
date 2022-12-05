import { useEffect, useState } from "react"
import "./Listcard.css"

function Post(props) {
    return (
   <div id="post">
     <div id="overlay">
        <img src={props.obj.url} width="200px" height="200px"></img>
        <h1 id="shelterName">{props.obj.shelter_name}</h1>
        <div> 
          <h2 id="shelter-post">{props.obj.num_phone}</h2>
          <h2 id="shelter-phone">{props.obj.location}</h2>
        </div>
      </div>
  </div>
 )
}
 
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
  




