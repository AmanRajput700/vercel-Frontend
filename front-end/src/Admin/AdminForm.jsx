import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/authContext';

function AddRestaurantForm() {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    knownFor: '',
    location: '',
    price_for_two: '',
  });

  const categories = ['burger', 'pizza', 'biryani', 'thali', 'dosa', 'cake', 'veg-meals','NA'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) {
      alert("You're not logged in. Please log in to add a restaurant.");
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/restaurants', {
        ...formData,
        userId: user.id,
      }, { withCredentials: true });

      alert('Restaurant added successfully!');
      setFormData({
        name: '',
        image: '',
        knownFor: '',
        location: '',
        price_for_two: '',
      });
    } catch (error) {
      console.error(error);
      alert('Error adding restaurant');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🍽️ Add New Restaurant</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Restaurant Name */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            placeholder="e.g., Spice Hub"
            required 
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
        </div>

        {/* Image URL */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input 
            type="text" 
            name="image" 
            value={formData.image} 
            onChange={handleChange}
            placeholder="Paste restaurant image URL"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
          {formData.image && (
            <img 
              src={formData.image} 
              alt="Preview" 
              className="mt-2 w-full h-32 object-cover rounded-lg border"
            />
          )}
        </div>

        {/* Known For */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Known For</label>
          <select 
            name="knownFor" 
            value={formData.knownFor} 
            onChange={handleChange}
            required 
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
          >
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input 
            type="text" 
            name="location" 
            value={formData.location} 
            onChange={handleChange}
            placeholder="e.g., Mumbai, India"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
        </div>

        {/* Price for Two */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price for Two</label>
          <input 
            type="number" 
            name="price_for_two" 
            value={formData.price_for_two} 
            onChange={handleChange}
            placeholder="e.g., 500"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end">
          <button 
            type="submit" 
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            ➕ Add Restaurant
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRestaurantForm;
