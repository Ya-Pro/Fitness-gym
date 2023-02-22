import React from 'react'
import { Link } from 'react-router-dom'
import fire from '../assets/fire.png'
import { useInView } from 'react-intersection-observer'
const Header = () => {
          const { ref, inView } = useInView({
          threshold:0,
    });
  return (
    <div>
      <header className={`container header__container ${inView ? "animate" : " "} `} ref={ref}>
          <div className="header__container__left">
               <h3>#365DaysOfWorkOUt</h3>
               <h1>Join the legends of the Fitness Wolrd</h1>
               <p>It's the change to change your life now practice and practice don't stop Okay</p>
                <Link to='/plans' className="btn lg">Start Now</Link>
          </div>
        <div className="header__container__right">
          <img src={fire} alt="" />
        </div>
     </header>
    </div>
  )
}

export default Header