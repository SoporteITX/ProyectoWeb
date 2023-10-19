import {useEffect,useRef} from 'react'   
import logo from './../../assets/images/logo.png'
import {NavLink, Link} from 'react-router-dom'

const navLinks = [
    {
        name: 'Inicio',
        path: '/home'
    },
    {
        name: 'Buscar Dev',
        path: '/developers'
    },
    {
        name: 'Servicios',
        path: '/services'
    },
    {
        name: 'Contacto',
        path: '/contact'
    }
]

const Header = () => {
    return (
    <header className='header flex items-center'>
        <div className="container">
            <div className="flex item-center justify-between">
                {/* =====LOGO====*/}
                <div>
                    <img src={logo} alt="" />
                </div>

                {/* === MENU === */}
                <nav className="navigation">
                    <ul className='menu flex items-center gap-[2.7rem]'>
                        {
                            navLinks.map((link,index) => (
                                <li key={index}>
                                    <NavLink 
                                    to={link.path}
                                    className={navClass =>
                                    navClass.isActive
                                    ? 'text-primaryColor text-{16px leading-7 font-[600]'
                                    : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                                    }
                                    
                                    >{link.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Header