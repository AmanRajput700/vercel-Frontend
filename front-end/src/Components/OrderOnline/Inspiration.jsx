import React from 'react'
import { useRef } from 'react'
import Item from '../List/Item';
const Inspiration = ({title}) => {
    const scrollRef = useRef();
      const nextslide = () => {
        scrollRef.current.scrollLeft += 200;
      };
    
      const prevslide = () => {
        scrollRef.current.scrollLeft -= 200;
      };



  return (
    <div className="w-[90%] sm:w-[90%] md:w-[80%] mx-auto mt-4">
      <h1 className="font-[Poppins] text-[1.3rem] sm:text-[1.5rem] md:text-[1.7rem]">
        Inspiration for your first order
      </h1>

      

      <div className="flex w-full relative items-center">
        {/* left slider */}
        <div
        className="absolute left-0  cursor-pointer z-10 shadow-lg"
        onClick={() => {
          prevslide();
        }}
        ><i className="fa-regular fa-circle-left scale-150 bg-white rounded-full"></i>
         </div>

        {/* list */}
        
        <div className="flex mt-8 flex-nowrap overflow-x-auto space-x-8 items-baseline relative scroll-smooth" ref={scrollRef} style={{scrollBehavior: "smooth",scrollbarWidth: "none",msOverflowStyle: "none",scrollbarColor: "transparent transparent", scrollSnapType:'x mandatory',whiteSpace:"nowrap"}}>
            
            <Item img={"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"} title={'Burger'} routeval={'/order-online/burger'}/>
            <Item img={"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"} title={'Pizza'} routeval={'/order-online/pizza'}/>
            <Item img={"https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png"} title={'Biryani'} routeval={'/order-online/biryani'}/>
            <Item img={"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"} title={'Thali'} routeval={'/order-online/thali'}/>
            <Item img={"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"} title={'Dosa'} routeval={'/order-online/dosa'}/>
            <Item img={"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"} title={'Veg meals'} routeval={'/order-online/veg-meals'}/>
            <Item img={"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"} title={'Cake'} routeval={'/order-online/cake'}/>
        </div>
        {/* right arrow for slide */}
            <div
            className="absolute right-0 cursor-pointer shadow-lg"
            onClick={() => {
                nextslide();
            }}
            >
            <i className="fa-regular fa-circle-right scale-150 bg-white rounded-full"></i>
            </div>
        </div>

      </div>
  )
}

export default Inspiration
