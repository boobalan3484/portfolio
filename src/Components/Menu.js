import React from 'react'
import { Link } from 'react-scroll'

const Menu = () => {

    const menuList = [
        {
            id: 1,
            items: "about"
        },
        {
            id: 2,
            items: "skills"
        },
        {
            id: 3,

            items: "qualification"
        },
        {
            id: 4,
            items: "works"
        },
        {
            id: 5,
            items: "contact"
        }
    ]

    return (
        <>
            {menuList.map((menu) => {
                return (
                    <Link to={`${menu.items}`} activeClass='active'  smooth={true} duration={200} spy={true} offset={0} key={menu.id} className="menu">
                        {menu.items.toUpperCase()}
                    </Link>
                )
            })}
        </>
    )
}

export default Menu