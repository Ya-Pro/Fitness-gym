import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiFacebook } from 'react-icons/ci'
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlineLinkedin,AiOutlinePhone} from 'react-icons/ai'
const Footer = () => {
  return (
      <section className='footer__container'>
          <div className="logo__container">
              <Link className='nav__logo' to="/">FGym</Link>
              <p>Now it's the end okay I will show you what I can do it to my future wait and you will see</p>
              <div className="footer__socials">
                  <a href='https://facebook.com'><CiFacebook/></a>
                  <a href='https://whatsapp.com'><FaWhatsapp /></a>
                  <a href="https://linkedin.com"><AiOutlineLinkedin/></a>
                  <a href="tel:01012227045"><AiOutlinePhone/></a>
              </div>
          </div>
        {/* the logo container */}
          <div className="permalinks__container">
              <h4>permalinks</h4>
              <ul className="permalinks__links">
                <NavLink to="about">About</NavLink>
                <NavLink to="plans">Plans</NavLink>
                <NavLink to="trainers">Trainers</NavLink>
                <NavLink to="blog">Blog</NavLink>
                <NavLink to="contact">contact</NavLink>
              </ul>
          </div>
          {/* the permalinks__container */}
          <div className="insights__container">
              <h4>Insights</h4>
              <ul className="insights__links">
                <NavLink to="blog">Blog</NavLink>
                <NavLink to="case">Case Studies</NavLink>
                <NavLink to="events">Events</NavLink>
                <NavLink to="communites">Communites</NavLink>
                <NavLink to="contact">FAQs</NavLink>
              </ul>              
        </div>
          <div className="getintouch__container">
               <h4>Get In Touch</h4>
              <ul className="getintouch__links">
                <NavLink to="contact">Contact Us</NavLink>
                <Link to="support">Support</Link>
              </ul>             
        </div>
    </section>
  )
}

export default Footer