import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import MdTime from 'react-ionicons/lib/MdTime';
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import './footer.css';

const Footer = () => (
  < Fragment >
    <Fade bottom>
      <footer>
        <div className="footer-container">
          <div className="footer footer-services">
            <h4>CUSTOMER SERVICE</h4>
            <Link to="/" className="white-link"><h6>FAQs</h6></Link>
            <Link to="/" className="white-link"><h6>Customer Service</h6></Link>
          </div>

          <div className="footer footer-company">
            <h4>BUSINESS</h4>
            <Link to="/" className="white-link"><h6>Careers</h6></Link>
            <Link to="/" className="white-link"><h6>Partner with Us</h6></Link>
            <Link to="/" className="white-link"><h6>Investor Relations</h6></Link>
          </div>

          <div className="footer footer-support">
            <h4>COMPANY</h4>
            <Link to="/" className="white-link"><h6>About Us</h6></Link>
            <Link to="/" className="white-link"><h6>Services</h6></Link>
            <Link to="/" className="white-link"><h6>Partners</h6></Link>
            <Link to="/" className="white-link"><h6>Customer Stories</h6></Link>
            <Link to="/" className="white-link"><h6>Contact Us</h6></Link>
          </div>

          <div className="footer footer-quick-contact">
            {/* <h4>Quick Contact</h4> */}
            <h6 className="footerAddress">
              LAGOS NIGERIA 30 <br /> Shakiru Anjorin Street, Road 39, Off  <br /> Admiralty Way,Lekki Phase 1, Lekki, Lagos, <br /> Phone: +234 123 4456

              </h6>

            <div className="social mt-4">
              <a style={{ marginRight: '10px' }} href="#"> <i style={{ color: '#3A3A3A' }} className="fa fa-linkedin-square" /></a>
              <a style={{ marginRight: '10px' }} href="#"> <i style={{ color: '#3A3A3A' }} className="fa fa-facebook" /></a>
              <a style={{ marginRight: '10px' }} href="#"> <i style={{ color: '#3A3A3A' }} className="fa fa-twitter" /></a>
              <a href="#"> <i style={{ color: '#3A3A3A' }} className="fa fa-instagram" /></a>
            </div>
            {/* 
            <div className="contact-location special">
              <MdTime
                fontSize="2rem"
                color="#fafafa"
                style={{ backgroundColor: 'transparent', marginRight: '7px', textAlign: 'center' }}
              />
              <h6>Mon - Friday  8am - 5pm</h6>
            </div> */}
          </div>
        </div>

        <div className="footer-logo">
          <Link to="/">
          </Link>
        </div>


        {/* 
        <div className="copyright">
          <p>© Copyright Excellent Group</p>
        </div> */}
        {/* 
        <div className="powered">
          <div className="bolt">
          </div>
          <div className="josla-icon">

          </div>
        </div> */}
      </footer >
    </Fade >
  </Fragment >
);

export default Footer;
