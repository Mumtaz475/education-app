import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <h3 className='text-4xl font-bold'>{props.title1}
             <span className=' text-[#539165]'> {props.title2}</span></h3>

        </div>
    )
}

export default Heading
