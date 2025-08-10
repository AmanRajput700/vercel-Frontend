import React from 'react';
import { useNavigate } from "react-router-dom";

const RestaurantList = ({ name, image,onDelete,onEdit,id }) => {

  const navigate = useNavigate();
  return (
    <div className="flex w-full bg-white rounded-lg shadow-lg overflow-hidden mb-4 h-40">
      {/* Left: Image + Name */}
      <div className="flex items-center w-3/4 p-4">
        <img
          src={image}
          alt={name}
          className="h-28 w-28 object-cover rounded-lg mr-6"
        />
        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
      </div>

      {/* Right: Buttons stacked */}
      <div className="flex flex-col justify-center items-end w-1/4 pr-6 space-y-2">
        <button
          onClick={() => navigate(`/restaurants/${id}/dishes`)}
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full text-center"
        >
          View
        </button>
        <button onClick={onEdit} className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-md w-full text-center">
          Edit
        </button>
        <button onClick={onDelete} className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-md w-full text-center">
          Delete
        </button>
      </div>
    </div>
  );
};

export default RestaurantList;
