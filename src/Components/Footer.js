import React from 'react'
import FooterIcons from './FooterIcons';
import Signature from './Signature';

const Footer = (props) => {

    return (
        <footer className='flex bg-transparent backdrop-blur shadow-foot-shadow shadow-rich-black-shadow-0 w-full min-h-footer h-full text-center  relative bottom-0 z-30  items-center justify-center flex-col gap-5'>
            <FooterIcons />
            <Signature name={props.name} logo={props.logo}/>
        </footer>
    )
}

export default Footer