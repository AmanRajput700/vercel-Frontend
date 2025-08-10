import React, { memo ,useContext} from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import { Link, Outlet } from "react-router-dom";
import LogOut from "./LogOut";
import { AuthContext } from "../../contexts/authContext";
import { FaUser } from "react-icons/fa";
import User from "../User/User";
const MainNav = () => {

    const { isLoggedIn, user} = useContext(AuthContext);
    console.log("isLoggedIn:", isLoggedIn);

  return (
    <div className="w-full bg-white top-0 z-50 flex flex-col items-center text-[14px] sm:text-[16px] ">
      <div className="w-full bg-white shadow-md">
        <div
          className="main-nav flex items-center justify-between h-16
          w-[90%] sm:w-[90%] lg:w-[80%] mx-auto font-semibold "
        >
          <span className="text-xl font-bold"><Link to='/'>UrbanEats</Link></span>
          <div className="flex items-center space-x-1 h-12 w-[65%] bg-slate-50  px-2 py-1 rounded-md justify-between max-sm:hidden">
            <div className="flex items-center space-x-2 w-[30%]">
              <i className="fa-solid fa-location-dot scale-125"></i>
              <input
                type="text"
                placeholder="surat"
                className="outline-none w-[70%]"
              />
              <i className="fa-solid fa-caret-down scale-125 w-min"></i>
            </div>
            <div className="w-[2px] h-[20px] bg-orange-600"></div>
            <div className="flex items-center justify-evenly space-x-1 w-[67%]">
              <i className="fa-solid fa-magnifying-glass scale-125"></i>
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Search for resturant, cuisine or a dish"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <>
                <span className="font-medium">Welcome, {user?.username}</span>
                <User/>
              </>
            ) : (
              <>
                <LoginButton />
                <SignupButton />
              </>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-1 h-12 w-full bg-slate-50 px-2 py-1 mt-3 rounded-md justify-between max-sm:visible sm:hidden">
          <div className="flex items-center space-x-2 w-[30%]">
            <i className="fa-solid fa-location-dot scale-125"></i>
            <input
              type="text"
              placeholder="surat"
              className="outline-none w-[70%]"
            />
            <i className="fa-solid fa-caret-down scale-125 w-min"></i>
          </div>
          <div className="w-[2px] h-[20px] bg-orange-600"></div>
          <div className="flex items-center justify-evenly space-x-1 w-[70%]">
            <i className="fa-solid fa-magnifying-glass scale-125"></i>
            <input
              type="text"
              className="outline-none w-full"
              placeholder="Search for resturant, cuisine or a dish"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
