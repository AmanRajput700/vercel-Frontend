import React, {useContext} from "react";
import { LoginContext } from "../../contexts/loginContext";
export default function SignupButton(){
    const {isOpen, setisOpen, setRegister} = useContext(LoginContext);
    return(
        <>
            <button className="cursor-pointer" onClick={()=>{
                setRegister(true);
                setisOpen(true);
            }}>Signup</button>
        </>
    );
}