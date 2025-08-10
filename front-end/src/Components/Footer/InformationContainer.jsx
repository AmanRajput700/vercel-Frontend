import React from "react";
import Information from "./Information";
import Detail from "./Detail";

export default function InformationContainer(){
    return(
        <>
            <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                
               <Information/>
            
            </div>
        </>
    );
}