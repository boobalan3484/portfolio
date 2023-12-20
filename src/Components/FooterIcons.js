import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterIcons = (props) => {
    const socialMedias =
        [
            {
                id: 1,
                name: "GitHub",
                link: "https://github.com/boobalan3484",
                icon: faGithub,
                color:'#6e6e6e'
            },
            {
                id: 2,
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/boobalan-nagarajan-b3484n",
                icon: faLinkedin,
                color:'royalBlue'
            },
            {
                id: 3,
                name: "Instagram",
                link: "https://www.instagram.com/_boobalan_advik_/",
                icon: faInstagram,
                color:'blueViolet'
            },
            {
                id: 4,
                name: "Twitter",
                link: "https://twitter.com/",
                icon: faXTwitter,
                color:'#6e6e6e'
            },
            {
                id: 5,
                name: "Facebook",
                link: "https://www.facebook.com/boobalan.advik.202001",
                icon: faFacebook,
                color:'royalBlue'
            }
        ]

    return (
        <ol className=' w-56 px-5 flex items-center justify-between list-none md:w-64 md:px-0 '>

            {
                socialMedias.map((socialMedia) => {
                    return (
                        <li key={socialMedia.id} className=' text-xl h-10 w-8 flex flex-col items-center justify-center socialIconContainer '>

                            <a id={socialMedia.name.toLowerCase()}
                                href={socialMedia.link}
                                target="_blank"
                                // title={socialMedia.name}
                                rel="noreferrer"
                                className='relative flex justify-center items-center'
                            >
                                
                                <p className='text-xs md:text-sm tracking-wide font-semibold absolute invisible'>{socialMedia.name}</p>

                                <FontAwesomeIcon icon={socialMedia.icon} className='hover:text-aqua-marine-0 hover:scale-125 hover:transform duration-200'/>
                            </a>
                        </li>
                    )
                })
            }
        </ol>


    )
}

export default FooterIcons