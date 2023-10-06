import React from 'react';
import {BiRightArrowAlt} from 'react-icons/bi';

const Button = ({btnText , dark}) => {
  return (
    <div className={` p-5 border border-gray-300 w-fit ${!dark ? "hover:border-zinc-800 hover:bg-zinc-800 hover:text-white":"hover:border-white hover:bg-white hover:text-zinc-800"} cursor-pointer`}>
        <div className=' flex items-center gap-x-24 '>
            {btnText}
            <BiRightArrowAlt className='text-xl text-gray-400 hover:text-white'/>
        </div>
    </div>
  )
};

export default Button;