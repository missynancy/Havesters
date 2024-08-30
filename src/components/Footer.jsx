import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/public/_8075e302-53d1-4e72-90f5-0d79babb7cc4-removebg-preview.png';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="Company Logo" />
        <div className="footer-contact">
          <a href="tel:+254700000000">
            <i className='bx bx-phone'></i><p>(+254) 7 00 000 000</p>
          </a>
          <a href="mailto:ovacadohavesters@gmail.com">
            <i className='bx bx-envelope'></i><p>sneaker@example.com</p>
          </a>
        </div>
        <div className="footer-links">
          <Link to='/contact'>Contact</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/notification'>Notification</Link>
          <Link to='/application'>Application</Link>
        </div>
      </div>
      <p>&copy; 2024 Avocado Harvesting. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
