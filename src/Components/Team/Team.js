import React from 'react';
import './Team.css';

const Team = (props) => {
    //destructing
    const {name, img, designation} = props.team.instructor;
    return (
        <div className='col-lg-3 py-3'>
           <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h3 className="card-title text-info">{name}</h3>
                <h5>{designation}</h5>
                <p className="card-text text-start">To teach all students according to today’s standards, teachers need to understand subject matter deeply and flexibly so they can help students.</p>
                </div>
                <div className="card-footer d-flex justify-content-around fs-3">
                <span className='team-icon1'><i className="fab fa-facebook-square"></i></span>
                <span className='team-icon2'><i className="fab fa-twitter"></i></span>
                <span className='team-icon3'><i className="fab fa-instagram"></i></span>
                </div>
            </div>  
        </div>
    );
};

export default Team;