import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const ServiceCard = ({item, index}) => {
    const {name, desc, bgColor, textColor, direc} = item 
  return (
    <div className='py-[30px] px-3 lg:px-5 bg-[#324c7c] rounded-[8px]'>
        <h2 className='text-[26px] leading-9 text-white font-[700]'>{name}</h2>
        <p className="text-[16px] leading-7 font-[400] text-white mt-4">{desc}</p>

        <div className="flex items-center justify-between mt-[30px]">
        <Link
        to={direc}
        className='w-[130px] h-[44px] rounded-[8px] text-[#fff] flex items-center justify-center group hover:underline hover:border-none'
        >
          Más información {/*<BsArrowRight className='group-hover:text-white w-6 h-5'/>*/}
        </Link>

        <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]'
        /*style={{background:`${bgColor}`, color:`${textColor}`, borderRadius:"6px 0 0 6px"}} */>
            {/* {index +1} */}
        </span>
        </div>

    </div>
  )
}

export default ServiceCard