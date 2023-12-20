import React from 'react'

const Skills = () => {

    const technologies = [
        {
            name: "HTML5"
        },
        {
            name: "CSS3"
        },
        {
            name: "JavaScript"
        },
        {
            name: "Python"
        },
        {
            name: "React"
        },
        {
            name: "Node"
        },
        {
            name: "Express"
        },
        {
            name: "MongoDB"
        },
        {
            name: "Tailwind"
        },
        {
            name: "Bulma"
        },
        {
            name: "BootStrap"
        },
        {
            name: "Sass"
        },
        {
            name: "GitHub"
        },
        {
            name: "FireBase"
        },
        {
            name: "Figma"
        },
        {
            name: "PhotoShop"
        },
        {
            name: "PHP"
        },
        {
            name: "MySQL"
        },

    ]

    return (
        <section id='skills' className=' w-full h-full md:h-screen py-14 lg:py-0 grid justify-items-center content-center gap-10 '>

            <h1 className='heading'> Technologies I've worked with </h1>

            <div className='w-4/5 md:w-skill-md m-auto px-2 md:px-6 '>

                <ul className='grid grid-cols-3 md:grid-cols-6 place-content-center place-items-center text-center gap-6 md:gap-10'>
                    {technologies.map((technology, index) => {
                        return (
                            <li key={index}>
                                <div className='skill-icon grid justify-items-center relative'>
                                    <img src={require(`../assets/skill_logos/${technology.name.toLowerCase()}.svg`)} alt=" " className=' h-14 md:h-16  bg-maastricht-blue-0 relative top-8 transform duration-300 pointer-events-auto ' />
                                    <p className=' text-xs font-medium text-aqua-marine-0 font-mono-fam tracking-wide pt-3 md:text-base md:font-semibold md:tracking-wide '>{technology.name}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Skills