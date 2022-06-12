import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Servic.css';

const Servic = (props) => {
    //destructing
    const {service_thum, service_name, service_desc, student, lesson, price, } = props.servic;
    const {name} = props.servic.instructor;
    return (
        <div className='col-lg-4 py-3'>
            {/* services card\ */}
            <div className="card" style={{width: '20rem'}}>
                <img src={service_thum} className="card-img-top" alt="..."/>
                <p className='text-end sercice-price'>{price}</p>
                <h6 className='service-name'>{service_name}</h6>
                    <div className="card-body">
                        <h5 className="card-title text-start fs-5">{service_desc}</h5>
                        <p className='card-text text-start'>Quis nostrud exercitation ullamco labor nisi ut aliquip commodo.</p>
                        <div className='text-start pb-2 text-warning'>
                            <span><span><i className="fas fa-book"></i></span> {lesson} Lesson</span>
                            <span className='ms-4'><span><i className="fas fa-user"></i></span> {student} Student</span>
                        </div>
                        <p className="card-text text-start">By <span className='text-info fs-6 fw-normal'>{name}</span></p>
                        <button className='enroll-btn'>Enroll Now</button>
                    </div>
            </div>
        </div>
    );
};

export default Servic;<h1>This is servic components</h1>