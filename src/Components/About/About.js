import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import img3 from '../../about-img.png';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Team from '../Team/Team';
import './About.css';

const About = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('./ServiceData.JSON')
        .then(res => res.json())
        .then(data => setTeams(data))
    },[])
    return (
        <div>
            {/* header */}
            <Header></Header>
            {/* about section */}
          <div className="row container mx-auto d-flex justify-content-center align-items-center py-5">
              <div className="col-lg-6">
                    <img src={img3} className='w-100' alt="" />
              </div>
              <div className="col-lg-6 text-start">
                  <h1 className='about-title pb-2'>Get To Know About Study Point Education</h1>
                  <p className='fs-5 fw-normal'>Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetursed quia non numua eius modi incidunt dolor.

                    Omnis dolor repellendus. Temporibus autem qui aut officiis debitis aut rerum necessitatibus saee eveniet ut et voluptates repudiandae aroin ac lo is arcu, a vestibulum augue rivamus ipsum neu facilisis vel mollis vitae, mollis nec ante.</p>
              </div>
          </div>
          <div>
              <p className='fs-5 fw-normal container text-start'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere ssi omnis voluptas assumenda est, omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis aut rerum nece tatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.</p>
          </div>

          {/* total student cousse count  */}
          <div className='container mx-auto'>
            <div className="row count-container">
                <div className="col-lg-3">
                    <h2 className='fs-1'>500+</h2>
                    <h6 className='fs-5'>Student</h6>
                </div>
                <div className="col-lg-3">
                    <h2 className='fs-1'>50+</h2>
                    <h6 className='fs-5'>Courses</h6>
                </div>
                <div className="col-lg-3">
                    <h2 className='fs-1'>800+</h2>
                    <h6 className='fs-5'>Lesson</h6>
                </div>
                <div className="col-lg-3">
                    <h2 className='fs-1'>25+</h2>
                    <h6 className='fs-5'>Scolership</h6>
                </div>
            </div>
          </div>
          {/* meet our team\ */}
          <div className='container mx-auto'>
              <h1 className='fs-1 fw-bold'>Meet Our Team Members</h1>
              <p className='fs-5 px-5 py-4'>Reudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, reiciendis voluptatibus maiores alias conseuatur</p>
              <div className='row container mx-auto pb-5'>
                  {
                    teams.map(team => <Team
                    key={team.id}
                    team={team}
                    ></Team>)
                  }
              </div>
          </div>
          {/* footer */}
          <Footer></Footer>
        </div>
    );
};

export default About;