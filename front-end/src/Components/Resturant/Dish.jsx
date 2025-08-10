import { useState } from "react";

export default function Dish({ title, price, rating_star, rating_count, image, description }) {
  const [count, setCount] = useState(0);
  const [showFull, setShowFull] = useState(false);

  const toggleDescription = () => setShowFull(!showFull);
  const truncatedDesc =
    description.length > 80 ? description.slice(0, 80) + "..." : description;

  return (
    <div className="flex flex-row justify-between items-start gap-4 py-4 border-b border-gray-200">
      
      {/* Text Info */}
      <div className="flex flex-col flex-1 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-base font-bold text-green-700">&#8377;{price}</p>

        <div className="text-sm text-gray-600">
          <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
          <span className="font-medium text-gray-800">{rating_star}</span>
          <span className="text-gray-500"> ({rating_count})</span>
        </div>

        <div className="text-sm text-gray-700">
          {showFull ? description : truncatedDesc}
          {description.length > 80 && (
            <button
              onClick={toggleDescription}
              className="ml-2 text-green-600 font-semibold hover:underline"
            >
              {showFull ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>

      {/* Image and Add Button */}
      <div className="relative w-40 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover rounded-md"
        />

        <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-5/6">
          {count > 0 ? (
            <div className="flex justify-between items-center bg-green-600 text-white rounded-md px-3 py-1.5">
              <button
                onClick={() => setCount(prev => Math.max(prev - 1, 0))}
                className="px-1 hover:text-gray-300"
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className="font-mono">{count}</span>
              <button
                onClick={() => setCount(prev => prev + 1)}
                className="px-1 hover:text-gray-300"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setCount(1)}
              className="w-full bg-green-600 text-white font-semibold py-1.5 rounded-md hover:bg-green-700"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
