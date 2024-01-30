import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Aliado1 from './../../assets/images/Al_1.jpg'
import Aliado2 from './../../assets/images/AL_2.jpg'
import Aliado3 from './../../assets/images/Al_3.jpg'
import Aliado4 from './../../assets/images/Al_4.jpg'
import Aliado5 from './../../assets/images/Al_5.jpg'
import Certi1 from './../../assets/images/Cer_1.jpg'
import Certi2 from './../../assets/images/Cer_2.jpg'
import Certi3 from './../../assets/images/Cer_3.jpg'
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[50px]'>
        <Swiper modules={[ Navigation, Autoplay]} loop={true} spaceBetween={30} slidesPerView={1} pagination={{clickable: true}} navigation={true} autoplay={{delay: 2500, disableOnInteraction: false,}}
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
            }}
        >
            <SwiperSlide>
                <div className="py-[25px] px-5 rounded-3">
                    <div className="flex justify-center items-center gap-[13px]">
                        <img className='w-fit h-fit' src={Aliado1} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[25px] px-5 rounded-3">
                   <div className="flex justify-center items-center gap-[13px]">
                   <img className='w-fit h-fit' src={Aliado2} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[25px] px-5 rounded-3">
                    <div className="flex justify-center items-center gap-[13px]">
                        <img className='w-fit h-fit' src={Aliado3} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[25px] px-5 rounded-3">
                    <div className="flex justify-center items-center gap-[13px]">
                        <img className='w-fit h-fit' src={Aliado4} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="py-[25px] px-5 rounded-3">
                    <div className="flex justify-center items-center gap-[13px]">
                        <img className='w-fit h-fit' src={Aliado5} alt="" />
                
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>

       {/* 
        
            <h2 className='heading text-center mt-[30px] md:mb-[30px]'>
                Certificaciones
                </h2>

            <Swiper modules={[Pagination, Autoplay]} loop={true} spaceBetween={30} slidesPerView={1} pagination={{clickable: true}} autoplay={{delay: 2500, disableOnInteraction: false,}}
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
                }}
                >
                <SwiperSlide>
                    <div className="py-[25px] px-5 rounded-3">
                        <div className="flex justify-center items-center gap-[13px]">
                            <img className='w-fit h-fit' src={Certi1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-[25px] px-5 rounded-3">
                    <div className="flex justify-center items-center gap-[13px]">
                    <img className='w-fit h-fit' src={Certi2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-[25px] px-5 rounded-3">
                        <div className="flex justify-center items-center gap-[13px]">
                            <img className='w-fit h-fit' src={Certi3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            */}

        
    </div>
    
  ) 
}

export default Testimonial