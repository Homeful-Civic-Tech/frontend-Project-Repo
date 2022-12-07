
export default function Post(props) {
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
 