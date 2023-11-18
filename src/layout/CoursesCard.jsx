import React from 'react'

const CoursesCard = (props) => {
  return (
    <div className='flex flex-col items-center justify-between bg-white border-2  border-gray-300 md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'>
        <div className='w-3/5'>
            <img src={props.img} alt="" />
        </div>
      <div>
        <h3 className='text-lg font-bold text-center my-5'>{props.title}</h3>
        <p className='text-gray-500 text-center md:text-start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure fuga ipsum ullam necessitatibus velit.
        </p>
      </div>

    </div>
  )
}

export default CoursesCard
