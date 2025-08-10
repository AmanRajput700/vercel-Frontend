import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ManageDishes = () => {
  const { id } = useParams(); // restaurant ID
  const [dishes, setDishes] = useState([]);
  const [editingDish, setEditingDish] = useState(null);
  const [showForm, setShowForm] = useState(false); // control form visibility
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    description: ""
  });

  // Fetch dishes for this restaurant
  useEffect(() => {
    axios
      .get(`http://localhost:8080/restaurants/${id}`)
      .then(res => setDishes(res.data.menuItems))
      .catch(err => console.error("Error fetching dishes:", err));
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Add dish
  const handleAddDish = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData, restaurantId: id }; // attach restaurantId
      const res = await axios.post(`http://localhost:8080/restaurants/${id}/dishes`, payload);
      setDishes(prev => [...prev, res.data]);
      setFormData({ title: "", price: "", image: "", description: "" });
      setShowForm(false); // hide form after adding
    } catch (err) {
      console.error("Error adding dish:", err);
    }
  };

  // Delete dish
  const handleDeleteDish = async (dishId) => {
    try {
      await axios.delete(`http://localhost:8080/menu/${dishId}`);
      setDishes(prev => prev.filter(d => d._id !== dishId));
    } catch (err) {
      console.error("Error deleting dish:", err);
    }
  };

  // Edit click
  const handleEditClick = (dish) => {
    setEditingDish(dish);
    setFormData({
      title: dish.title,
      price: dish.price,
      image: dish.image,
      description: dish.description || ""
    });
    setShowForm(true); // show form when editing
  };

  // Submit edit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData, restaurantId: id };
      await axios.put(`http://localhost:8080/dishes/${editingDish._id}`, payload);
      setDishes(prev =>
        prev.map(d =>
          d._id === editingDish._id ? { ...d, ...payload } : d
        )
      );
      setEditingDish(null);
      setFormData({ title: "", price: "", image: "", description: "" });
      setShowForm(false);
    } catch (err) {
      console.error("Error editing dish:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Dishes</h1>
        <button
          onClick={() => {
            setShowForm(prev => !prev);
            setEditingDish(null);
            setFormData({ title: "", price: "", image: "", description: "" });
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showForm ? "Close Form" : "Add Dish"}
        </button>
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <form
          onSubmit={editingDish ? handleEditSubmit : handleAddDish}
          className="space-y-4 mb-6 p-4 border rounded-lg bg-white shadow"
        >
          <input
            type="text"
            name="title"
            placeholder="Dish Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className={`px-4 py-2 rounded text-white ${editingDish ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              {editingDish ? "Save Changes" : "Add Dish"}
            </button>
            {editingDish && (
              <button
                type="button"
                onClick={() => {
                  setEditingDish(null);
                  setFormData({ title: "", price: "", image: "", description: "" });
                  setShowForm(false);
                }}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      )}

      {/* Dish List */}
      <div className="space-y-4">
        {dishes.map((dish) => (
          <div
            key={dish._id}
            className="flex items-center justify-between bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={dish.image}
                alt={dish.title}
                className="h-16 w-16 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-semibold">{dish.title}</h3>
                <p className="text-gray-600">₹{dish.price}</p>
                {dish.description && (
                  <p className="text-sm text-gray-500">{dish.description}</p>
                )}
              </div>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEditClick(dish)}
                className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteDish(dish._id)}
                className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageDishes;
