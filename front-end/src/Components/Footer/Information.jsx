import React from "react";
import Link from "./Link";

export default function Information(){
    return(
        <>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ABOUT URBAN EATS</h2>
        <nav className="list-none mb-10">
          <Link Title='Who We Are'/>
          <Link Title='Blog'/>
          <Link Title='Work With Us'/>
          <Link Title='Report Fraud'/>
          <Link Title='Contact Us'/>
        </nav>
      </div>


      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">FOR RESTAURANT</h2>
        <nav className="list-none mb-10">
          <Link Title='Partner With Us'/>
          <Link Title='Apps For You'/>
        </nav>
      </div>


      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LEARN MORE</h2>
        <nav className="list-none mb-10">
          <Link Title='Privacy'/>
          <Link Title='Security'/>
          <Link Title='Terms'/>
        </nav>
      </div>
        </>
    );
}