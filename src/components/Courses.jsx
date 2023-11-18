import React from 'react'
import Heading from '../layout/Heading'
import webImg from '../assets/web-dev.svg'
import appImg from '../assets/App-dev.svg'
import graphicImg  from '../assets/graphic.svg'
import digitalImg  from '../assets/digital.svg'
import CoursesCard from '../layout/CoursesCard'

const Courses = () => {
  return (
    <div className='md:h-[70vh]flex flex-col items-center md:mx-32 mx-5 text-center my-10 '>
        <Heading title1='Our' title2='Courses'/>
      <div className='flex flex-wrap justify-center gap-6 mt-6'>
        <CoursesCard img={webImg} title="Web Development"/>
        <CoursesCard img={appImg} title="App Development"/>
        <CoursesCard img={graphicImg} title="Graphic Designing"/>
        <CoursesCard img={digitalImg} title="Digital Marketing"/>
        
      </div>
    </div>
  )
}

export default Courses
