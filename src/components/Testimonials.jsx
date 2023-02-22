import React, { useEffect, useState } from 'react'
import HeadSection from './HeadSection'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { testimonials } from './data'
import Card from '../UI/Card'
import { useInView } from 'react-intersection-observer'

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
let len = testimonials.length - 1;
const Testimonials = () => {
    const { ref, inView } = useInView({
          threshold:0,
    });

    const [ index,setIndex] =useState(0)
    const { name, avatar, quote, job } = testimonials[index]
    const prevTestimonial = () => {
        setIndex(prev => prev - 1)
        if (index <= 0) {
            setIndex(len)
        }

    }
    const nextTestimonial = () => {
        setIndex(prev => prev + 1)
        if (index >= len) {
            setIndex(0)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index === len ? 0 : index+1)
        }, 5000)
        return ()=> clearInterval(interval)
    },[index])
  return (
      <section className={`testimonials ${inView ? "animate" : " "} `} ref={ref}>
          <div className="container testimonials__container">
              <HeadSection title="Testimonials" icon={<RiDoubleQuotesL />} className="testimonial__head"/>
              <Card className='testimonial__card'>
                  <div className="testimonial__avatar">
                      <img src={avatar} alt={name} />
                  </div>
                  <p className='testimonial__quote'>{`"${quote}"`}</p>
                  <h5>{name}</h5>
                  <small className='testimonial__job'>{job}</small>
            </Card>
              <div className="testimonial__btns">
                  <button className='testimonial__btn left' onClick={prevTestimonial}><FaArrowAltCircleLeft/></button>
                  <button className='testimonial__btn right' onClick={nextTestimonial}><FaArrowAltCircleRight/></button>
            </div>
          </div>
    </section>
  )
}

export default Testimonials