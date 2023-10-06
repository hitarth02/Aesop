import React from 'react';

const Footer = () => {
  return (
    <div className=' bg-zinc-800 py-10 text-left '>
        <div className=' w-[90%] lg:w-[96%] mx-auto flex lg:flex-row flex-col gap-x-10 gap-y-6 text-white'>
            <div className=' w-full lg:w-[40%] pr-5'>
                <div>
                    <div className='my-8'>
                        Subscribe to Aesop communications
                        <p className=' w-full h-[2px] bg-white mt-6'></p>
                    </div>
                    <input type='email' placeholder='Email Address' className=' bg-zinc-800 border-[2px] border-zinc-200 outline-none h-[40px] w-[100%] placeholder:text-lg placeholder:text-white mb-4 px-5'/>
                    <p>
                        Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.
                    </p>
                </div>
                <div className='hidden lg:flex flex-col mt-24'>
                    <div className='my-8'>
                        Sustainability
                        <p className=' w-full h-[2px] bg-white mt-6'></p>
                    </div>
                
                    <p>
                        All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more
                    </p>
                </div>
            </div>

            <div className=' w-full lg:w-[59%] grid lg:grid-cols-3 grid-cols-2 grid-rows-3 lg:grid-rows-2 gap-14'>
                <div className='flex flex-col'>
                    <div className='my-8'>
                        Orders and support
                        <p className=' w-full h-[2px] bg-white mt-6'></p>
                    </div>
                    <div>
                        <p>Contact us </p>
                        <p>FAQs</p> 
                        <p>Shipping</p> 
                        <p>Returns</p> 
                        <p>Order history</p>
                        <p>Terms and conditions</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='my-8'>
                        Orders and support
                        <p className=' w-full h-[2px] bg-white mt-6'></p>
                    </div>
                    <div>
                        <p>Contact us </p>
                        <p>FAQs</p> 
                        <p>Shipping</p> 
                        <p>Returns</p> 
                        <p>Order history</p>
                        <p>Terms and conditions</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='my-8'>
                        Orders and support
                        <p className=' w-full h-[2px] bg-white mt-6'></p>
                    </div>
                    <div>
                        <p>Contact us </p>
                        <p>FAQs</p> 
                        <p>Shipping</p> 
                        <p>Returns</p> 
                        <p>Order history</p>
                        <p>Terms and conditions</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='my-8'>
                        Orders and support
                        <p className=' w-full h-[2px] bg-white mt-6'></p>
                    </div>
                    <div>
                        <p>Contact us </p>
                        <p>FAQs</p> 
                        <p>Shipping</p> 
                        <p>Returns</p> 
                        <p>Order history</p>
                        <p>Terms and conditions</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='my-8'>
                        Orders and support
                        <p className=' w-full h-[2px] bg-white mt-6'></p>
                    </div>
                    <div>
                        <p>Contact us </p>
                        <p>FAQs</p> 
                        <p>Shipping</p> 
                        <p>Returns</p> 
                        <p>Order history</p>
                        <p>Terms and conditions</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[3px] bg-white mt-20 mb-6'></div>
        <div className='text-lg w-[96%] mx-auto text-white'>
            © Aesop
        </div>
    </div>
  )
};

export default Footer;