import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Blog = () => {
  //state declear
  const [blogs, setBlogs] = useState([]);
  //data load
  useEffect(() => {
    fetch('./Serivces.JSON')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
    return (
        <div>
          {/* header */}
          <Header></Header>

         <h1 className='fs-1 fw-bold service-title my-2'>Our Leates Blog</h1> 
         <div className='row container mx-auto py-5'>
            {
              blogs.map(blog => <Blogs
              key={blog.id}
              blog={blog}
              ></Blogs>)
            }
         </div>
         {/* footer */}
         <Footer></Footer>
        </div>
    );
};

export default Blog;