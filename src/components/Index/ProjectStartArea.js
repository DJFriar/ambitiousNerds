import React from 'react'
import {Link} from 'gatsby'
import projectStart from '../../assets/images/project-start1.png'
import shape from '../../assets/images/shape/circle-shape1.png'

const ProjectStartArea = () => {
  return (
    <div className="project-start-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
          <div className="project-start-content">
              <h2>Let's Get Started</h2>
              <p>We can't wait to help your ideas come to life.</p>
              <Link to="/contact" className="default-btn">
                <i className="flaticon-web"></i> 
                Get Started 
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="project-start-image">
              <img src={projectStart} alt="project" />
            </div>
          </div>
        </div>
      </div>
      <div className="circle-shape1">
        <img src={shape} alt="project" />
      </div>
    </div>
  )
}

export default ProjectStartArea;