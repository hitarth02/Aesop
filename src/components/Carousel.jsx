import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import C1 from '../assets/c1.jpg';
import C2 from '../assets/c2.jpg';
import C3 from '../assets/c3.jpg';
import sc1 from '../assets/sc1.jpg';
import sc2 from '../assets/sc2.webp';
import sc3 from '../assets/sc3.jpg';
import mdh1 from '../assets/mdh1.jpg';
import mdh2 from '../assets/mdh2.jpg';
import Card from './Card';

const Carousel = () => {
  return (
    <div>
        <div className=' h-[590px] overflow-hidden -z-10 hidden lg:block'>
            <Swiper
                modules={[EffectFade , Navigation , Pagination]}
                effect='fade'
                navigation={true}
                pagination={{
                    type:"fraction"
                }}
            >
                <SwiperSlide>
                    <div >
                        <div className=' flex absolute z-50 mt-24 gap-x-16 ml-10'>
                            <div className=' text-4xl text-white'>
                                AESOP
                            </div>
                            <div className='invisible lg:visible'>
                                <Card
                                    heading={"Ouranon Eau de Parfum"}
                                    subHeading={"A new Othertopias fragrance"}
                                    text={"A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh."}
                                    btnText={"Discover Ouranon"}
                                    theme={"light"}
                                    dark={true}
                                />
                            </div>
                        </div>
                        <img src={C1} alt='c1' className=' z-10 -mt-10 object-cover'/>  
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=' flex absolute z-50 mt-24 gap-x-16 ml-10'>
                        <div className=' text-4xl text-white'>
                            AESOP
                        </div>
                        <Card
                            heading={"Bouyant bodies"}
                            subHeading={"Hand and Body care"}
                            text={"Three joyful elements of bathing—cleansing, scrubbing and hydrating—are facilitated by formulations boasting a variety of benefits and aromas, ensuring optimal satisfaction for all."}
                            btnText={"Discover Body & Hand care"}
                            theme={"light"}
                            dark={true}
                        />
                    </div>
                    <img src={C2} alt='c2' className=' -mt-8'/>
                </SwiperSlide>
                <SwiperSlide className='flex'>
                    <div className=' absolute w-[90%] h-[100%] -z-10 bg-white flex gap-x-16 pl-10 pt-24'>
                        <div className=' text-4xl text-black'>
                            AESOP
                        </div>
                        <Card
                            heading={"Parsley Seed Anti-Oxidant Intense Serum"}
                            subHeading={"Supporting city skin"}
                            text={"Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind."}
                            btnText={"Discover the formulation"}
                            theme={"dark"}
                            dark={false}
                        />
                    </div>
                    <img src={C3} alt='c3' className=' w-[65%] float-right -mr-56'/>
                </SwiperSlide>
            </Swiper>
        </div>


        {/* {for mid size devises and mobile} */}
        <div className=' hidden md:block overflow-hidden object-fill -z-10  lg:hidden'>
            <Swiper
                modules={[EffectFade , Navigation , Pagination]}
                effect='fade'
                navigation={true}
                pagination={{
                    type:"fraction"
                }}
            >
                <SwiperSlide>
                    <img src={mdh1} alt='c1' className=' z-10 -mt-10 object-cover'/>  
                    <div className=' mt-28 w-[80%] mx-auto bg-white'>
                            <Card
                                    heading={"Ouranon Eau de Parfum"}
                                    text={"A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh."}
                                    btnText={"Discover Ouranon"}
                                    theme={"dark"}
                                    dark={false}
                                />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                
                    <img src={mdh2} alt='c2' className=' -mt-8'/>
                    <div className=' mt-32 w-[80%] mx-auto bg-white pb-5'>
                        <Card
                                heading={"Bouyant bodies"}
                                text={"Three joyful elements of bathing—cleansing, scrubbing and hydrating—are facilitated by formulations boasting a variety of benefits and aromas, ensuring optimal satisfaction for all."}
                                btnText={"Discover Body & Hand care"}
                                theme={"dark"}
                                dark={false}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex'>
                    <img src={C3} alt='c3' className=' scale-150 mt-14'/>
                    <div className=' mt-60 w-[80%] mx-auto bg-white pb-10'>
                    <Card
                            heading={"Parsley Seed Anti-Oxidant Intense Serum"}
                            text={"Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind."}
                            btnText={"Discover the formulation"}
                            theme={"dark"}
                            dark={false}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        {/* {for mobile} */}
        <div className=' md:hidden overflow-hidden object-fill -z-10  lg:hidden'>
            <Swiper
                modules={[EffectFade , Navigation , Pagination]}
                effect='fade'
                navigation={true}
                pagination={{
                    type:"fraction"
                }}
            >
                <SwiperSlide>
                    <img src={sc3} alt='c1' className=' z-10 -mt-10 object-cover'/>  
                    <div className=' mt-28 w-[80%] mx-auto bg-white'>
                            <Card
                                    heading={"Ouranon Eau de Parfum"}
                                    text={"A fragrance that evokes a silent monolith, the last vestige of a stone circle whose meaning has been lost to time—earthy minerality commingling with Frankincense, Hay and Myrrh."}
                                    btnText={"Discover Ouranon"}
                                    theme={"dark"}
                                    dark={false}
                                />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                
                    <img src={sc2} alt='c2' className=' -mt-8'/>
                    <div className=' mt-32 w-[80%] mx-auto bg-white pb-5'>
                        <Card
                                heading={"Bouyant bodies"}
                                text={"Three joyful elements of bathing—cleansing, scrubbing and hydrating—are facilitated by formulations boasting a variety of benefits and aromas, ensuring optimal satisfaction for all."}
                                btnText={"Discover Body & Hand care"}
                                theme={"dark"}
                                dark={false}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex'>
                    <img src={sc1} alt='c3' className=''/>
                    <div className=' mt-24 w-[80%] mx-auto bg-white pb-10'>
                    <Card
                            heading={"Parsley Seed Anti-Oxidant Intense Serum"}
                            text={"Explore how this anti-oxidant-rich serum hydrates, replenishes and fortifies the skin via a suite of ingredients selected with urban dwellers in mind."}
                            btnText={"Discover the formulation"}
                            theme={"dark"}
                            dark={false}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
};

export default Carousel;