import React from 'react'
import MainNav from '../Components/Navbar/MainNav'
import ResturantDetails from '../Components/Resturant/ResturantDetails'
import DishesContainer from '../Components/Resturant/DishesContainer'

const Resturant_page = () => {
  return (<>
    <MainNav/>
    <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%]  mx-auto mt-8'>
        <div>
            <h1 className='font-[Poppins] font-bold text-2xl p-2'>Laziz Pizza</h1>
            <hr className='bg-gray-400 h-[1px] border-none'/>
        </div>
        
        <ResturantDetails/>
        <DishesContainer/>
    </div>
    </>
  )
}

export default Resturant_page
