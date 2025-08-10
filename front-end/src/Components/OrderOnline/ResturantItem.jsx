import React from 'react'
import {Link} from 'react-router-dom'
const ResturantItem = ({id,img,name,rating,price,routeval}) => {
    
    return (<>
        
        <Link to={`/restaurants/${routeval}`}>
        <div className=' p-3 rounded-xl hover:shadow-gray-500 hover:shadow-md cursor-pointer transition duration-300 ease-in-out'>
            
            <img src={img} alt="" className='rounded-lg' style={{ height: 170, width: 600, objectFit:'cover' }} />
            <div className='flex justify-between mt-2 items-start'>
                <h1 className='text-md sm:text-lg font-bold'>{name}</h1>
                {/* <p>{rating}</p> */}
                <div className='bg-green-800 rounded-md px-[5px] py-0.5 w-16 text-center mt-0.5 flex justify-center items-center'>
                    <span>{rating}</span>
                    <i className="fa-solid fa-star ml-1"></i>
                </div>
            </div>
            <div className='flex justify-between w-full text-sm'>
                
                <div className='text-right'>{price} for one</div>
            </div>
        </div>
        </Link>
        </>
    )
}

export default ResturantItem
