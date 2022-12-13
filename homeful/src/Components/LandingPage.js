import React from 'react'
import Navbar from './Navbar'
// import Body from './Body'
import '../CSS/App.css'

function LandingPage(){
  return (
<div>
  <Navbar/>
  {/* <Body/> */}
    <>
<section className="hero">
    <header id="header">
      {/* <a id="logo" href="#">
        logo
      </a>
      <nav>
        <a id="menu-icon">≡</a>
      </nav> */}
    </header>
    <header className="hero-header">
      <h1 className="hero-title">Making the System Easier</h1>
    </header>
    <footer className="hero-footer">
      <a className="button button-primary" href="#">
        Sign Up
      </a>
      <a className="button" href="#">
        Sign In
      </a>
    </footer>
  </section>
  <article>
    <h2>Some additional content</h2>
    <p>
      The rest of the page content continues below the hero. You can use the
      hero at the top of your page, e.g. the home page. A hero is great to
      display a high quality picture together with tasty title.
    </p>
    <p>
      Ad donec tincidunt torquent ultricies convallis sodales faucibus magna,
      fringilla lorem blandit sollicitudin donec faucibus curae orci molestie,
      et proin curae aliquet venenatis ligula amet vivamus orci varius arcu.
    </p>
    <p>
      Laoreet fusce condimentum venenatis quisque imperdiet ornare cras faucibus
      convallis, pharetra habitasse elementum ut bibendum per sociosqu phasellus
      etiam, velit faucibus integer torquent leo elementum maecenas netus.
    </p>
  </article>

  <section className="text-center about">
  <h1>About US</h1>
  <div className="container">
    <div className="row">
      <div
        className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
        data-wow-offset={200}
      >
        <span className="fa fa-group" />
        <h2>Section 1</h2>
        <p className="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
      </div>
      <div
        className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
        data-wow-offset={200}
      >
        <span className="fa fa-info" />
        <h2>Section 2 </h2>
        <p className="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum{" "}
        </p>
      </div>
      <div className="clearfix visible-md-block visible-sm-block" />
      <div
        className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
        data-wow-offset={200}
      >
        <span className="fa fa-file" />
        <h2>Section 3</h2>
        <p className="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
      </div>
    </div>
  </div>
</section>

  </>
</div>
)
}

export default LandingPage