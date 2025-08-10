import React from 'react'
import Template from './Template'

const Collection = () => {
  return (
    <div className='w-[90%] sm:w-[90%] md:w-[80%] mx-auto mt-12'>
      <h1 className='font-[Poppins] text-[2rem]'>Collections</h1>
      <p className=''>Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends</p>

        <div className='flex flex-wrap justify-between mt-8'>
            <Template img="https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171275.png?output-format=webp" routeval='/gujarati-delicacies'/>
            <Template img="https://b.zmtcdn.com/data/collections/757a7716d0478d646babef06ed7e8e2b_1709813110.png?output-format=webp" routeval='/great-cafes'/>
            <Template img="https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1724236728.png?output-format=webp" routeval='/local-favourite'/>
            <Template img="https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171275.png?output-format=webp" routeval='/roof-top'/>
        </div>
    </div>
  )
}

export default Collection
