import React from 'react'
import {FaCrown} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HeadSection from './HeadSection'
import { programs } from './data'
import Card from '../UI/Card'
import { BsCaretRightSquare } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'
const Head = () => {
        const { ref, inView } = useInView({
          threshold:0,
    });
  return (
      <section  className={`container programs' ${inView ? "animate" : " "} `} ref={ref}  >
          <div className="programs__container">
              <HeadSection icon={<FaCrown/>} title='Programs'/>
          </div>
          <div className="programs__wrapper">
              {
                  programs.map(({ id, icon, title, info, path }) => {
                      return (
                          <Card  key={id}>
                              <span>{icon}</span>
                              <h4>{title}</h4>
                              <strong>{info}</strong>
                              <Link to={path} className='btn sm'>Learn More <BsCaretRightSquare/></Link>
                          </Card>
                      )
                  })
              }
          </div>
    </section>
  )
}

export default Head