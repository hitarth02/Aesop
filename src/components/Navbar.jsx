import React from 'react';
import { BiHeart } from 'react-icons/bi';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between lg:w-[96%] md:w-[92%] w-full mx-auto static top-0'>
        <div className=' flex-row gap-x-[29px] lg:py-7 text-base items-center hidden lg:flex'>
            <p>
                Skin Care
            </p>
            <p>
                Body & Hand
            </p>
            <p>
                Hair
            </p>
            <p>
                Fragrance
            </p>
            <p>
                Home
            </p>
            <p>
                Kits & Travel
            </p>
            <p>
                Gifts
            </p>
            <p>
                Reads
            </p>
            <p>
                Stores
            </p>
            <p>
                Facial Appointments
            </p>
            <p>
                <FiSearch className='text-xl text-gray-500'/>
            </p>
        </div>

        <div className=' hidden lg:hidden md:flex flex-row gap-x-[29px] md:py-7 text-base items-center'>
            <p>
                Shop
            </p>
            <p>
                Read
            </p>
            <p>
                Stores
            </p>
        
            <p>
                <FiSearch className='text-xl text-gray-500'/>
            </p>
        </div>

        <div className='hidden md:flex flex-row items-center gap-x-7'>
            <p>
                Login
            </p>
            <p>
                Cabinet
            </p>
            <p>
                cart
            </p>
        </div>


        <div className=' flex flex-row items-center absolute z-50 py-4 px-5 w-full justify-between'>
            <div className=' text-xl text-white'>
                Aesop
            </div>

            <div className='flex flex-row items-center gap-x-7 text-white text-lg'>
                <FiSearch/>
                <BiHeart/>
                <p>Cart</p>
                <AiOutlineMenu/>
            </div>
        </div>
    </div>
  )
};

export default Navbar;