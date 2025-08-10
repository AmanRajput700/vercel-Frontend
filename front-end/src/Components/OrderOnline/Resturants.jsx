import React, { useState, useEffect } from "react";
import axios from "axios";
import ResturantItem from "./ResturantItem";


const Resturants = () => {
  const [restaurants, setRestaurants] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:8080/api/restaurants")
      .then((res) => {
        setRestaurants(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      <h1 className="font-[Poppins] text-[1.3rem] sm:text-[1.5rem] md:text-[1.7rem] mt-5">
        Food Delivery Restaurants in Surat
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
           !restaurant.isFixedBrand && (
              <ResturantItem
              key={index}
              img={restaurant.image}
              name={restaurant.name}
              rating={restaurant.rating_star}
              price={restaurant.price_for_two}
              routeval={restaurant._id}
              />
          )))
        ) : (
          <p className="text-center col-span-3">Loading restaurants...</p>
        )}
      </div>
    </div>
  );
};

export default Resturants;






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ResturantItem from "./ResturantItem";

// const Resturants = () => {
//   const [restaurants, setRestaurants] = useState([]); 

//   useEffect(() => {
//     axios.get("http://localhost:8080/listings")
//       .then((res) => {
//         setRestaurants(res.data); 
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div className="w-[90%] md:w-[80%] mx-auto">
//       <h1 className="font-[Poppins] text-[1.3rem] sm:text-[1.5rem] md:text-[1.7rem] mt-5">
//         Food Delivery Restaurants in Surat
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
//         {restaurants.length > 0 ? (
//           restaurants.map((restaurant, index) => (
//             <ResturantItem
//               key={index}
//               img={restaurant.image}
//               name={restaurant.name}
//               rating={restaurant.rating} 
//               categories={restaurant.category}
//               price={restaurant.price}
//             />
//           ))
//         ) : (
//           <p className="text-center col-span-3">Loading restaurants...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Resturants;

