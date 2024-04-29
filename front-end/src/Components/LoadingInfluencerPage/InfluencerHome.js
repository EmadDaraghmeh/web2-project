import React from 'react'
import './InfluencerHome.css'
import ColoratedButtons from './ColoratedButtons'
const InfluencerHome = () => {
  return (
  <>
    <div className='container-home'>
      <div className='content-home'>
        <h1>
        Discover <br/> brands to <br/> collaborate <br/> with
        </h1>
        <p>
          find your ideal brand partnerships on our platform. <br/>
          With intuitive search tools, connecting with the right <br/>fit has never been simpler.
          Join us now for limitless <br/>collaboration opportunities.
        </p>
        <button className='btn-brand'>Explore Brand </button>
        </div>
          <img src='./images/Char.png' alt='...' className='image-right'/>   
         
    </div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
     <path fill="#ff1b6d" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,208C384,181,480,107,576,96C672,85,768,139,864,149.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
   </svg>
   {/* another code */}
   <div className='home-page'>
    <div className='section-left'>
      <img src='./images/Image.png' alt='...'/>
    </div>
    <div className='section-right'>
      <h2>Collaborate with Brands.</h2>
      <p>
        <span className='head-span'>search for Brands</span> <br/>
        you can search for Brands with the help of our filters to find the best brand  that suits your needs.<br/>
        <span className='head-span'> Contact Brand</span><br/>
        you can immediately contact brands through our chat system<br/>
        <span className='head-span'> Collaborate !</span><br/>
        you can choose to collaborate with Brands and send them your offer !</p>
    </div>
   </div>
   {/* another code */}

  <div className='home-section'>
    <h1>select your preferred<br/> brand categories to<br/> tailor your experience</h1>
    <ColoratedButtons></ColoratedButtons>
   </div>
   {/* another code */}
   <div class="rental-process spline">
    <div class="row">
        <div class="large-10 large-centered columns">
          <h1 class="text-center">How does it work?</h1>
          <p>with the help of our website you can easily collaborate with Brands</p>
          <div class="wrapper">
            <div class="circles no-bullet text-center">
              <div className='step-container'>
                <label class="step float-left" for="slide-1-content" id="step-1" style={{backgroundColor:"red"}}>1</label>
                
                <div className='step-content'> 
                  <h3>Find On Brands </h3>
                  <p>
                  find the Brands you want to 
                  collaborate with and check out 
                  their profile to discover a diverse
                  range of brand categories 
                  spanning industries such as beauty,
                  fashion, technology, health, and more.
                  </p>
                </div>
              </div>
              <img src='./images/line2.png' alt='' className='line'/>
              <div className='step-container'>
                <label class="step" for="slide-2-content" id="step-2" style={{backgroundColor:"green"}}>2</label>
                <div className='step-content'>
                  <h3>Contact the Brands</h3>
                  <p>contact them through our chat system </p>
                </div>
              </div>
              <img src='./images/line2.png' alt='' className='line'/>
              <div className='step-container'>
                <label class="step float-right" for="slide-3-content" id="step-3" style={{backgroundColor:"darkBlue"}} >3</label>
                
                <div className='step-content'> 
                  <h3>collaborate !</h3>
                  <p>Start forging meaningful 
                  connections and creating impactful content  with brands today!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of the about us */}
      <div class="pricing-container">
          <div class="pricing">
          <h4>Upgrade to a Pro Account</h4>
          <p>Ready to take your influencer journey to the next level?<br/> With a Pro Account, you'll gain access to unlimited collaborations,<br/> giving you the freedom to work with as many brands as you desire.<br/>our Pro Account ensures you never miss out on valuable opportunities. <br/>Elevate your  presence with brands and maximize your influence by upgrading to a Pro Account today!</p>
          </div>
         <div className='pricing-content'>
          <h1>UNLIMITED</h1>
          <h2><span>$</span>19<span>/mo</span></h2>
          <hr/>
          <button>Upgrade Now</button>
          </div>
        
      </div>
      <div class="at-banner">
        <div class="at-banner__content">
          <h1 class="at-banner__text">Have any questions ?</h1>
          <p>Our team is here to support your journey in finding the right brand partnerships.<br/> Get in touch for personalized assistance.</p>
        </div>
        <div class="at-banner__close">
          <button>Write To Us<img src='./images/send.png' alt='' className='send'/></button>
        </div>
      </div>
    </div>{/* end of the page */}
   
   </>
  )
}

export default InfluencerHome
