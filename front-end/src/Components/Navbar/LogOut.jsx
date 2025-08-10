import React, { useContext } from 'react'
import axios from 'axios';
import { AuthContext } from '../../contexts/authContext';

const LogOut = ()=>{
    const { setIsLoggedIn,setUser} = useContext(AuthContext); 

    function handleLogout(){
        axios.post('http://localhost:8080/logout', {}, { withCredentials: true })
        .then(() => {
            setIsLoggedIn(false);
            setUser(null);
        })
        .catch(err => console.error("Logout error", err));
    }
    return(
        <div>
            <button className="cursor-pointer" onClick={handleLogout} >LogOut</button>
        </div>
    )
}

export default LogOut;