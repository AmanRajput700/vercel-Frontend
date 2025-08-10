import React from "react";
import InformationContainer from "./InformationContainer";
import Detail from "./Detail";
import Social from "./Social";

export default function Footer(){
    return(
        <>
            <footer className="text-gray-600 body-font bg-gray-100">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <InformationContainer/>
                <Detail/>
            </div>
            </footer>
            <Social/>
        </>
    )
}