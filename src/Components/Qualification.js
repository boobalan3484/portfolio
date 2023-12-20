import React from 'react'
import Expertise from './Expertise'
import Accreditation from './Accreditation'

const Qualification = () => {
    return (
        <section id='qualification' className=' w-full h-full lg:h-screen py-14 lg:py-0 grid justify-items-center content-center gap-10  '>
            <h1 className='heading'>Expertise & Accreditation </h1>
            <div className=' w-11/12 md:w-5/6 m-auto px-2 md:px-6 grid lg:grid-cols-qualification  place-items-center text-start gap-5 md:gap-8 '>
                <Expertise />
                <Accreditation />
            </div>
        </section>
    )
}

export default Qualification