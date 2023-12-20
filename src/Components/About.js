import React from 'react'
import Avatar from '../assets/avatars/Avatar.jpg'

const About = (props) => {

    return (
        <section id='about' className=' h-full md:h-screen w-full grid justify-items-center content-center gap-10 py-14 lg:py-0'>
            <h1 className='heading'>Who am I</h1>
            <div className=' w-4/5 grid md:grid-cols-about justify-items-center content-center items-center gap-10   '>
                <div className=' avatar-container relative h-profile w-profile md:h-profile-md md:w-profile-md grid justify-items-center content-center '>
                    <img src={Avatar} alt=' ' className=' h-52 w-28 md:h-80 md:w-44 z-10 rounded outline-0 border-2 border-aqua-marine-0 ' />
                    {/* <div className=' h-52 w-28 md:h-80 md:w-44 absolute rounded  outline-0 border-2 border-aqua-marine-0 -top-0 -left-0'> </div> */}
                    <div className=' h-52 w-28 md:h-80 md:w-44 absolute rounded  outline-0 border-2 border-aqua-marine-0 bottom-0 right-0'> </div>
                </div>
                <p className='text-base lg:text-lg grid content-center text-justify leading-loose tracking-wider'>
                    Hello! I'm {`${props.name}`} and I enjoy creating things that live on the internet.
                    Highly motivated and adaptable professional with a solid background in Computer Science & Information Technology.
                    I'm a web development enthusiast with a passion for creating dynamic and engaging websites, through my journey in web development.
                    I've gained proficiency in HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS and MongoDB.
                    These skills, combined with my determination an enthusiasm, have motivated me to expand my expertize and explore the full potential of web development.
                </p>
            </div>
        </section>
    )
}

export default About