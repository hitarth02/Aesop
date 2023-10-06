import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Carousel from '../components/Carousel';
import Section from '../components/Section';
import v1 from '../assets/v1.mp4';
import h1 from '../assets/h1.jpg';
import h2 from '../assets/h2.jpg';
import h3 from '../assets/h3.jpg';
import si1 from '../assets/si1.png';
import si4 from '../assets/si4.png';
import sli1 from '../assets/hsi1.jpg';
import sli2 from '../assets/hsi2.jpg';
import Button from '../components/Button';
import SliderCard from '../components/SliderCard';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Section
        heading={"Ouranon: the sixth Othertopias fragrance"}
        subHeading={"The Athenaeum"}
        text={"Each of the six Othertopias fragrances is a doorway to another realm, real and imagined. Ouranon—a woody, spicy, resinous scent, distinguished by Frankincense, Hay and Myrrh—is the final chapter of that journey. "}
        btnText={"Step inside Ouranon"}
        image={false}
        vidSrc={v1}
        reverse={false}
      />

      {/* slider Section */}
      <div className='hidden lg:block'>
      <Swiper
      modules={[Navigation]}
      spaceBetween={-50}
      breakpoints={{
        640:{
          slidesPerView:1,
        },
        768:{
          slidesPerView:2,
        },
        1024:{
          slidesPerView:3,
        },
        1650:{
          slidesPerView:4
        }
      }}
        navigation
      >
        <SwiperSlide >
        <div className={` flex-col w-[400px] text-left ml-20 mr-12 hidden lg:flex `}>
            <p className=' text-sm mb-8'>
            Fragrance
            </p>
            <div className='flex flex-col gap-y-8 mb-8'>
                <p className=' text-3xl'>
                Our personal scents
                </p>
                <p className=' text-base'>
                  Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.
                </p>
            </div>
            <Button
                btnText={"See all fragrance"}
                dark={false}
            />
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
      </Swiper>
      </div>

      <div className='hidden md:block lg:hidden'>
      <div className={` flex-col text-left ml-20 mr-12 flex mb-10`}>
            <p className=' text-sm mb-8'>
            Fragrance
            </p>
            <div className='flex flex-col gap-y-8 mb-8'>
                <p className=' text-3xl'>
                Our personal scents
                </p>
                <p className=' text-base'>
                  Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.
                </p>
            </div>
            <Button
                btnText={"See all fragrance"}
                dark={false}
            />
        </div>

      </div>

      <div className=' lg:hidden'>
      <Swiper
      modules={[Navigation]}
        spaceBetween={-50}
        breakpoints={{
          640:{
            slidesPerView:1,
          },
          768:{
            slidesPerView:2,
          },
          1024:{
            slidesPerView:3,
          },
          1650:{
            slidesPerView:4
          }
        }}
        navigation
      >
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
      </Swiper>
      </div>


      <Section
        heading={"Efficacious pairings"}
        subHeading={""}
        text={"Our consultants have long combined complementary formulations to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles."}
        btnText={"Browse skin care bundles"}
        image={true}
        imgSrc={h1}
        reverse={true}
      />


      {/* slider Section */}
      <div className='hidden lg:block'>
      <Swiper
      modules={[Navigation]}
      spaceBetween={-50}
      breakpoints={{
        640:{
          slidesPerView:1,
        },
        768:{
          slidesPerView:2,
        },
        1024:{
          slidesPerView:3,
        },
        1650:{
          slidesPerView:4
        }
      }}
        navigation
      >
        <SwiperSlide className='hidden lg:flex'>
          <div className={` hidden flex-col w-[400px] text-left ml-20 mr-12 lg:flex `}>
            <p className=' text-sm mb-8'>
            Parsley Seed Skin Care
            </p>
            <div className='flex flex-col gap-y-8 mb-8'>
                <p className=' text-3xl'>
                Fortification of the highest order
                </p>
                <p className=' text-base'>
                Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.
                </p>
            </div>
            <Button
                btnText={"Explore the range"}
                dark={false}
            />
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si4}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si4}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
      </Swiper>

      </div>

      {/* FOR MOBILE DEVICES */}

      <div className='hidden md:block lg:hidden'>
      <div className={`flex-col text-left ml-20 mr-12 flex mb-10 `}>
            <p className=' text-sm mb-8'>
            Parsley Seed Skin Care
            </p>
            <div className='flex flex-col gap-y-8 mb-8'>
                <p className=' text-3xl'>
                Fortification of the highest order
                </p>
                <p className=' text-base'>
                Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.
                </p>
            </div>
            <Button
                btnText={"Explore the range"}
                dark={false}
            />
        </div>
      </div>

      <div className='  lg:hidden'>
      <Swiper
        modules={[Navigation]}
        breakpoints={{
          640:{
            slidesPerView:1,
          },
          768:{
            slidesPerView:2,
          },
          1024:{
            slidesPerView:4,
          }
        }}
        navigation
      >
        <SwiperSlide>
          <SliderCard
            image={si4}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si4}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            image={si1}
            heading={"Ouranon Eau de Parfum"}
            subHeading={"Woody,spicy,resinous"}
          />
        </SwiperSlide>
      </Swiper>
      </div>



      <Section
        heading={"Store locator"}
        subHeading={""}
        text={"Our consultants are available to host you in-store and provide tailored guidance on gift purchases. "}
        btnText={"Find nearby store"}
        image={true}
        imgSrc={h3}
        reverse={false}
        slider={true}
        sli1={sli1}
        sli2={sli2}
      />


      <Section
        heading={"Composure for the skin and senses"}
        subHeading={"Facial Appointments"}
        text={"For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin."}
        btnText={"Learn more"}
        image={true}
        imgSrc={h2}
        reverse={true}
      />

      <div className=' my-52 lg:my-40'>
        <p className=' text-4xl mb-5'>
          ‘Nothing is ever ended, everything only begun.’
        </p>
        <p>
          Sara Teasdale
        </p>
      </div>

      <Footer/>
    </div>
  )
};

export default Home;