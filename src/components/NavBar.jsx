import React, { useState } from 'react'
import { GoThreeBars } from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import {pages} from './data'
import {
    NavLink, Link
} from 'react-router-dom'
import './navbar.css'
const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const [ nav, setNav ] = useState(false);
    window.addEventListener('scroll', () => {
        console.log("hello guys")
        if (window.scrollY >= 80) {
        setNav(true) 
        } else {
            setNav(false)
        }
    })
  return (
      <nav className={`${nav ? "active":""}`}>
          <div className={`container nav__container `}>
              <Link className='nav__logo' onClick={()=> setToggle(false)} to="/">F<span>Gym</span> </Link>
              <ul className={`nav__links ${toggle ? "show":"hide"}`}>
                      {pages.map(({ path, name }, index) => {
                          return (
                              <li key={index}>
                              <NavLink  to={path} className={({isActive})=> isActive ? 'active__link':""} onClick={() => setToggle(prev => !prev)}>{name}</NavLink>
                  </li>
                          )
                      })}
              </ul>
              <button className="nav__toggle" onClick={() => setToggle(prev => !prev)}>{
            toggle ? <MdOutlineClose/>    :  <GoThreeBars />}</button>
        </div>
          
    </nav>
  )
}

export default NavBar