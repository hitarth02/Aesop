import React from 'react';

const SliderCard = ({image , heading , subHeading}) => {
  return (
    <div className='flex flex-col gap-y-5 mb-20'>
        <img src={image} alt='rerfumes' className=' mx-auto w-[400px] md:h-[400px] lg:h-[400px]'/>
        <div className='flex flex-col gap-y-3'>
            <p className=' font-semibold hover:underline'>
                {heading}
            </p>
            <p>
                {subHeading}
            </p>
        </div>
    </div>
  )
};

export default SliderCard;