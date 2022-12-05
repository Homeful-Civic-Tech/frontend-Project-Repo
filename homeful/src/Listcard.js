// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

//  import React from "react"
import "./Listcard.css"
//const express = require('express')
// const app = express

// app.get("./",(req, res) => {
//   res.json({
//     name: 'bill',
//     age: 99
//   })
// })

// app.listen(3000,()=>
//   console.log('server is up'))

 const shelters = [{shelterName: "castons home", phone: 8772274669, caption: "Time to pour wine/html/images/banana.jpg hwhghsd,nwebjfewbwn ehkbufq hbfq vqkhqefh", image: "https://cdn.vox-cdn.com/thumbor/-jJGprIZWpPQ7KD5dSmjcogZfME=/0x0:1000x1000/1200x900/filters:focal(420x420:580x580)/cdn.vox-cdn.com/uploads/chorus_image/image/59517807/10960338_10152734380047881_1861353916523574001_o.0.0.0.0.jpeg"}, 
        {shelterName: "janes shelter", phone: 877393444, caption: "You are my angel", image: "https://www.jquery-az.com/html/images/banana.jpg"},
        {shelterName: "lizas family", phone: 88888888, caption: "Time to pour wine", image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"},
        {shelterName: "kayne", phone: 897543566, caption: "Time to be amazing ", image:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"},
        {shelterName: "sanata", phone: 39897878, caption: "Time to pour layback", image: "https://www.jquery-az.com/html/images/banana.jpg"},
        {shelterName: "jesus", phone: 111111111, caption: "Time to come to", image: "https://www.jquery-az.com/html/images/banana.jpg"},
        {shelterName: "jesus", phone: 111111111, caption: "Time to come to", image: "https://www.jquery-az.com/html/images/banana.jpg"}]

//connecting to front end from PoSt
function ListCard(props){
  return(
    <div> 
      <h2 id="shelter-post">{props.caption}</h2>
      <h2 id="shelter-phone">{props.phone}</h2>
    </div>
  )
}
//creating what goes into each specific post  
function Post(props) {
    return (
   <div id="post">
     <div id="overlay">
     <img src={props.obj.image} width="200px" height="200px"></img>
     <h1 id="shelterName">{props.obj.shelterName}</h1>
     <ListCard
           phone={props.obj.phone}
           caption={props.obj.caption}
     />
     </div>
  </div>
 )
}

//itterating from backend and making each itteration Connect to each post in function Post 
function PostFeed() {
    return (
      <div id= "posts"> 
        {shelters.map(post => <Post obj={post} key={post.shelterName}/>)}
      </div>
    )
  }
  
  export default function App() {
    return (
      <div>
        <ListCard/>
        <PostFeed/>
      </div>
    )
  }
  
{/* <div className="allCards">
  <div className = "card-container">
    <div className="image-container">
            <img src={require("./landingpage_handshome.png")} alt="holding hands" width="100px" height="100px"/>
            </div>
            <div className="card-title">
                <h3> hellof</h3>
            </div>
            <div className="card-body">
               <p> jdenuwd wdcoj   wdeoj wepimwedjod eodwe nwdeondwejo dewjond ejo we jode2npki    denihd2ekednid2b jdwbih ihjde hde wdeij</p> 
            </div>
        </div>
    </div> */}



/*
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
*/



// import React from "react";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import CardActions from "@material-ui/core/CardActions";

// function Listcard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="./landingpage_handsome.png"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   )
// }
