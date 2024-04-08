import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/brand-logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whataspp_icon from '../Assets/whatsapp_icon.png'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        {/* <p>Arteluxe</p> */}
      </div>
      <div className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </div>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whataspp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>{`Copyright @ ${currentYear} - All Rights Reserved`}</p>
      </div>
    </div>
  )
}

export default Footer
