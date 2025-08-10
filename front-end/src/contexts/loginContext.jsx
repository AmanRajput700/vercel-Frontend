import React,{useState,  createContext} from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const [register, setRegister] = useState(false);
    
    return (
        <LoginContext.Provider value={{ isOpen, setisOpen, register, setRegister }}>
            {children}
        </LoginContext.Provider>
    )


}
