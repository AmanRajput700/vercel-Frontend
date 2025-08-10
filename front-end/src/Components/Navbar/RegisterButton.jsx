import React from "react";
import {Link} from 'react-router-dom'

export default function RegisterButton(){
    return(
        <div>
            <Link to='/admin'>
            <button className="cursor-pointer">Add Restaurant</button>
            </Link>
        </div>
    );
}