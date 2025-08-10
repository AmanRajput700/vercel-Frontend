import { React, useState , useContext } from "react";
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";
import { LoginContext } from "../../contexts/loginContext";
const Login = () => {
  const { isOpen, setisOpen, register , setRegister} = useContext(LoginContext);
  return (
    <div
      className="fixed inset-0 flex items-center justify-center  z-[5000000]"
      onClick={(e) => {
        isOpen ? setisOpen(false) : setisOpen(true);
      }}
    >
      <div className="w-screen h-screen bg-black opacity-80 absolute z-[5000000]">
        {/* blank div just to add the fading effect */}
      </div>

      
      <div
        className="w-[80%] sm:w-[40%] h-[60%] bg-white flex flex-col justify-center items-center rounded-lg z-[5000000] visible"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {register ? <SignUp/> : <LoginForm />}
      </div>
    </div>
  );
};

export default Login;
