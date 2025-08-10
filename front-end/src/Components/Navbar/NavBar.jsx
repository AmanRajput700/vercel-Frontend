import React from "react";
import NavbarbuttonGroup from "./NavbarbuttonGroup";
import Content from "./Content";
import logo from "../../assets/logo.jpg";
export default function NavBar(){


    return(
    <div className="mx-auto h-[calc(100vh-15rem)] relative" >
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" 
            className="absolute top-0 left-0 h-full w-full object-cover "
        />
        <div className="container flex justify-between items-center text-white mx-auto p-4 z-100000 relative">
           <span className="text-xl font-bold">UrbanEats
           </span>
            <NavbarbuttonGroup/>
        </div>
        <div className="relative h-[70%] text-4xl  text-white flex justify-center items-center">
            <Content/>
        </div>
            
    </div>
    );
}