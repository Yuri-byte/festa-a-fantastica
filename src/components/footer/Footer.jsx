import React from 'react'
import './footer.css'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Yuri Schwab</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/yuri.schwab"><AiOutlineFacebook/></a>
        <a href="https://instagram.com/y_schwab"><AiOutlineInstagram/></a>
        <a href="https://linkedin.com/in/yurischwab"><AiOutlineLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer