import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import img1 from '../../img1.png';

const Header = () => {
    const activeStyle ={
        borderBottom : '2px solid tomato',
    }
    return (
        <div className='header-container'>
            {/* //header logo */}
           <div className='row d-flex align-items-center justify-content-between container'>
                <div className='col-lg-5'>
                   <h1 className='logo-title text-white'><span className='logo-frist-letter'>S</span>tudy Point</h1>
                </div>
                {/* header nav bar  */}
                <div className='col-lg-7'>
                    <nav className='d-flex nav-bar'>
                        <NavLink className='text-decoration-none nav-link' to='/home' activeStyle={activeStyle}>HOME</NavLink>
                        <NavLink className='text-decoration-none nav-link' to='/about' activeStyle={activeStyle}>ABOUT</NavLink>
                        <NavLink className='text-decoration-none nav-link' to='/services' activeStyle={activeStyle}>SERVICES</NavLink>
                        <Link className='text-decoration-none nav-link' to='/blog' activeStyle={activeStyle}>BLOG</Link>
                    </nav>
                </div>
           </div>
           {/* header-bannder */}
           <div className="row w-100 banner-container d-flex justify-content-center align-items-center container mx-auto">
               <div className="col-lg-6">
                <h1 className='banner-title text-white'>The Smarter Way To Learn Anything</h1>
                <p className='text-white text-start py-3 fs-5'>Omnis dolor repellendus temporibus aue quibus dam et aut officiis debitis.</p>
                <div className='text-start mx-2'>
                <button className='btn-contact'>Contact Us</button>
                <button className='btn-readMore'>Read More</button>
                </div>
               </div>
               <div className="col-lg-6">
                    <img src={img1} className='banner-img' alt="" />
               </div>
           </div>
        </div>
    );
};

export default Header;