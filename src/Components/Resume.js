import React from 'react'
import Button from './Button'

const Resume = (props) => {
    const title = `Check out my résumé!`
    return (
        <section id='resume' className=' my-10 lg:my-0'>
            <div className='flex flex-col justify-center items-center gap-3 backdrop-brightness-75 overlay '>
                <h1 className='heading'> {title} </h1>
                <Button url={props.pdf} value={`Grab a copy`} />
            </div>
        </section>
    )
}

export default Resume