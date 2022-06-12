import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    //state declear
    const [services, setServices] = useState([]);
    //data load
    useEffect(() => {
        fetch('./Serivces.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            {/* header\ */}
            <Header></Header>
           <h1 className='fs-1 fw-bold service-title'>Explore Our Services</h1>
           <div className="row container mx-auto">
               {
                   services.map(service => <Service
                   key={service.id}
                   service={service}
                   ></Service>)
               }
           </div>
           {/* footer\ */}
           <Footer></Footer>
        </div>
    );
};

export default Services;