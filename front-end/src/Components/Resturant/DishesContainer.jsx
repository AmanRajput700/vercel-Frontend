import React from 'react'
import Dish from './Dish'

const DishesContainer = () => {
  return (
    <div className='w-full mt-5'>
      <h1 className='font-[Poppins] font-bold text-2xl p-3'>Dishes for you</h1>

      <div className='flex flex-col gap-10 p-3'>
        <Dish title='Cheese garlic bread' price={"123"} rating_star={"4.2"} rating_count={"200"} description={'paneer '} image={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dibrzyaugd7gxvagilsf"}/>
        
      </div>
    </div>
  )
}

export default DishesContainer
