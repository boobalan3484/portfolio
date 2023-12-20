import React from 'react'

const Works = () => {

    const projects = [
        {
            "id": 1,
            "title": 'Portfolio Website',
            "description": 'I created a portfolio app that showcases my personal and professional achievements, skills, and projects.',
            "tech": ['React', 'Tailwind CSS'],
            "url": "https://github.com/boobalan3484",
            "image": 'portfolio'
        },
        {
            "id": 2,
            "title": 'Enquiry Form',
            "description": 'I developed a Enquiry Form application. The project extended its capabilities by seamlessly integrating MongoDB to store and manage submitted form data.',
            "tech": ['HTML', 'CSS', 'JavaScript', 'Bulma CSS'],
            "url": "https://github.com/boobalan3484/enquiry-form",
            "image": 'form'
        },
        {
            "id": 3,
            "title": 'To-Do List',
            "description": 'I developed a to do list web app that allows users to create, read, update, and delete tasks. The app uses React & local storage to store the tasks, provides features such as filtering & searching.',
            "tech": ['React', 'CSS'],
            "url": "https://github.com/boobalan3484/todo-list",
            "image": 'todolist'
        },
        {
            "id": 4,
            "title": 'Social Media Post',
            "description": 'I developed a web app that allows users to create, edit, and delete social media posts. The app uses React and Local database that provides features such as filtering, and searching.',
            "tech": ['React', 'CSS'],
            "url": "https://github.com/boobalan3484/social-post-app",
            "image": 'github'
        },
        {
            "id": 5,
            "title": 'Fruit Shop',
            "description": 'I developed a dynamic Fruit Shop app, with React and enhancing the user interface with Tailwind CSS framework. This project showcases my proficiency in front-end development and user interface design.',
            "tech": ['React', 'Tailwind CSS'],
            "url": "https://github.com/boobalan3484/fruit-shop",
            "image": 'fruitshop'
        }
    ]

    return (
        <section id='works' className='w-full h-full md:h-full md:min-h-screen grid justify-items-center content-center gap-10 py-14'>
            <h1 className='heading'>Some things I've Built</h1>
            <ul className='w-4/5 m-auto px-2 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-content-center place-items-center text-start gap-5'
            >
                {projects.map((project) => {
                    return (
                        <a key={project.id} href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className='rounded-lg'
                        >
                            <li className=' w-full rounded-lg hover:transition-all duration-200 hover:-translate-y-2 h-fit flex flex-col bg-yankees-blue-0 shadow-project-shadow shadow-rich-black-shadow-0' >
                                {/* <header style={{ backgroundImage: `url(${require(`../assets/projects_bg/${project.image}.png`)})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '.5rem' }} >

                                    <div className=' backdrop-brightness-75 backdrop-blur-sm  pt-10 pb-3 px-5 md:px-8 h-full rounded-lg ' style={{ background: 'linear-gradient(to bottom, rgba(10, 24, 46, 0.559) 0%, rgba(10, 24, 46, 0.559) 100%)' }}>
                                        <h3 className=' text-xl tracking-wide font-bold text-lavender-blue-0 mb-2'>
                                            {project.title}
                                        </h3>
                                        <p className=' text-base text-lavender-blue-0 text-justify'>
                                            {project.description}
                                        </p>
                                    </div>
                                </header>

                                <footer className=' h-1/5 md:h-1/4'>
                                    <ul className=' flex gap-4 p-3 px-5 md:px-8'>
                                        {project.tech.map((techItem, techIndex) => {
                                            return (
                                                <li key={techIndex} className='font-mono-fam text-xs '> {techItem} </li>
                                            )
                                        })}
                                    </ul>
                                </footer> */}

                                <div className='card w-90vw sm:max-w-38vw md:max-w-38vw lg:max-w-25vw'>
                                    <img src={require(`../assets/projects_bg/${project.image}.png`)} alt="" />

                                    <div className="card-content ">
                                        <h3 className='text-lg md:text-xl tracking-wide font-bold text-white mb-2'>
                                            {project.title}
                                        </h3>
                                        <p className='text-sm md:text-base text-lavender-blue-0 tracking-tight text-justify'>
                                            {project.description}
                                        </p>
                                        <ul className=' absolute bottom-0 flex gap-4 '>
                                            {project.tech.map((techItem, techIndex) => {
                                                return (
                                                    <li key={techIndex} className='font-mono-fam text-xs text-aqua-marine-0 '> {techItem} </li>
                                                )
                                            })}
                                        </ul>

                                    </div>

                                </div>

                            </li>
                        </a>
                    )
                })}

            </ul>

        </section >
    )
}

export default Works