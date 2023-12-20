import React from 'react'

const Button = (props) => {
    return (
        <a className=" normal-case my-3 px-8 md:px-9 py-3 text-sm md:text-base text-aqua-marine-0 border-aqua-marine-0 font-mono-fam tracking-wider rounded outline-0 border-2 hover:shadow-button-shadow hover:shadow-aqua-marine-0 hover:transform hover:transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1  "
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.value}
        </a>
    )
}

export default Button