import React from 'react'
import Button from './Button'
import Menu from './Menu'

const Header = (props) => {

    return (
        <header className={`w-full fixed z-30  transition-transform duration-300 ease-in-out ${props.scrolling ? '-translate-y-full' : 'translate-y-0'}  ${props.view ? 'translate-y-0' : ''} bg-maastricht-blue-Tint-0 backdrop-blur shadow-xl shadow-rich-black-shadow-0`}>

            <nav className='w-11/12 mx-auto py-3 md:py-3 flex justify-between text-cool-grey-0 '>

                <div className=' w-11/12 mx-auto relative z-20 flex justify-between items-center '>

                    <a href='/' className='flex items-center space-x-3 uppercase'>
                        <img src={props.logo} alt=" " className='h-10 w-8 md:h-11 md:w-9 p-1' />
                        <span className={` ${props.view ? 'invisible' : 'visible'} text-2xl md:text-3xl tracking-widest font-sirin-stencil md:flex items-center text-lavender-blue-0 `} > {props.name} </span>
                    </a>

                    <button onClick={props.menuClicked}
                        className=' flex lg:hidden hover:text-aqua-marine-0 '>
                        {props.view ?
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className=" w-7 h-7 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                    </button>

                </div>

                <div className={`hidden lg:flex justify-center items-center `}>
                    <ol className=' uppercase font-sans-fam text-sm flex items-center '>
                        <Menu />
                    </ol>
                </div>

                <aside className={` ${props.view ? 'flex' : 'hidden'} w-3/4 md:w-3/5 h-screen px-3 pt-12 pb-8 fixed top-0 right-0 bottom-0 z-10 visible lg:hidden translate-x-0 bg-yankees-blue-0 shadow-nav-shadow shadow-rich-black-shadow-0 `}>
                    <nav className=' w-full flex flex-col items-center justify-center text-center'>
                        <ol className=' h-screen w-full text-sm flex flex-col items-center justify-center '>
                            <Menu />
                            <Button url={props.pdf} value={`Resume`} />
                        </ol>
                    </nav>
                </aside>
            </nav>
        </header>
    )
}

export default Header