import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import React from 'react'

const Hero = (props) => {

    // const Text = ''
    return (
        <section id='hero' className='h-full md:h-screen w-full  '>
            <div className='h-screen w-full backdrop-brightness-90 flex items-center justify-center'>
                <div className=' flex flex-col gap-2 mt-40 '>

                    <p className=' text-highlight font-mono-fam font-medium tracking-wider text-aqua-marine-0 px-5 '>
                        Hii, I'm
                    </p>
                    <h1 className=' text-big-heading font-julee font-medium text-wild-blue-yonder-0 uppercase tracking-wider px-5 '>
                        {props.name}
                    </h1>
                    <h4 className=' text-sub-heading font-sans-fam tracking-wide px-5 '>
                        Full Stack Web Developer
                    </h4>
                    <FontAwesomeIcon icon={faChevronDown} fade className='mt-28 text-xl'/>
                </div>
            </div>
        </section>
    )
}

export default Hero