import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import './InfluencerProfilePage.css'
import image from"./photo-1486312338219-ce68d2c6f44d.avif"

const InfluenceProfilePage = () => {
  return (
    <>
    
      <img  src={image} className="img-fluid" id="img-fluid1" alt=""/>
    
      <div className="container">
      <img src={image} className="img-thumbnail" id="img-thumbnail2" alt=""/>
 <h3 className="username">NAME</h3>

 <div className="boxx">

<div className="card" id="description">
<div className="card-body">
<label for="floatingInput" id="labell">description: </label>
 <p id="p">uhuihiuhigiguygufytfydrtdtrddfuyfugigiguguyguhbjhbvtfvyttrdtyrytfufuyguygiygibdgygiyggdigdigwqgwgdyigigeaugfaguef</p>
</div>
</div>

    <div className="col-md-2">
      <button type="button" className="btn btn-danger  " id="btn1" >Add to favorites</button>
      <button type="button" className="btn btn-danger"id="btn2">Profile analysis</button>
    </div>
    <div className="col-md-2 ">
      <button type="button" className="btn btn-danger" id="btn3">Message</button>
      <button type="button" className="btn btn-danger" id="btn4">Collab</button>
    </div>



  </div>

      <hr></hr>

 <div className="container-icons">
      <div className="card" id="card1">
      
        <div className="card-body">
        <div className=" analysis">
        <i className="bi bi-instagram"  id="instagram"> </i>
        <h5 className="card-title" id="card-title1">Instagram analysis</h5>
        </div>
        <div className="insta-analysis"></div>

         
        </div>
      </div>

      <div className="card" id="card2" >
        <div className="card-body" >
        <div className=" analysis">
        <i className="bi bi-facebook" id="facebook"></i>
          <h5 className="card-title" id="card-title2">FaceBook analysis</h5>
          </div>

          <div className="face-analysis"></div>

        </div>
        
      </div>

      <div className="card" id="card3">
        <div className="card-body">
        <div className=" analysis">
        <i className="bi bi-snapchat"  id="snapchat"></i>
          <h5 className="card-title" id="card-title3">SnapChat analysis</h5>
          
        </div>
        <div className="snap-analysis"></div>
        </div>
      </div>

      <div className="card" id="card4">
        <div className="card-body">
        <div className=" analysis">
        <i className="bi bi-twitter-x"  id="twitter"></i>
          <h5 className="card-title" id="card-title4">Twitter analysis</h5>
        </div>
        <div className="twitter-analysis"></div>
        </div>
      </div>


      <div className="card" id="card5">
        <div className="card-body">
        <div className=" analysis">
        <i className="bi bi-youtube" id="youtube"></i>
          <h5 className="card-title" id="card-title5">YouTube analysis</h5>
          
</div>
<div className="youtube-analysis"></div>
         
        </div>
      </div>


      <div className="card" id="card6" >
        <div className="card-body" >
          <div className=" analysis">
          <i className="bi bi-tiktok" id="tiktok"></i>
          <h5 className="card-title" id="card-title6">TikTok analysis</h5>
        
          </div>
          <div className="tiktok-analysis">
            <span>40m</span> <span></span>
          </div>

        </div>
      </div>
      </div>

      <hr></hr>

      <h2 className="posts">Posts</h2>


      <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



<hr/>

          <h2 className="posts">Social Media Links</h2>
        
          <div className="row justify-content-start mt-3 ">
        <div className="col-auto">
          <button className="btn btn-primary btn-custom btn-instagram">
          <i className="bi bi-instagram" id="social"> </i>
          <a href="#"></a>
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary btn-custom btn-facebook">
            <i className="bi bi-facebook" id="social"></i>
            <a href="#"></a>
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary btn-custom btn-tiktok">
            <i className="bi bi-tiktok"id="social"></i>
            <a href="#"></a>
          </button>
        </div>
      
     
        <div className="col-auto">
          <button className="btn btn-primary btn-custom btn-snapchat">
            <i className="bi bi-snapchat" id="social"></i>
            <a href="#"></a>
          </button>
          </div>


        
        <div className="col-auto">
          <button className="btn btn-primary btn-custom btn-youtube">
            <i className="bi bi-youtube"id="social"></i>
            <a href="#"></a>
          </button>
        </div>
        
        <div className="col-auto">
          <button className="btn btn-primary btn-custom btn-x">
            <i className="bi bi-twitter-x" id="social"></i>
            <a href="#"></a>
          </button>
        </div>

        
      </div>


      </div>


      

    </>
  )

}


export default InfluenceProfilePage;