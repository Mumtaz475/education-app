import React from 'react'
import image from '../assets/about.svg'
import {Link} from 'react-scroll'
import Button from '../layout/Button'
import Heading from '../layout/Heading'

const About = () => {
  return (
    <div className='min-h-[50vh] flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14'>
      <div className='w-full md:w-2/4 '>
        <img src={image} alt="" />
      </div>
      <div className='w-full md:w-2/4 text-center space-y-2'>
        <Heading title1='About' title2='Us?'/>
        <p className=" text-gray-500 mt-5 text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus.
        </p>

        <Link to='contact' spy={true} smooth={true} offset={-70} duration={500}>
        <Button title='About Us'/>
        </Link>
        
      </div>
    </div>
  )
}

export default About
