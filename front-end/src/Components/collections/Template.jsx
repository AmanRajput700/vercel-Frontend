import React from 'react'
import {Link } from 'react-router-dom'

const Template = ({img,routeval}) => {
  return (
    <div className='w-[45%] sm:w-[23%] md:w-[23%] h-[200px] sm:h-[200px] md:h-[270px] bg-[#f1f1f1] rounded-xl overflow-hidden mb-4 hover:shadow-gray-500 hover:shadow-md cursor-pointer transition duration-300 ease-in-out'>
        <Link to={routeval}>
        <img src={img} alt="" style={{objectFit:'fill', height:'100%', width:'100%'}}/>
        </Link>
    </div>
  )
}

export default Template
