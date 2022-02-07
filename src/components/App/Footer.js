import React from 'react'
import {Link} from 'gatsby'
import logo from "../../assets/images/ambitiousNerds.png"
import footerMap from "../../assets/images/footer-map.png"

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>
              {/* <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p> */}

              {/* <ul className="social-link">
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
              </ul> */}
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>
                
              <ul className="footer-links-list">
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">

          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className='bx bx-map'></i> 
                  Plano, TX 75025
                </li>
                <li>
                  <i className='bx bx-phone-call'></i>
                  <a href="tel:+19404686373">+1 (940) GOT-NERD</a>
                </li>
                <li>
                  <i className='bx bx-envelope'></i>
                  <a href="mailto:tommy@ambitiousnerds.com">hello@ambitiousnerds.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>&copy;{currentYear} Ambitious Nerds, LLC</p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="footer-logo" />
      </div>
    </footer>
  );
}

export default Footer;