import React, { useContext } from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import LogOut from "./LogOut"; // import your logout component
import { AuthContext } from "../../contexts/authContext"; // adjust path as needed
import {FaUser} from 'react-icons/fa';
import User from "../User/User";
export default function NavbarbuttonGroup(){
  const { isLoggedIn, user } = useContext(AuthContext);

  return(
    <div className="flex flex-row justify-center gap-4 text-[18px] max-sm:text-[16px]">
      {isLoggedIn? (
        <>
          <span className="font-medium">Welcome, {user?.username}</span>
          <User/>
        </>
      ) : (
        <>
          <LoginButton/>
          <SignupButton/>
        </>
      )}
    </div>
  );
}
