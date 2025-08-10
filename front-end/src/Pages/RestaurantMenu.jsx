import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MainNav from '../Components/Navbar/MainNav'
import ResturantDetails from '../Components/Resturant/ResturantDetails'
import DishesContainer from '../Components/Resturant/DishesContainer'
import Dish from "../Components/Resturant/Dish";

export default function RestaurantMenu() {
  const { id } = useParams(); // this gives the restaurant ID from the URL
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8080/api/restaurants/${id}`);
      setRestaurant(res.data.restaurant);
      setMenuItems(res.data.menuItems);
    };
    fetchData();
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <MainNav/>
    <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%]  mx-auto mt-8'>
        <div>
            <h1 className='font-[Poppins] font-bold text-2xl p-2'>{restaurant.name}</h1>
            <hr className='bg-gray-400 h-[1px] border-none'/>
        </div>
        
        <ResturantDetails rating={restaurant.rating_star} totalRatings={restaurant.rating_count} priceForTwo={restaurant.price_for_two}  categories={restaurant.knownFor} outlet={restaurant.location} deliveryTime={restaurant.delivery_time}/>
        
    </div>
      <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%]  mx-auto mt-8'>
        {menuItems.map(item => (
            <Dish title={item.title} price={item.price} rating_star={item.rating_star} rating_count={item.rating_count} description={item.description} image={item.image}/>
        ))}
      </div>
    </div>
  );
}
