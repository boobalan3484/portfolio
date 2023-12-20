import React from 'react'

const Signature = (props) => {
    return (
        <>
            <p className=' font-mono-fam text-sm px-4 md:text-lg flex'> Designed & Built by <span className=' font-julee tracking-wider text-aqua-marine-0 flex '><img src={props.logo} alt='' className='h-5 md:h-6 px-1 md:px-2' /> {props.name} </span> </p>
            {/* &#x1F49C; */}
        </>
    )
}

export default Signature