import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div>
            <div className='flex flec-col md:flex-row justify-between bg-white border-2 border-gray-400 rounded-lg md:px-32 px-5 p-5'>
                <div className='flex flex-col md:flex-row gap-5 p-1 font-medium text-lg'>
                    <Link to='home' spy={true} smooth={true} offset={-70} duration={500} className='hover:text-[#539165] transition-all cursor-pointer'>Home</Link>
                    <Link to='about' spy={true} smooth={true} offset={-70} duration={500} className='hover:text-[#539165] transition-all cursor-pointer'>About</Link>
                    <Link to='courses' spy={true} smooth={true} offset={-70} duration={500} className='hover:text-[#539165] transition-all cursor-pointer'>Courses</Link>
                    <Link to='reviews' spy={true} smooth={true} offset={-70} duration={500} className='hover:text-[#539165] transition-all cursor-pointer'>Reviews</Link>
                    <Link to='contact' spy={true} smooth={true} offset={-70} duration={500} className='hover:text-[#539165] transition-all cursor-pointer'>Contact</Link>
                </div>
                <div>
                    <Link to='/' className='font-bold text-2xl p-1 cursor-pointer'>
                        eStudy
                    </Link>
                </div>
            </div>
            <div className='text-center mt-4'>
                    <p>@copyright developed by 
                        <span className='text-[#539165]'> champion coding </span>
                        All rights reserved
                    </p>
                </div>
        </div>
    )
}

export default Footer
