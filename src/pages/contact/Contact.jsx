import React from 'react'
import './contact.css'
import { FaVoicemail } from 'react-icons/fa'
import { TbBrandMessenger, TbBrandWhatsapp } from 'react-icons/tb'
import HeadSection from '../../components/HeadSection'
import { IoIosContact } from 'react-icons/io'
import { useInView } from 'react-intersection-observer'
const Contact = () => {
      const { ref, inView } = useInView({
          threshold:0,
    });
  return (
    <section className={`contact container ${inView ? "animate" : " "} `} ref={ref}>
      <HeadSection title="Let's talk" icon={<IoIosContact/>}/>
      <div className=" contact__container">
        <div className="contact__types">
          <div className="contact__type">
            <FaVoicemail/>
            <h4>Email</h4>
            <h5>sharifatallah20232023@gmail.com</h5>
            <a href="mailto:sharifatallah20232023@gmail.com">Contact with me</a>
          </div>
                    <div className="contact__type">
            <TbBrandWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>01012227045</h5>
            <a href="tel:01012227045">Phone me</a>
          </div>
                  <div className="contact__type">
            <TbBrandMessenger/>
            <h4>Messenger</h4>    
            <h5>sharifatallah</h5>
            <a href="https://ar-ar.facebook.com/">let's Talk</a>
          </div>
        </div>
        {/* the end of the contact types */}
        <form action="" >
          <input type="text" name="fullname" id="name" placeholder='Your Full name' />
          <input type="email" name="email" id="email"  placeholder='Your Email' />
          <textarea name="message" id="message" rows="10" placeholder='your message' ></textarea>
          <button className='btn sm'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact