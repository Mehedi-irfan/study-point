import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="row container mx-auto ">
                <div className="col-lg-4">
                    {/* footer logo */}
                <h1 className='text-start logo-title text-white'><span className='logo-frist-letter'>S</span>tudy Point</h1>
                <p className='text-start text-white'>Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetursed quia non numaeius modi incidunt dolor in reprehenderit in voluvelit esse cillum dolore eu fugiat nulla pariatur. consectetursed quia non numaeius modi incidunt dolor in reprehenderit in voluvelit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                <div className="col-lg-4">
                    <nav>
                        {/* footer nav link */}
                    <h6 className='fs-4 information'>Information</h6>
                        <ul className='list-unstyled text-white footer-item'>
                            
                            <li className='py-2'>HOME</li>
                            <li className='py-2'>ABOUT</li>
                            <li className='py-2'>SERVICE</li>
                            <li className='py-2'>BLOG</li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-4">
                    {/* contact us */}
                    <h4 className='text-white mt-4 text-start'>Contact Us</h4>
                    <div className='text-white text-start mt-5 fs-5'>
                        <p><span><i className="fas fa-phone-alt"></i></span> <span className='ms-1'>+880 1892054369</span></p>
                        <p><span><i className="fas fa-envelope"></i></span> <span className='ms-1'>mehediirfan@gmail.com</span></p>
                        <p><span><i className="fas fa-map-marker-alt"></i></span> <span className='ms-1'>Mirsorai,Hadir Fakir Hat,Chattogram</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;