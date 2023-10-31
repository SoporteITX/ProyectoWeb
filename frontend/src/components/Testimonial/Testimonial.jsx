import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import devAvatar from './../../assets/images/ITX_Logos_FondoBlancov4-4.png'
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[50px]'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable: true}} 
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }
        }>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={devAvatar} alt="" />
                       {/* <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold'>
                                Chris Gámez
                            </h4>
                            <div className='flex items-centergap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
    </div>*/}
                    </div>
{/*
                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.                        
                    </p>
    */}
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={devAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold'>
                                Chris Gámez
                            </h4>
                            <div className='flex items-centergap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.                        
                    </p>

                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={devAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold'>
                                Chris Gámez
                            </h4>
                            <div className='flex items-centergap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.                        
                    </p>

                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={devAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold'>
                                Chris Gámez
                            </h4>
                            <div className='flex items-centergap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.                        
                    </p>

                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={devAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold'>
                                Chris Gámez
                            </h4>
                            <div className='flex items-centergap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.                        
                    </p>

                </div>
            </SwiperSlide>

        </Swiper>

        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable: true}} 
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }
        }>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={devAvatar} alt="" />
                       {/* <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold'>
                                Chris Gámez
                            </h4>
                            <div className='flex items-centergap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
    </div>*/}
                    </div>
{/*
                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.                        
                    </p>
    */}
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={devAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold'>
                                Chris Gámez
                            </h4>
                            <div className='flex items-centergap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.                        
                    </p>

                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={devAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold'>
                                Chris Gámez
                            </h4>
                            <div className='flex items-centergap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.                        
                    </p>

                </div>
            </SwiperSlide>
{/*
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={devAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold'>
                                Chris Gámez
                            </h4>
                            <div className='flex items-centergap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.                        
                    </p>

                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={devAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold'>
                                Chris Gámez
                            </h4>
                            <div className='flex items-centergap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>

                    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.                        
                    </p>

                </div>
            </SwiperSlide>
*/ }
        </Swiper>
    </div>
  )
}

export default Testimonial