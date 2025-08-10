// User.js
import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext"; 

const User = () => {
  //const { user } = useContext(AuthContext); // assuming this provides user object
  const { user, isLoggedIn } = useContext(AuthContext);



  return (
    <Link to={`/adminpanel/${user.id}`}>
      <FaUser className="text-white-600 text-xl cursor-pointer hover:text-red-500" />
    </Link>
  );
};

export default User;
