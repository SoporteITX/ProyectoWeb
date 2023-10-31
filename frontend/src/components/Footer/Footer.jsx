import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/ITX_Logos_FondoBlancov4-4.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const sociallinks = [{
    icon: <AiFillYoutube />,
    link: 'https://www.youtube.com/@ChrisGamezProfe'
  },
  {
    icon: <AiFillGithub/>,
    link: 'https://www.github.com/ChrisGamezProfe'
  },
  {
    icon: <AiOutlineInstagram/>,
    link: 'https://www.instagram.com/ChrisGamezProfe'
  },
  {
    icon: <RiLinkedinFill/>,
    link: 'https://www.linkedin.com/Christian-Gamez'
  }
]

const navLinks01 = [
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
]

const navLinks02 = [
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
]

const navLinks03 = [
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
]



const Footer = () => {
  return (
    <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor'>
              Copyright {new Date().getFullYear()} 
            </p>
            <div className="flex items-center gap-3 mt-4">
              {sociallinks.map((link,index)  => (
                <Link key={index} to={link.link} className="w-9 h-9 border border-solid border-headingColor rounded-full flex items-center justify-center">
                  {link.icon}
                </Link>
              ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer