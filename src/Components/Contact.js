import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Button from './Button'

const Contact = () => {
  const email = 'mailto:boobalan3484@gmail.com'
  return (
    <section id='contact' className=' min-h-72 h-full md:min-h-80  w-full flex items-center justify-center flex-col text-center gap-6'>

      <FontAwesomeIcon
        icon={faPaperPlane}
        className='w-12 md:w-14 h-14'
      />

      <h1 className=' heading'>Get in Touch!</h1>

      <p className=' max-w-md text-lg px-10 md:max-w-lg mx-auto md:text-xl  flex-shrink'>Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</p>

      <Button url={email} value={`Say Hello!`} />

    </section>
  )
}

export default Contact