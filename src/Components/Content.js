import React from 'react'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'

import Resume from './Resume'
import Contact from './Contact'
import Qualification from './Qualification'
import Footer from './Footer';
import Works from './Works'

const Content = (props) => {
    return (
        <div id='content'>

            <main >

                <Hero
                    name={props.name}
                />
                <About
                    name={props.name}
                />

                <Skills />
                <Qualification />
                <Works />

                <Resume
                    pdf={props.pdf}
                />

                <Contact />

                <Footer
                    name={props.name}
                    logo={props.logo}
                />

            </main >
        </div>
    )
}

export default Content