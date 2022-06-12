import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Blogs.css';

const Blogs = (props) => {
    //destructering
    const {blog_img, blog_title, blog_date, blog_desc} = props.blog.blog;
    return (
        <div>
          
            <div className='col-lg-12 d-flex justify-content-center align-items-center blog-container'>
            {/* dynamic card declear */}
            <div className='text-start'>
                <img src={blog_img} className='blog-img rounded-3' alt="" />
            </div>
            <div className='text-start ms-4'>
                <h3>{blog_title}</h3>
                <h6 className='text-secondary'>{blog_date}</h6>
                <p className='fs-5'>{blog_desc}</p>
                <button className='btn-read-more'>Read More</button>
            </div>
        </div>
       
        </div>
    );
};

export default Blogs;