import React from 'react'
import HeadSection from '../../components/HeadSection'
import './plans.css'
import {GiRingedPlanet} from 'react-icons/gi'
import Card from '../../UI/Card'
import { GiCheckMark, GiCrossMark } from 'react-icons/gi'
import {Link} from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

const Plans = () => {
  const { ref, inView } = useInView({
    threshold:0,
  })
  return (
    <section className={`container plans__container ${inView?"animate":""}`} ref={ref}>
      <HeadSection title="Choose your plan" icon={<GiRingedPlanet />} class/>
        <p className='plans__price'>Our Prices</p>
      <div className="plans__cards">
        <Card className="plan__card ">
          <h3>Basic</h3>
          <h2>99$</h2>
          <h4>Weekly</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis ex, dolore at laborum expedita?</p>
          <div className="content">
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCrossMark className='cross'/>Lorem ipsum dolor sit.</small>
            <small><GiCrossMark className='cross'/>Lorem ipsum dolor sit.</small>
            <small><GiCrossMark className='cross'/>Lorem ipsum dolor sit.</small>
            <small><GiCrossMark className='cross'/>Lorem ipsum dolor sit.</small>
          </div>
          <Link className="btn sm">Get this plan</Link>
        </Card>
          <Card className="plan__card ">
          <h3>Personal</h3>
          <h2>199$</h2>
          <h4>Monthly</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis ex, dolore at laborum expedita?</p>
          <div className="content">
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCrossMark className='cross'/>Lorem ipsum dolor sit.</small>
            <small><GiCrossMark className='cross'/>Lorem ipsum dolor sit.</small>
          </div>
          <Link className="btn sm">Get this plan</Link>
        </Card>
          <Card className="plan__card ">
          <h3>Business</h3>
          <h2>499$</h2>
          <h4>Yearly</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis ex, dolore at laborum expedita?</p>
          <div className="content">
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
            <small><GiCheckMark className='check'/>Lorem ipsum dolor sit.</small>
          </div>
          <Link className="btn sm">Get this plan</Link>
          </Card>
      </div>
    </section>
  )
}

export default Plans