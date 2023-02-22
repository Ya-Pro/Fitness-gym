import React from 'react'
import { gallary } from '../../components/data'
import HeadSection from '../../components/HeadSection'
import Card from '../../UI/Card'
import './gallary.css'
import {RiCustomerServiceFill} from 'react-icons/ri'
import { useInView } from 'react-intersection-observer'
const GallaryContent = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  return (
    <section className={`container gallary__container ${inView?"animate":""}`} ref={ref}>
          <HeadSection title="our Clients" icon={<RiCustomerServiceFill/>} />
          <div className="gallary__content">
                  {gallary.map(({ id, name, quote, job, avatar }) => {
                      return (
                          <Card className="gallary__card" key={id}>
                          <div className="gallary__image">
                             <img src={avatar} alt={name} /> 
                          </div>
                          <h5 className='card__name'>{name}</h5>
              </Card>
                      )
                  })}
          </div>
    </section>
  )
}
export default GallaryContent;