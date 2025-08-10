import React from "react";
import { Link } from "react-router-dom";

const Item = ({img, title,routeval}) => {
  return (
      <div className="w-[20%] sm:w-[15%] md:w-[13%] flex-none ml-2 snap-start">
        <Link to={routeval}>
        <img
          src={img}
          alt=""
          className="rounded-full"
        />
        <h2 className="text-center text-sm sm:text-[16px] md:text-lg font-[Poppins]">{title}</h2>
        </Link>
      </div>
  );
};

export default Item;
