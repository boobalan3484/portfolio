import React from 'react'

const Accreditation = () => {

    const certifications = [

        {
            title: "The Complete ReactJS Course - Basics to Advanced [2021]",
            organization: "Udemy",
            logo: "udemy.svg",
            url: "https://www.udemy.com/certificate/UC-cd4aef64-5985-4b02-899d-6dccc5936355/"
        },
        {
            title: "Python Programming - Basics to Advanced Level [2021]",
            organization: "Udemy",
            logo: "udemy.svg",
            url: "https://www.udemy.com/certificate/UC-4d0d0c26-8037-4e81-8ab8-7115079a32aa/"
        },
        {
            title: "Crash Course on Python",
            organization: "Coursera",
            logo: "coursera.svg",
            url: "https://www.coursera.org/verify/NRC7B46UHV7W"
        },
        {
            title: "Cybersecurity Essentials",
            organization: "Cisco Networking Academy",
            logo: "cisco.png",
            url: "https://drive.google.com/file/d/1zhlLW2WTTyFIg8fB2R8U2vLTnhZnlksX/view?usp=sharing"
        },
        {
            title: "New India Learnathon 2021",
            organization: "ICT Academy",
            logo: "ict-academy.png",
            url: "https://drive.google.com/file/d/1dtjAtoNV7aniwBnSu5BrpI6zDcGmwYiQ/view?usp=sharing"
        }
    ]

    return (
        <div className='w-full grid gap-5'>

            <div className='grid '>

                <h3 className='sub-heading'> Certification </h3>
                <ul>

                    {certifications.map((certification, index) => {
                        return (
                            <li key={index} className='h-auto '>
                                <a href={certification.url} target="_blank" rel="noreferrer" className='url-items'>
                                    <img src={require(`../assets/certificate_logos/${certification.logo}`)} alt='' className=' h-12 w-12 bg-white p-1 rounded-lg' />
                                    <div className='flex flex-col content-center'>
                                        <p className='qualification-sub-title'> {certification.title} </p>
                                        <p className='text-sm'> {certification.organization} </p>
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Accreditation