import React from 'react'
import HeadSection from '../../components/HeadSection'
import './about.css'
import { SiChinaeasternairlines } from 'react-icons/si'
import {GiTrafficLightsReadyToGo,GiFireworkRocket,GiLovers} from 'react-icons/gi'
import two from '../../assets/two.png'
import four from '../../assets/four.png'
import six from '../../assets/six.png'
import seven from '../../assets/seven.png'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
const About = () => {
              const { ref, inView } = useInView({
          threshold:0,
    });
  return (
    <>
      <section className={`container about__container ${inView?"animate":""}`} ref={ref}>
        <div className="head__container">
        <HeadSection title="About us" icon={<SiChinaeasternairlines/>} />
          <div className="head__content">
            <div className="head__image">
              <img src={two}  alt="sharif" />
            </div>
            <div className="content">
            <h4>It's only the Beginning</h4>
            <p>We are seeking for Fundraising to help build a gym to enable children to play sports after school.</p>
            <Link to="*" className='btn lg'>Read A lot</Link>
            </div>
          </div>
        </div>
        <div className={`head__container ${inView?"animate":""}`} ref={ref}>
        <HeadSection title=" Be Rready!" icon={<GiTrafficLightsReadyToGo/>} />
          <div className="head__content">
            <div className="head__image">
              <img src={four}  alt="sharif" />
            </div>
            <div className="content">
            <h4>Let's get started</h4>
            <p>Be happy with what you're doing till reach to a high score in your life.This is the rule ya man</p>
            <Link to="*" className='btn lg'>Read A lot</Link>
            </div>
          </div>
        </div>
                <div  className={`head__container ${inView?"animate":""}`} ref={ref}>
        <HeadSection title="Be a Rocket" icon={<GiFireworkRocket/>} />
          <div className="head__content">
            <div className="head__image">
              <img src={six}  alt="sharif" />
            </div>
            <div className="content">
            <h4>It's only the Beginning</h4>
            <p>We are seeking for Fundraising to help build a gym to enable children to play sports after school.</p>
            <Link to="*" className='btn lg'>Read A lot</Link>
            </div>
          </div>
        </div>
                <div  className={`head__container ${inView?"animate":""}`} ref={ref}>
        <HeadSection title="No Love" icon={<GiLovers/>} />
          <div className="head__content">
            <div className="head__image">
              <img src={seven}  alt="sharif" />
            </div>
            <div className="content">
            <h4>Let's get started</h4>
            <p>Be happy with what you're doing till reach to a high score in your life.This is the rule ya man</p>
            <Link to="*" className='btn lg'>Read A lot</Link>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default About