import {useEffect, useRef} from 'react'
import logo from './../../assets/images/itximg2.png'
import userImg from './../../assets/images/client-avatar.png'
import { NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-scroll'
import { Link as Link1 } from 'react-router-dom'
import whatsimg from './../../assets/images/whatsapp.png'
import './css/fontello.css'


{/*}
const navLinks = [
  {
    name: "Inicio",
    path: "/home"
  },
  {
    name: "Plataforma de servicios",
    path: "/service"
  },
  {
    name: "Clientes",
    path: "/developers"
  },
  {
    name: "Contacto",
    path: "/contact"
  },
] */}

const navLinks = [
  {
    id: 1,
    name: "Inicio",
  },
  {
    id: 2,
    name: "Plataforma de servicios"
  },
  {
    id: 3,
    name: "Aliados"
  },
  {
    id: 4,
    name: "Contacto"
  }
/*
  {
    id: 4,
    name: "Contacto"
  } ,*/
]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () =>{
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add("sticky__header")
    } else {
      headerRef.current.classList.remove("sticky__header")
    }
  })

  }

  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll',handleStickyHeader)
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');


  return (
    <header className='header flex items-center text-white' ref={headerRef} >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ==== LOGO ==== */}
          <div>
          <Link1 to='/' preventScrollReset >
                <img src={logo} alt="" width={88} height={88}  />
          </Link1>
          </div>

          {/* ==== MENU ==== */}
          <nav className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                   {/*} <NavLink
                    to={link.path}
                    className={navClass =>
                    navClass.isActive
                    ? 'text-celesteColor text-[16px] leading-7 font-[600]'
                    : 'text-textColor text-[16px] leading-7 font-[500] hover:text-celesteColor'}
                    >{link.name}</NavLink>*/}

                    <Link
                    to={link.name} smooth={true} offset={-75} duration={500} className={navClass =>
                      navClass.isActive
                      ? 'text-celesteColor text-[16px] leading-7 font-[600]'
                      : 'text-white text-[16px] leading-7 font-[500] hover:text-celesteColor'}>{link.name}</Link>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* ==== MENU right ==== */}
            <nav className='flex items-center gap-4'>
              <div className='hidden'>
                <Link to="/" >
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src={userImg} className='w-full rounded-full' alt="" />
                  </figure>
                </Link>
              </div>
                
               <Link1 to="https://wa.me/50670120601 ">   
            <p className='icon-whatsapp bg-[#0df053] rounded-[55px] w-[55px] h-[55px] gap-[55px] text-white hover:text-[#0df053] text-[27px] hover:bg-white items-center flex justify-center'></p>
            </Link1>

                
            
                <span className='md:hidden' onClick={toggleMenu}>
                  <BiMenu className="w-6 h-6 cursor-pointer"/>
                </span>

            </nav>    

        </div>
      </div>
    </header>
  )
}

export default Header