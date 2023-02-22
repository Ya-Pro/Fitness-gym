import React from 'react'
import { useState } from 'react'
import {TiPlusOutline,TiMinus} from 'react-icons/ti'
const FAQ = ({ id, question, answer }) => {
    const [isShowen, setShow] = useState(false);
        return (
                  <article key={id} className='faq__card'  onClick={()=> setShow(prev => !prev)} >
                                <div className='question' >
                                    <h5>{question}</h5>
                                    <button>
                                        {isShowen ? <TiMinus/>:<TiPlusOutline/>}
                                    </button>
                                </div>
                                {isShowen ? <p className='answer'>{answer}</p>:null}
                   </article>
        )
}

export default FAQ