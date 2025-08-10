import React from "react";

export default function Link({Title}){
    return(
    <li>
        <a className="text-gray-600 hover:text-gray-800 cursor-pointer">{Title}</a>
    </li>
    )
}