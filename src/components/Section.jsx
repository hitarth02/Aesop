import React from 'react';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section = ({heading , subHeading , text , btnText , image , imgSrc , vidSrc , reverse , slider=false , sli1 , sli2}) => {
  return (
    <div className={` flex justify-between my-32 ${reverse ? "lg:flex-row-reverse flex-col-reverse":"lg:flex-row"} flex-col md:flex-col`}>
        <Card
            heading={heading}
            subHeading={subHeading}
            text={text}
            btnText={btnText}
        />
        {
            !slider && (
                <div className=' lg:w-[60%]'>
            {
                image == true ? (
                    <img src={imgSrc} alt='card' className='w-full'/>
                ):(
                    <video loop autoplay="" muted className='w-full'>
                        <source src={vidSrc} type="video/mp4"/>
                    </video>
                )
            }
        </div>
            )
        }
        {
            slider && (
                <div className=' lg:w-[60%]'>
                    <Swiper
                        modules={[ Navigation , Pagination]}
                        navigation={true}
                        pagination={{
                            type:"fraction"
                        }}
                        
                    >
                        <SwiperSlide>
                            <img src={sli1} alt='card' className='w-full'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={imgSrc} alt='card' className='w-full'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={sli2} alt='card' className='w-full'/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            )
        }
    </div>
  )
};

export default Section;