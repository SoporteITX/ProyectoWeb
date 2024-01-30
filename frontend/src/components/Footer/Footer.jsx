import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/images/imagen.png'
import DatF from './../../assets/images/DatFooter.png'
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
    <div className="bg-[#304876] p-4" style={{ filter: 'brightness(105%)' }}>
    <div className="container">
    <div className="flex justify-between flex-col md:flex-row flex-wrap gap-8 items-center">
      <div className="flex items-center gap-4">
        <img src={logo} alt="" width={225} height={225} />
        <p className="text-16 leading-7 font-400 text-textColor"></p>
      </div>
      
      <div className="flex items-center gap-3 mt-4">
      
        {sociallinks.map((link, index) => (
          
          <Link
            key={index}
            to={link.link}
            className="w-9 h-9 border border-solid border-white text-white rounded-full flex items-center justify-center"
          >
            
            {link.icon}

          </Link>
          
        ))}
      </div>

      <div>
        {/*
        <p className='text-white'>Copyright &copy; {new Date().getFullYear()}</p>
        */}
        <img src={DatF} alt="" width={225} height={225} />
      </div>
    </div>
  </div>
  </div>
  )
}

export default Footer