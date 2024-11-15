import React from 'react'

const ContactInfo = () => {
  return (
    <div className="contact-info-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className='bx bx-map'></i>
              </div>
              <div className="icon">
                <i className='bx bx-map'></i>
              </div>
              <h3>Our Address</h3>
              <p>Plano, TX 75025</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className='bx bx-phone-call'></i>
              </div>
              <div className="icon">
                <i className='bx bx-phone-call'></i>
              </div>
              <h3>Contact</h3>
              <p>Tel: <a href="tel:+19454686373">+1 (945) GOT-NERD</a></p>
              <p>E-mail: <a href="mailto:info@ambitiousnerds.com">hello@ambitiousnerds.com</a></p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="contact-info-box">
              <div className="back-icon">
                <i className='bx bx-time-five'></i>
              </div>
              <div className="icon">
                <i className='bx bx-time-five'></i>
              </div>
              <h3>Hours of Operation</h3>
              <p>Monday - Friday: 9:00am - 6:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
