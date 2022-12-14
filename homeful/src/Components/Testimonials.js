import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../CSS/Testimonials.css'
import aneika from "../IMGs/aneika.jpg"
import anaya from "../IMGs/anaya.JPG"


export default class Testimonials extends Component {
  render() {
    return (
        
      <Carousel  showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}>
         <div >
          <img src={aneika} />
          <div className="myCarousel">
            <h3>Aneika Nanton</h3>
            <h4>Software Enginner</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="https://ca.slack-edge.com/TKZN62HDF-U0321ASTV27-a38ce4088c92-512" alt=''/>
          <div className="myCarousel">
            <h3>Cece Younance</h3>
            <h4>Software Enginner</h4>
            <p>
            I'm a software engineer that became houseless through a fire. I stayed in this shelter for 3 nights which was accomadating and clean.
            </p>
          </div>
        </div>

        <div>
          <img src={anaya} alt='' />
          <div className="myCarousel">
            <h3>Anaya Lambright</h3>
            <h4>Software Enginner</h4>
            <p>
            I and mom used to live in this shelter and we hated it. There were bed bugs and roaches and the locks didn’t work.!
            </p>
          </div>
        </div>
      
      </Carousel>
    );
  }
}