import React from 'react';

const ResturantDetails = ({
  rating,
  totalRatings,
  priceForTwo,
  categories,
  outlet,
  deliveryTime,
}) => {
  return (
    <div className='w-full h-[200px] mt-5 bg-[#efefef] rounded-3xl p-5'>
      <div className='rounded-2xl h-full border bg-white z-10 p-3 sm:p-5'>
        <div className='flex flex-col text-[16px]'>

          {/* Ratings & Price */}
          <div className='flex gap-2 font-bold leading-normal'>
            <span>
              <i className="fa-solid fa-star"></i>
              <span> {rating} ({totalRatings}+ Ratings)</span>
            </span>
            <span><i className="fa-solid fa-circle scale-50"></i></span>
            <span>₹{priceForTwo} for two</span>
          </div>

          {/* Categories */}
          <div className='flex gap-2 text-gray-500 font-semibold text-sm'>
            {categories?.map((cat, idx) => (
              <span key={idx}>
                {cat}{idx !== categories.length - 1 && ','}
              </span>
            ))}
          </div>

          {/* Outlet & Delivery Time */}
          <div className='flex text-sm mt-3'>
            <div className='flex flex-col h-auto items-center justify-center'>
              <div><i className="fa-solid fa-circle scale-30"></i></div>
              <div className='h-[20px] w-0.5 bg-gray-400'></div>
              <div><i className="fa-solid fa-circle scale-30"></i></div>
            </div>

            <div className='flex flex-col h-auto items-start justify-between ml-3'>
              <div className='flex gap-2'>
                <span className='font-bold'>{outlet}</span>
                {/* <span className='font-semibold text-gray-500'>{outlet}</span> */}
              </div>
              <div>
                <span className='font-bold'>{deliveryTime}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResturantDetails;
