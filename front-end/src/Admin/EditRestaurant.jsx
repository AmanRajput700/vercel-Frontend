import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/authContext";
import RestaurantList from "./RestaurantList";
import { FaUtensils } from "react-icons/fa"; // 🍽 icon

const EditRestaurants = () => {
  const { user } = useContext(AuthContext);
  const [restaurants, setRestaurants] = useState([]);
  const [editingRestaurant, setEditingRestaurant] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    knownFor: "",
    location: "",
    price_for_two: "",
  });

  useEffect(() => {
    if (user.id) {
      axios
        .get(`https://vercel-backend-qzmr.onrender.com/myrestaurants/${user.id}`)
        .then((res) => setRestaurants(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditClick = (restaurant) => {
    setEditingRestaurant(restaurant);
    setFormData({
      name: restaurant.name,
      image: restaurant.image,
      knownFor: restaurant.knownFor,
      location: restaurant.location,
      price_for_two: restaurant.price_for_two,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://vercel-backend-qzmr.onrender.com/${editingRestaurant._id}`,
        { ...formData, userId: user.id }
      );

      const updatedList = restaurants.map((rest) =>
        rest._id === editingRestaurant._id ? { ...rest, ...formData } : rest
      );
      setRestaurants(updatedList);
      setEditingRestaurant(null);
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };

  const handleDelete = async (restaurantId) => {
    try {
      await axios.delete(`https://vercel-backend-qzmr.onrender.com/${restaurantId}/${user.id}`);
      setRestaurants(restaurants.filter((rest) => rest._id !== restaurantId));
    } catch (err) {
      console.error("Error deleting restaurant:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">My Restaurants</h2>

      {/* Empty State */}
      {restaurants.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
          <FaUtensils className="text-5xl text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-700">
            No restaurants yet
          </h3>
          <p className="text-gray-500 text-sm mt-1 mb-5">
            Start by adding your first restaurant and share it with the world.
          </p>
          
        </div>
      ) : (
        <div className="gap-4">
          {restaurants.map((rest) => (
            <RestaurantList
              key={rest._id}
              name={rest.name}
              imageUrl={rest.image}
              onDelete={() => handleDelete(rest._id)}
              onEdit={() => handleEditClick(rest)}
              id={rest._id}
            />
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingRestaurant && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-2xl border border-gray-100 relative animate-fadeIn">
            <h3 className="text-xl font-semibold mb-5 text-gray-800">
              Edit Restaurant
            </h3>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 outline-none transition"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 outline-none transition"
                />
              </div>

              {/* Known For */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Known For
                </label>
                <select
                  name="knownFor"
                  value={formData.knownFor}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 outline-none transition"
                >
                  <option value="">Select Known For</option>
                  <option value="Burger">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Biryani">Biryani</option>
                  <option value="Thali">Thali</option>
                  <option value="Dosa">Dosa</option>
                  <option value="Cake">Cake</option>
                  <option value="Veg-meals">Veg-meals</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 outline-none transition"
                />
              </div>

              {/* Price for Two */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Price for Two
                </label>
                <input
                  type="number"
                  name="price_for_two"
                  value={formData.price_for_two}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 outline-none transition"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setEditingRestaurant(null)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditRestaurants;
