import React from 'react'
import HeadSection from './HeadSection'
import { CgGym } from 'react-icons/cg'
import ten from '../assets/ten.png'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
import { values } from './data'
import { useInView } from 'react-intersection-observer'
const Values = () => {
            const { ref, inView } = useInView({
          threshold:0,
    });
  return (
      <section className={`container values__container ${inView ? "animate" : " "} `} ref={ref}>
          <div className="values__image">
              <img src={ten} alt="exercise" />
          </div>
          <div className="values__content">
          <HeadSection icon={<CgGym/>} title="Our Values"/>
            <blockquote className='quote'>“Very tough! I’m pretty out of shape, so I’m surprised I made it to the end!”</blockquote>
              <div className="values__cards">
                      {values.map(({ id, icon, title, info, path }) => {
                          return (
                <Card key={id} >
                                  <span>{icon}</span>
                                  <h4>{title}</h4>
                                  <strong>{info}</strong>
                                  <Link to={path} className='btn sm'>Value to</Link>
                </Card>
                          )
                      })}
            </div>
          </div>
    </section>
  )
}

export default Values