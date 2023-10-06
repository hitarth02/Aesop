import React from 'react';
import Button from './Button';

const Card = ({heading , subHeading , text , btnText , theme = "dark" , dark}) => {
  return (
    <div className={`flex flex-col lg:w-[30%] text-left ml-8 lg:ml-20 mr-8 lg:mr-12 ${theme == "dark" ? "text-black":"text-white"} mb-20 pt-5`}>
        <p className=' text-sm mb-8'>
            {subHeading}
        </p>
        <div className='flex flex-col gap-y-8 mb-8'>
            <p className=' text-3xl'>
                {heading}
            </p>
            <p className=' text-base'>
                {text}
            </p>
        </div>
        <Button
            btnText={btnText}
            dark={dark}
        />
    </div>
  )
};

export default Card;