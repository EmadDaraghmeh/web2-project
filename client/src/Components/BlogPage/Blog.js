
import React from 'react';
import './Blog.css';
import picture5 from '../Image/coverphoto.png';
import picture6 from '../Image/‏picture6.png';
import picture7 from '../Image/‏‏picture7.png';
import picture8 from '../Image/‏‏picture8.png';
import picture9 from '../Image/picture9.png';
import picture10 from '../Image/‏‏picture10.png';

export default function Blog() {
  return (
    <div className="blog">
        <div className="container1" id="container1-blog">
    <img  className=" coverphoto"src={picture5} alt='Cover'></img>
    <div className="Heading" id="Heading-blog">
    <h1 >Blog</h1>
    </div>
</div>
      <div className="card-latest">
        <div className="container1">
          <div className="long-established">
            long established
          </div>
          <div className="paragraph1">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
          </div>
          <div className="container1-a">
            <span className="may-20-th-2020">
              May 20th 2020
            </span>
            <span className="read-more">
              Read more
            </span>
          </div>
        </div>
        <div className="picture6">
        <img  className=" picture6"src={picture6} alt='Picture6'></img>
        </div>
      </div>
      <div className="container2">
        <div className="card-panel-left">
          <div className="picture7">
          <img  className=" picture7"src={picture7} alt='Picture7'></img>

          </div>
          <div className="long-established-1">
            long established
          </div>
          <div className="paragraph2">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
          </div>
          <div className="container2-a">
            <span className="may-20-th-20201">
              May 20th 2020
            </span>
            <span className="read-more-1">
              Read more
            </span>
          </div>
        </div>
        <div className="card-panel-centre">
          <div className="picture8">
          <img  className=" picture8"src={picture8} alt='Picture8'></img>

          </div>
          <div className="long-established-2">
            long established
          </div>
          <div className="paragraph3">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
          </div>
          <div className="container2-b">
            <span className="may-20-th-20202">
              May 20th 2020
            </span>
            <span className="read-more-2">
              Read more
            </span>
          </div>
        </div>
        <div className="card-panel-right">
          <div className="picture9">
          <img  className=" picture9"src={picture9} alt='Picture9'></img>

          </div>
          <div className="long-established-3">
            long established
          </div>
          <div className="paragraph4">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....
          </div>
          <div className="container2-c">
            <span className="may-20-th-20203">
              May 20th 2020
            </span>
            <span className="read-more-3">
              Read more
            </span>
          </div>
        </div>
      </div>
      <div className="highlight-section">
        <div className="container3">
          <div className="what-is-lorem-ipsum">
            What is Lorem Ipsum?
          </div>
          <div className="paragraph5">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...
          </div>
          <div className="container3-a">
            <span className="may-20">
              May 20
            </span>
            <span className="read-more-4">
              Read more
            </span>
          </div>
        </div>
        <div className="picture10">
        <img  className=" picture10"src={picture10} alt='Picture10'></img>

        </div>
      </div>
      <div className="group">
        <div className="see-more">
          See more
        </div>
        <div className="icon">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
</svg>     
   </div>
      </div>
    </div>
  )
}