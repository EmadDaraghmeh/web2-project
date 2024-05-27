import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './Blog.css';
import picture5 from '../Image/coverphoto.png';
import picture6 from '../Image/‏picture6.png';
import picture7 from '../Image/‏‏picture7.png';
import picture8 from '../Image/‏‏picture8.png';
import picture9 from '../Image/picture9.png';
import picture10 from '../Image/‏‏picture10.png';

const images = [picture6, picture7, picture8, picture9, picture10];

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/Blog')
      .then(response => {
        const fetchedBlogs = response.data.data.map((blog, index) => ({
          ...blog,
          image: images[index % images.length] 
        }));
        setBlogs(fetchedBlogs);
      })
      .catch(error => { 
        console.error('Error fetching the blog data', error);
      });
  }, []);

  return (
    <div className="blog">
      <div className="container1" id="container1-blog">
        <img className="coverphoto" src={picture5} alt='Cover' />
        <div className="Heading" id="Heading-blog">
          <h1>Blog</h1>
        </div>
      </div>

      <div className="cards-container">
        <div className="top-card">
          {blogs[0] && (
            <Card
              key={blogs[0].id}
             subject={blogs[0].  subject}
              content={blogs[0].content}
              date={blogs[0].date}
              image={blogs[0].image}
              // readMore={() => window.open(blogs[0].link, '_blank')}
            />
          )}
        </div>

        <div className="middle-cards">
          {blogs.slice(1, 4).map(blog => (
            <Card
              key={blog.id}
              subject={blog.  subject}
              content={blog.content}
              date={blog.date}
              image={blog.image}
              // readMore={() => window.open(blog.link, '_blank')}
            />
          ))}
        </div>

        <div className="bottom-card">
          {blogs[4] && (
            <Card
              key={blogs[4].id}
             subject={blogs[4].subject}
              content={blogs[4].content}
              date={blogs[4].date}
              image={blogs[4].image}
              // readMore={() => window.open(blogs[4].link, '_blank')}
            />
          )}
        </div>
      </div>

      <div className="group">
        <div className="see-more">See more</div>
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
