import React from 'react'
import { trainers } from '../../components/data'
import HeadSection from '../../components/HeadSection'
import Card from '../../UI/Card'
import {RiCustomerServiceFill} from 'react-icons/ri'
import { useInView } from 'react-intersection-observer'
const TrainersContent = () => {
  const { ref, inView } = useInView({
    threshold:0,
  })
  return (
      <section className={`container trainers__container ${inView?"animate":""}`} ref={ref} >
          <HeadSection title="our Clients" icon={<RiCustomerServiceFill/>} />
          <div className="trainers__content">
                  {trainers.map(({ id, name, quote, job, avatar }) => {
                      return (
                          <Card className="trainers__card" key={id}>
                          <div className="trainers__image">
                             <img src={avatar} alt={name} /> 
                          </div>
                          <h5 className='card__name'>{name}</h5>
                  <p className="card__quote">{quote}</p>
                  <small className='card__job'>{job}</small>
              </Card>
                      )
                  })}
          </div>
    </section>
  )
}

export default TrainersContent