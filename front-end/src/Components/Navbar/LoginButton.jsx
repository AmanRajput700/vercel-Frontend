import React, {useContext} from "react";
import { LoginContext } from "../../contexts/loginContext";
export default function LoginButton(){
    const {isOpen, setisOpen , setRegister} = useContext(LoginContext);
    return(
        <>
            <button className="cursor-pointer" onClick={()=>{setisOpen(true);setRegister(false)}}>Login</button>
        </>
    );
}