import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import team1 from '../../assets/images/team/team1.jpg'
import team2 from '../../assets/images/team/team2.jpg'
import team3 from '../../assets/images/team/team4.jpg'
import team4 from '../../assets/images/team/team4.jpg'

const TeamMember = () => {
    return (
        <section className="scientist-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="team" /> 
                        Team Members
                    </span>
                    <h2>Our Awesome Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-scientist-item-box">
                            <div className="image">
                                <img src={team1} alt="team" />

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
                            <div className="content">
                                <h3>Merv Adrian</h3>
                                <span>CEO & Founder</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-scientist-item-box">
                            <div className="image">
                                <img src={team2} alt="team" />

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
                            <div className="content">
                                <h3>Kirk Borne</h3>
                                <span>UX/UI Designer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-scientist-item-box">
                            <div className="image">
                                <img src={team3} alt="team" />

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
                            <div className="content">
                                <h3>Carla Gentry</h3>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-scientist-item-box">
                            <div className="image">
                                <img src={team4} alt="team" />

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
                            <div className="content">
                                <h3>Marie Curie</h3>
                                <span>Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMember;