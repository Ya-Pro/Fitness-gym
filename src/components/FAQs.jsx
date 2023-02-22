import React from 'react'
import HeadSection from './HeadSection'
import {GoQuestion}  from 'react-icons/go'
import { questions } from './data'
import FAQ from './FAQ'
import { useInView } from 'react-intersection-observer'
const FAQs = () => {
    const { ref, inView } = useInView({
          threshold:0,
    });

  return (
      <section  className={`container faq__container ${inView ? "animate" : " "} `} ref={ref} >
      <HeadSection icon={<GoQuestion />} title="Questions" />
      <div className={`faq__cards`}>
              {questions.map(({ id, question, answer }) => {
                  return (                 
                      <FAQ key={id} question={question} answer={answer} />
                  )
                })}
          </div>
    </section>
  )
}

export default FAQs