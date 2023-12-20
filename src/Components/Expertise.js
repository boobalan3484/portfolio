import React from 'react'

const Expertise = () => {

    const professions = [
        {
            "heading": " Professional Experience ",
            "title": " Trainee - Full Stack Web Development ",
            "organization": " Edureka Learning Centre, Salem - Tamil Nadu. ",
            "year": " April 2023 - December 2023 ",
            "logo": 'ELC.svg',
            "url": "https://drive.google.com/file/d/1zhlLW2WTTyFIg8fB2R8U2vLTnhZnlksX/view?usp=sharing"
        },
        {
            "heading": " Education ",
            "title": " Bachelor of Science - Information Technology ",
            "organization": " Dr. N.G.P. Arts and Science College, Coimbatore - Tamil Nadu. ",
            "year": " June 2019 - June 2022 ",
            "logo": 'NGPASC.jpeg',
            "url": "https://drive.google.com/file/d/1zhlLW2WTTyFIg8fB2R8U2vLTnhZnlksX/view?usp=sharing"
        }
    ]

    return (
        <div className='w-full grid gap-5'>

            {professions.map((profession, index) => {

                return (
                    <div key={index} className='grid'>
                        <h3 className='sub-heading'>{profession.heading}</h3>
                        <ul>
                            <li >
                                <a  className='url-items h-auto' href={profession.url} target="_blank" rel="noreferrer">
                                    <img src={require(`../assets/institutions_logos/${profession.logo}`)} alt='' className=' h-16 w-16 bg-white p-1 rounded-lg' />
                                    <div className='flex flex-col content-center'>
                                        <p className='qualification-sub-title'>{profession.title}</p>
                                        <p className='text-sm'>{profession.organization}</p>
                                        <p className='text-sm'>{profession.year}</p>
                                    </div>

                                </a>
                            </li>
                        </ul>

                    </div>
                )
            })}

        </div>
    )
}

export default Expertise