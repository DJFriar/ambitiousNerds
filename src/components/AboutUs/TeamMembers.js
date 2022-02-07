import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import scientist1 from '../../assets/images/scientist/scientist1.png'
import scientist2 from '../../assets/images/scientist/scientist2.png'
import scientist3 from '../../assets/images/scientist/scientist3.png'
import scientist4 from '../../assets/images/scientist/scientist4.png'

const TeamMembers = () => {
    return (
        <section className="scientist-area bg-color pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" /> 
                        Team Members
                    </span>
                    <h2>Our Data Scientist</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-scientist-box">
                            <div className="image">
                                <img src={scientist1} alt="about" />
                            </div>
                            <div className="content">
                                <h3>Merv Adrian</h3>
                                <span>Data Management</span>

                                <ul className="social">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-scientist-box">
                            <div className="image">
                                <img src={scientist2} alt="about" />
                            </div>
                            <div className="content">
                                <h3>Kirk Borne</h3>
                                <span>Data Scientist</span>
                                
                                <ul className="social">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-scientist-box">
                            <div className="image">
                                <img src={scientist3} alt="about" />
                            </div>
                            <div className="content">
                                <h3>Carla Gentry</h3>
                                <span>Analytical Solutions</span>
                                
                                <ul className="social">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-scientist-box">
                            <div className="image">
                                <img src={scientist4} alt="about" />
                            </div>
                            <div className="content">
                                <h3>Marie Curie</h3>
                                <span>Data Scientist</span>
                                
                                <ul className="social">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-facebook'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-twitter'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-instagram'></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                                            <i className='bx bxl-linkedin'></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMembers