import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import img2 from '../../img2.png';
import img4 from '../../img4.png';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Servic from '../Servic/Servic';
import './Home.css';

const Home = () => {
    //state declear
    const [service, setService] = useState([]);
    //data load
    useEffect(() => {
        fetch('./ServiceData.JSON')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            {/* header */}
            <Header></Header>

           <div className="row container mx-auto d-flex justify-content-center align-items-center consiquatur-container">
               {/* career img */}
               <div className="col-lg-6">
                    <img src={img2} className='homePage-img' alt="" />
               </div>
               {/* career title */}
               <div className="col-lg-6 text-start">
                   <h6 className='text-h6'>CONSIQUATUR</h6>
                   <h1 className='carrer-title'>Advance Your Career Learn Somthing New</h1>
                   <p className='fw-normal py-2 fs-5'>Neque porro quisquam est, qui dolorem ipsum ui dolor sit amet, consectetursed quia non numuam eius modi incidunt dolor in reprehenderit in volua dolore eu fugiat nulla pariatur.
                    Omnis dolor repellendus. Temporibus autem quib aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et mole non recusandae.</p>
                    <button className='btn-read-more'>Read More</button>
               </div>
           </div>
           {/* servic section\ */}
           <div>
               <h1 className='course-title'>Popular Courses</h1>
               <p className='fs-5 py-2 container'>Reudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, reiciendis voluptatibus maiores alias conseuatur</p>
               <div className='row container mx-auto'>
                    {
                        service.map(servic => <Servic
                        key={servic.id}
                        servic={servic}
                        ></Servic>)
                    }
               </div>
           </div>
           {/* Experience​ section */}
           <div>
                <div className="row container mx-auto experiance-container d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 text-start">
                        <h1 className='experiance-title'>Find Out More About Learning Experience​</h1>
                        <p className='fs-5 py-2'>Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetursed quia non numaeius modi incidunt dolor in reprehenderit in voluvelit esse cillum dolore eu fugiat nulla pariatur. consectetursed quia non numaeius modi incidunt dolor in reprehenderit in voluvelit esse cillum dolore eu fugiat nulla pariatur</p>
                        <button className='btn-read-more'>Read More</button>
                    </div>
                    <div className="col-lg-6">
                        <img src={img4} alt="" />
                    </div>
                </div>
           </div>
           {/* footer */}
           <Footer></Footer>
        </div>
    );
};

export default Home;